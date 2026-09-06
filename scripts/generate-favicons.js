const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const vectorPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'Vector.svg');
const vectorContent = fs.readFileSync(vectorPath, 'utf8');

const pathMatch = vectorContent.match(/d="([^"]+)"/);

if (!pathMatch) {
  console.error('Path not found in Vector.svg');
  process.exit(1);
}

const pathD = pathMatch[1];

// 1. Create a circular badge SVG with #8E1831 background and crisp white icon
const badgeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <circle cx="256" cy="256" r="256" fill="#8E1831"/>
  <g transform="translate(106, 106) scale(10)" fill="#FFFFFF">
    <path fill-rule="evenodd" clip-rule="evenodd" d="${pathD}" fill="#FFFFFF"/>
  </g>
</svg>`;

// 2. Also create a transparent crisp white icon SVG (for components using white icon)
const whiteIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="512" height="512">
  <path fill-rule="evenodd" clip-rule="evenodd" d="${pathD}" fill="#FFFFFF"/>
</svg>`;

const publicAssetsDir = path.join(__dirname, '..', 'public', 'assets', 'images');
const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

fs.writeFileSync(path.join(publicAssetsDir, 'logo-badge.svg'), badgeSvg);
fs.writeFileSync(path.join(publicAssetsDir, 'logo-white.svg'), whiteIconSvg);

async function generate() {
  const badgeBuffer = Buffer.from(badgeSvg);
  const whiteBuffer = Buffer.from(whiteIconSvg);

  // 1. Generate favicon.png (64x64) and (32x32)
  await sharp(badgeBuffer).resize(64, 64).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(badgeBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
  
  // 2. App Router icons:
  // app/icon.png (Next.js App router automatically serves /icon.png)
  await sharp(badgeBuffer).resize(512, 512).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(badgeBuffer).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));
  
  // 3. Crisp public assets
  await sharp(badgeBuffer).resize(512, 512).png().toFile(path.join(publicAssetsDir, 'logo-badge.png'));
  
  // 4. Update logoo.png with crisp transparent 512x512 white vector
  await sharp(whiteBuffer).resize(512, 512).png().toFile(path.join(publicAssetsDir, 'logoo.png'));

  console.log('All icons generated successfully with high precision!');
}

generate().catch(console.error);
