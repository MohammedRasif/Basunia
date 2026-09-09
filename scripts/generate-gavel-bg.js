const fs = require('fs');
const path = require('path');

// Target output paths
const svgOutputPath = path.join(__dirname, '../public/assets/images/hero-gavel-bg.svg');

// Canvas dimensions
const width = 1920;
const height = 1080;

// Grid and random scattering points
const points = [];
const cols = 12;
const rows = 8;
const cellW = width / cols;
const cellH = height / rows;

// Seeded random for deterministic beautiful scattering
function pseudoRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

let seed = 42;
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const s1 = pseudoRandom(seed++);
    const s2 = pseudoRandom(seed++);
    const s3 = pseudoRandom(seed++);
    const s4 = pseudoRandom(seed++);
    const s5 = pseudoRandom(seed++);

    // Skip a few random cells for organic natural clustering
    if (s1 > 0.85) continue;

    // Jittered position within cell
    const x = Math.round(c * cellW + (s2 * 0.7 + 0.15) * cellW);
    const y = Math.round(r * cellH + (s3 * 0.7 + 0.15) * cellH);
    
    // Rotation between -75 to 75 deg
    const rotation = Math.round((s4 * 160) - 80);
    
    // Scale: small gavels (0.28 to 0.48)
    const scale = Number((0.26 + s5 * 0.2).toFixed(2));
    
    // Subtle opacity variations for depth
    const opacity = Number((0.10 + s1 * 0.12).toFixed(2));

    points.push({ x, y, rotation, scale, opacity });
  }
}

// Additional scattered gavels for edges and corners
const extraPoints = [
  { x: 80, y: 120, rotation: -25, scale: 0.38, opacity: 0.16 },
  { x: 260, y: 80, rotation: 35, scale: 0.32, opacity: 0.14 },
  { x: 1750, y: 140, rotation: 45, scale: 0.42, opacity: 0.18 },
  { x: 1840, y: 280, rotation: -15, scale: 0.35, opacity: 0.15 },
  { x: 120, y: 920, rotation: 20, scale: 0.40, opacity: 0.18 },
  { x: 300, y: 980, rotation: -40, scale: 0.34, opacity: 0.15 },
  { x: 1680, y: 940, rotation: -30, scale: 0.36, opacity: 0.16 },
  { x: 1820, y: 860, rotation: 50, scale: 0.42, opacity: 0.19 },
  { x: 960, y: 100, rotation: -10, scale: 0.30, opacity: 0.12 },
  { x: 920, y: 960, rotation: 15, scale: 0.32, opacity: 0.14 },
];

const allPoints = [...points, ...extraPoints];

// Build Gavel SVG elements
const gavelsSvg = allPoints.map((p, idx) => {
  return `
  <g transform="translate(${p.x}, ${p.y}) rotate(${p.rotation}) scale(${p.scale})" opacity="${p.opacity}">
    <!-- Sound block base -->
    <ellipse cx="0" cy="52" rx="34" ry="12" fill="#141414" />
    <path d="M-34 52 C-34 58, 34 58, 34 52 L30 60 C30 66, -30 66, -30 60 Z" fill="#0A0A0A" />
    <ellipse cx="0" cy="51" rx="28" ry="9" fill="#262626" />

    <!-- Gavel Handle -->
    <path d="M-4 12 L-6 48 C-6 52, 6 52, 6 48 L4 12 Z" fill="#141414" />
    <!-- Handle grip rings -->
    <circle cx="0" cy="46" r="5.5" fill="#1A1A1A" />
    <rect x="-3.5" y="24" width="7" height="3" rx="1.5" fill="#2B2B2B" />
    <rect x="-4" y="32" width="8" height="3" rx="1.5" fill="#2B2B2B" />

    <!-- Gavel Head Center Collar -->
    <rect x="-8" y="-12" width="16" height="24" rx="2" fill="#1F1F1F" />
    <rect x="-7" y="-10" width="14" height="20" rx="1.5" fill="#141414" />
    
    <!-- Gavel Head Left Cylinder & Ring -->
    <rect x="-38" y="-9" width="30" height="18" rx="2" fill="#141414" />
    <rect x="-14" y="-11" width="4" height="22" rx="1" fill="#383838" />
    <path d="M-38 -9 C-44 -9, -44 9, -38 9 Z" fill="#222222" />

    <!-- Gavel Head Right Cylinder & Ring -->
    <rect x="8" y="-9" width="30" height="18" rx="2" fill="#141414" />
    <rect x="10" y="-11" width="4" height="22" rx="1" fill="#383838" />
    <path d="M38 -9 C44 -9, 44 9, 38 9 Z" fill="#222222" />

    <!-- Highlight Reflection on Barrel Top -->
    <line x1="-34" y1="-5" x2="-16" y2="-5" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" />
    <line x1="16" y1="-5" x2="34" y2="-5" stroke="#4A4A4A" stroke-width="1.5" stroke-linecap="round" />
  </g>`;
}).join('\n');

const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Soft Vignette Gradient -->
    <radialGradient id="heroVignette" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0" />
      <stop offset="70%" stop-color="#EDEDED" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#D8DBDF" stop-opacity="0.6" />
    </radialGradient>
  </defs>

  <!-- Transparent background container -->
  <rect width="${width}" height="${height}" fill="none" />

  <!-- Scattered Small Black Gavels -->
  <g id="scattered-gavels">
    ${gavelsSvg}
  </g>

  <!-- Overlay subtle blend -->
  <rect width="${width}" height="${height}" fill="url(#heroVignette)" pointer-events="none" />
</svg>`;

// Ensure directory exists
const dir = path.dirname(svgOutputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(svgOutputPath, fullSvg, 'utf-8');
console.log(`Successfully generated scattered gavel SVG at: ${svgOutputPath}`);

// Also render a high-res PNG version using sharp if available
try {
  const sharp = require('sharp');
  const pngOutputPath = path.join(__dirname, '../public/assets/images/hero-gavel-banner.png');
  sharp(Buffer.from(fullSvg))
    .png()
    .toFile(pngOutputPath)
    .then(() => {
      console.log(`Successfully generated high-res PNG banner at: ${pngOutputPath}`);
    })
    .catch((err) => {
      console.error('Sharp error:', err);
    });
} catch (e) {
  console.log('Sharp not loaded:', e.message);
}
