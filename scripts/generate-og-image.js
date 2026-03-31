const sharp = require("sharp");
const path = require("path");

const root = __dirname.replace(/\\scripts$/, "");
const logoPath = path.join(root, "public", "logos", "rvfrontend-white-v2.png");
const outputPath = path.join(root, "public", "og", "rvfrontend-social-card.png");

const width = 1200;
const height = 630;

const backgroundSvg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="96" y1="52" x2="1088" y2="588" gradientUnits="userSpaceOnUse">
      <stop stop-color="#09111F"/>
      <stop offset="1" stop-color="#05070D"/>
    </linearGradient>
    <radialGradient id="glowLeft" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(222 146) rotate(22.7) scale(321 248)">
      <stop stop-color="#4F46E5" stop-opacity="0.38"/>
      <stop offset="1" stop-color="#4F46E5" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowRight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(964 124) rotate(145.4) scale(240 210)">
      <stop stop-color="#06B6D4" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#06B6D4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panelStroke" x1="172" y1="116" x2="1028" y2="514" gradientUnits="userSpaceOnUse">
      <stop stop-color="rgba(255,255,255,0.22)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0.06)"/>
    </linearGradient>
    <linearGradient id="gridFade" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="rgba(255,255,255,0.06)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" rx="0" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#glowLeft)"/>
  <rect width="${width}" height="${height}" fill="url(#glowRight)"/>

  <g opacity="0.28">
    <path d="M0 84H1200" stroke="url(#gridFade)"/>
    <path d="M0 168H1200" stroke="url(#gridFade)"/>
    <path d="M0 252H1200" stroke="url(#gridFade)"/>
    <path d="M0 336H1200" stroke="url(#gridFade)"/>
    <path d="M0 420H1200" stroke="url(#gridFade)"/>
    <path d="M0 504H1200" stroke="url(#gridFade)"/>
    <path d="M150 0V630" stroke="url(#gridFade)"/>
    <path d="M300 0V630" stroke="url(#gridFade)"/>
    <path d="M450 0V630" stroke="url(#gridFade)"/>
    <path d="M600 0V630" stroke="url(#gridFade)"/>
    <path d="M750 0V630" stroke="url(#gridFade)"/>
    <path d="M900 0V630" stroke="url(#gridFade)"/>
    <path d="M1050 0V630" stroke="url(#gridFade)"/>
  </g>

  <rect x="78" y="74" width="1044" height="482" rx="34" fill="rgba(255,255,255,0.03)" stroke="url(#panelStroke)"/>
  <rect x="110" y="106" width="980" height="418" rx="28" fill="rgba(3,6,12,0.44)"/>

  <circle cx="1002" cy="168" r="92" fill="#06B6D4" fill-opacity="0.08"/>
  <circle cx="940" cy="184" r="126" fill="#4F46E5" fill-opacity="0.08"/>

  <text x="140" y="172" fill="#93C5FD" fill-opacity="0.82" font-family="Segoe UI, Arial, sans-serif" font-size="16" letter-spacing="6">RV FRONTEND</text>
  <text x="140" y="398" fill="#F8FAFC" font-family="Segoe UI, Arial, sans-serif" font-size="54" font-weight="700">Pixel-perfect websites.</text>
  <text x="140" y="452" fill="#CBD5E1" fill-opacity="0.94" font-family="Segoe UI, Arial, sans-serif" font-size="26">Custom front-end development with modern stack, performance, and SEO focus.</text>

  <rect x="140" y="492" width="214" height="44" rx="22" fill="rgba(79,70,229,0.18)" stroke="rgba(99,102,241,0.36)"/>
  <text x="169" y="520" fill="#F8FAFC" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="600">React • Vue • Angular</text>
</svg>`;

async function buildSocialCard() {
  const background = await sharp(Buffer.from(backgroundSvg)).png().toBuffer();
  const logo = await sharp(logoPath).resize({ width: 470 }).png().toBuffer();

  await sharp(background)
    .composite([
      { input: logo, left: 134, top: 146 },
      {
        input: Buffer.from(`
          <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="128" y="142" width="486" height="152" rx="20" fill="url(#shine)" opacity="0.12"/>
            <defs>
              <linearGradient id="shine" x1="128" y1="142" x2="614" y2="294" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFFFF" stop-opacity="0.08"/>
                <stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.22"/>
                <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.02"/>
              </linearGradient>
            </defs>
          </svg>
        `),
        left: 0,
        top: 0
      }
    ])
    .png()
    .toFile(outputPath);

  console.log(`Created ${outputPath}`);
}

buildSocialCard().catch((error) => {
  console.error(error);
  process.exit(1);
});
