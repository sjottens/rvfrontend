const sharp = require("sharp");
const fs = require("fs/promises");
const path = require("path");

const root = __dirname.replace(/\\scripts$/, "");
const appDir = path.join(root, "src", "app");
const publicDir = path.join(root, "public");
const iconsDir = path.join(publicDir, "icons");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="RV Frontend app icon">
  <defs>
    <linearGradient id="bg" x1="64" y1="48" x2="448" y2="464" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0B1424" />
      <stop offset="100%" stop-color="#060910" />
    </linearGradient>
    <radialGradient id="glowA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(164 124) rotate(35) scale(178 138)">
      <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.46" />
      <stop offset="100%" stop-color="#4F46E5" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glowB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(390 118) rotate(145) scale(142 126)">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.32" />
      <stop offset="100%" stop-color="#06B6D4" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="stroke" x1="96" y1="92" x2="418" y2="420" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="rgba(255,255,255,0.18)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0.06)" />
    </linearGradient>
  </defs>

  <rect width="512" height="512" rx="120" fill="url(#bg)" />
  <rect width="512" height="512" rx="120" fill="url(#glowA)" />
  <rect width="512" height="512" rx="120" fill="url(#glowB)" />

  <rect x="40" y="40" width="432" height="432" rx="96" fill="none" stroke="url(#stroke)" />

  <path d="M310 96h102v102" fill="none" stroke="#F8FAFC" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M202 416H100V314" fill="none" stroke="#F8FAFC" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />

  <text x="124" y="306" fill="#F8FAFC" font-size="148" font-family="Segoe UI, Arial, sans-serif" font-weight="800" letter-spacing="2">RV</text>
</svg>`;

async function writeFile(filePath, contents) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, contents);
}

async function buildIcons() {
  const svgBuffer = Buffer.from(svg);

  await writeFile(path.join(appDir, "icon.svg"), svg);

  const pngOutputs = [
    { filePath: path.join(appDir, "apple-icon.png"), size: 180 },
    { filePath: path.join(publicDir, "favicon-16x16.png"), size: 16 },
    { filePath: path.join(publicDir, "favicon-32x32.png"), size: 32 },
    { filePath: path.join(iconsDir, "icon-192.png"), size: 192 },
    { filePath: path.join(iconsDir, "icon-512.png"), size: 512 }
  ];

  await Promise.all(
    pngOutputs.map(async ({ filePath, size }) => {
      await fs.mkdir(path.dirname(filePath), { recursive: true });

      return sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(filePath);
    })
  );
}

buildIcons().catch((error) => {
  console.error(error);
  process.exit(1);
});