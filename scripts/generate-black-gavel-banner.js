const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateScatteredBlackGavelBanner() {
  const inputGavel = path.join(__dirname, '../public/assets/images/gavel.png');
  const blackGavelPath = path.join(__dirname, '../public/assets/images/gavel-black.png');
  const bannerOutputPath = path.join(__dirname, '../public/assets/images/hero-gavel-scattered-banner.png');

  console.log('1. Generating black 3D gavel source...');
  // Create black 3D gavel with sleek ebony wood look and metallic highlights
  const blackGavelBuffer = await sharp(inputGavel)
    .grayscale()
    .linear(0.35, 0)
    .toBuffer();

  await sharp(blackGavelBuffer).toFile(blackGavelPath);

  const canvasWidth = 2400;
  const canvasHeight = 1350;

  console.log('2. Calculating scattered positions...');
  // Deterministic seeded random for natural scattering
  function pseudoRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  let seed = 108;
  const cols = 10;
  const rows = 6;
  const cellW = canvasWidth / cols;
  const cellH = canvasHeight / rows;

  const positions = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const s1 = pseudoRandom(seed++);
      const s2 = pseudoRandom(seed++);
      const s3 = pseudoRandom(seed++);
      const s4 = pseudoRandom(seed++);
      const s5 = pseudoRandom(seed++);

      // Center area (where text goes) has lower density for readability
      const isCenter = (c >= 3 && c <= 6 && r >= 1 && r <= 4);
      if (isCenter && s1 > 0.45) continue; // fewer gavels in center
      if (!isCenter && s1 > 0.85) continue; // slight organic variation

      const x = Math.round(c * cellW + (s2 * 0.7 + 0.15) * cellW);
      const y = Math.round(r * cellH + (s3 * 0.7 + 0.15) * cellH);
      
      // Small size: 65px to 115px
      const size = Math.round(65 + s4 * 50);
      
      // Rotation angle
      const angle = Math.round((s5 * 360) - 180);
      
      // Opacity: subtle watermark effect (0.16 to 0.32)
      const opacity = isCenter ? Number((0.10 + s1 * 0.08).toFixed(2)) : Number((0.18 + s1 * 0.14).toFixed(2));

      positions.push({ x, y, size, angle, opacity });
    }
  }

  // Edge and corner accents
  const extraAccents = [
    { x: 100, y: 120, size: 95, angle: -35, opacity: 0.28 },
    { x: 380, y: 80, size: 80, angle: 45, opacity: 0.22 },
    { x: 2150, y: 140, size: 105, angle: 65, opacity: 0.30 },
    { x: 2280, y: 360, size: 85, angle: -20, opacity: 0.24 },
    { x: 140, y: 1180, size: 100, angle: 30, opacity: 0.28 },
    { x: 420, y: 1240, size: 85, angle: -50, opacity: 0.22 },
    { x: 2050, y: 1200, size: 95, angle: -40, opacity: 0.26 },
    { x: 2260, y: 1080, size: 110, angle: 75, opacity: 0.32 },
  ];

  const allGavels = [...positions, ...extraAccents];
  console.log(`3. Compositing ${allGavels.length} small black gavels on canvas (${canvasWidth}x${canvasHeight})...`);

  // Prepare each gavel sprite
  const compositeInputs = [];

  for (const item of allGavels) {
    // Resize gavel to small size
    let gavelSprite = await sharp(blackGavelBuffer)
      .resize(item.size, item.size, { fit: 'inside' })
      .rotate(item.angle, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    // Adjust opacity
    const meta = await sharp(gavelSprite).metadata();
    gavelSprite = await sharp(gavelSprite)
      .linear(1, 0)
      .ensureAlpha(item.opacity)
      .toBuffer();

    compositeInputs.push({
      input: gavelSprite,
      left: Math.max(0, Math.min(canvasWidth - (meta.width || item.size), item.x - Math.round((meta.width || item.size) / 2))),
      top: Math.max(0, Math.min(canvasHeight - (meta.height || item.size), item.y - Math.round((meta.height || item.size) / 2))),
    });
  }

  // Create transparent base canvas
  const baseCanvas = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite(compositeInputs)
    .png()
    .toFile(bannerOutputPath);

  console.log('4. Successfully created scattered black gavel banner at:', bannerOutputPath);
}

generateScatteredBlackGavelBanner().catch(console.error);
