import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 2500;
const MAX_MESSAGE_LENGTH = 2500;

const requestStore = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  budget?: string;
  message?: string;
  website?: string;
  startedAt?: number;
};

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requestStore.get(ip);

  if (!current || current.resetAt <= now) {
    requestStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  requestStore.set(ip, current);
  return false;
}

function isLikelySpam(text: string) {
  const lower = text.toLowerCase();
  const linkMatches = lower.match(/https?:\/\//g) || [];
  const repeatedChars = /(.)\1{8,}/.test(lower);
  const suspiciousWords = /(casino|viagra|loan|bitcoin|crypto giveaway|seo package)/i.test(text);

  return linkMatches.length > 2 || repeatedChars || suspiciousWords;
}

function normalize(value: string | undefined) {
  return (value || "").trim();
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
    }

    const name = normalize(payload.name);
    const company = normalize(payload.company);
    const email = normalize(payload.email);
    const budget = normalize(payload.budget);
    const message = normalize(payload.message);

    if (payload.website) {
      return NextResponse.json({ ok: true });
    }

    if (typeof payload.startedAt !== "number" || Date.now() - payload.startedAt < MIN_FORM_FILL_MS) {
      return NextResponse.json({ ok: true });
    }

    if (Date.now() - payload.startedAt > 24 * 60 * 60 * 1000) {
      return NextResponse.json({ ok: false, error: "Form expired" }, { status: 400 });
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ ok: false, error: "Invalid message length" }, { status: 400 });
    }

    if (isLikelySpam(`${name} ${company} ${message}`)) {
      return NextResponse.json({ ok: true });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword || !recipientEmail) {
      return NextResponse.json({ ok: false, error: "Mail config missing" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });

    const safe = (value: string) => value.replace(/[&<>"']/g, (char) => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return map[char] || char;
    });

    const textBody = [
      "Nieuw bericht via RV Frontend contactformulier",
      "",
      `Naam: ${name}`,
      `Bedrijf: ${company || "-"}`,
      `E-mail: ${email}`,
      `Budget: ${budget || "-"}`,
      "",
      "Bericht:",
      message
    ].join("\n");

    const htmlBody = `
      <h2>Nieuw bericht via RV Frontend contactformulier</h2>
      <p><strong>Naam:</strong> ${safe(name)}</p>
      <p><strong>Bedrijf:</strong> ${safe(company || "-")}</p>
      <p><strong>E-mail:</strong> ${safe(email)}</p>
      <p><strong>Budget:</strong> ${safe(budget || "-")}</p>
      <p><strong>Bericht:</strong></p>
      <p>${safe(message).replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: `RV Frontend Website <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Nieuw contactverzoek van ${name}`,
      text: textBody,
      html: htmlBody
    });

    return NextResponse.json({ ok: true, received: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
