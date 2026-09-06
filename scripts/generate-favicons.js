const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function makeFaviconsWithOriginalLogo() {
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'app');
  const logoPath = path.join(publicDir, 'assets', 'images', 'logoo.png');
  const logoBuffer = fs.readFileSync(logoPath);

  const size = 512;
  const circleSvg = Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#8E1831"/>
    </svg>`
  );

  // Resize original logo to fit nicely inside circle
  const resizedLogo = await sharp(logoBuffer)
    .resize(320, 230, { fit: 'inside' })
    .toBuffer();

  const badge512 = await sharp(circleSvg)
    .composite([{ input: resizedLogo, gravity: 'centre' }])
    .png()
    .toBuffer();

  // Write favicon and icon files
  await sharp(badge512).resize(64, 64).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(badge512).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
  await sharp(badge512).resize(32, 32).png().toFile(path.join(appDir, 'favicon.ico'));
  await sharp(badge512).resize(512, 512).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(badge512).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));

  console.log('Favicons generated with EXACT original gavel logo!');
}

makeFaviconsWithOriginalLogo().catch(console.error);
