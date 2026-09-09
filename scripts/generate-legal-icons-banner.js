const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 2400;
const height = 1350;

// High-contrast, bold, detailed SVG shapes for all legal/lawyer symbols centered at (0, 0)
const legalIcons = {
  // 1. Scales of Justice
  scales: `
    <path d="M0 -38 L0 38" stroke="#050505" stroke-width="5" stroke-linecap="round" />
    <path d="M-20 38 L20 38" stroke="#050505" stroke-width="6" stroke-linecap="round" />
    <path d="M-10 30 L10 30" stroke="#050505" stroke-width="5" stroke-linecap="round" />
    <circle cx="0" cy="-38" r="6" fill="#050505" />
    <path d="M-36 -26 L36 -26" stroke="#050505" stroke-width="5" stroke-linecap="round" />
    <!-- Left pan -->
    <path d="M-36 -26 L-48 -2 L-24 -2 Z" stroke="#050505" stroke-width="3" fill="none" />
    <path d="M-50 -2 Q-36 14 -22 -2 Z" fill="#050505" />
    <!-- Right pan -->
    <path d="M36 -26 L24 -2 L48 -2 Z" stroke="#050505" stroke-width="3" fill="none" />
    <path d="M22 -2 Q36 14 50 -2 Z" fill="#050505" />
  `,

  // 2. Judge's Gavel & Sound Block
  gavel: `
    <!-- Base sound block -->
    <ellipse cx="-12" cy="26" rx="28" ry="10" fill="#050505" />
    <path d="M-40 26 C-40 34, 16 34, 16 26 L12 34 C12 42, -36 42, -36 34 Z" fill="#000000" />
    <!-- Handle -->
    <path d="M-12 8 L24 -28" stroke="#050505" stroke-width="7" stroke-linecap="round" />
    <circle cx="28" cy="-32" r="6" fill="#050505" />
    <!-- Hammer Head -->
    <g transform="translate(-14, 6) rotate(-45)">
      <rect x="-20" y="-10" width="40" height="20" rx="3.5" fill="#050505" />
      <rect x="-6" y="-12" width="12" height="24" rx="2" fill="#222222" />
      <rect x="-25" y="-8.5" width="6" height="17" rx="2" fill="#050505" />
      <rect x="19" y="-8.5" width="6" height="17" rx="2" fill="#050505" />
    </g>
  `,

  // 3. Supreme Court / Courthouse Pillars
  courthouse: `
    <!-- Pediment (Roof) -->
    <path d="M-38 -16 L0 -38 L38 -16 Z" fill="#050505" />
    <rect x="-40" y="-16" width="80" height="6" rx="1.5" fill="#050505" />
    <!-- Pillars -->
    <rect x="-34" y="-10" width="9" height="36" rx="2" fill="#050505" />
    <rect x="-16" y="-10" width="9" height="36" rx="2" fill="#050505" />
    <rect x="7" y="-10" width="9" height="36" rx="2" fill="#050505" />
    <rect x="25" y="-10" width="9" height="36" rx="2" fill="#050505" />
    <!-- Base Steps -->
    <rect x="-40" y="26" width="80" height="6" rx="1.5" fill="#050505" />
    <rect x="-45" y="32" width="90" height="7" rx="2" fill="#050505" />
  `,

  // 4. Law Book / Statute Volume
  lawbook: `
    <rect x="-26" y="-36" width="52" height="72" rx="5" fill="#050505" />
    <path d="M-26 -36 L-19 -36 L-19 36 L-26 36 Z" fill="#262626" />
    <!-- Ribbon marker -->
    <path d="M-6 36 L-6 46 L0 42 L6 46 L6 36 Z" fill="#8E1831" />
    <!-- Center Scales Emblem -->
    <circle cx="3" cy="-4" r="12" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.9" />
    <path d="M-4 -4 L10 -4 M3 -10 L3 2" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" opacity="0.9" />
  `,

  // 5. Legal Defense Shield
  shield: `
    <path d="M0 -38 Q26 -38 36 -20 C36 16 18 36 0 44 C-18 36 -36 16 -36 -20 Q-26 -38 0 -38 Z" fill="#050505" />
    <path d="M0 -30 Q20 -30 27 -16 C27 12 14 27 0 35 C-14 27 -27 12 -27 -16 Q-20 -30 0 -30 Z" stroke="#333333" stroke-width="3" fill="none" />
    <!-- Center Sword -->
    <path d="M0 -20 L0 18 M-10 -10 L10 -10" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.85" />
  `,

  // 6. Legal Contract & Notary Stamp
  contract: `
    <rect x="-24" y="-36" width="48" height="72" rx="4" fill="#050505" />
    <rect x="-20" y="-32" width="40" height="64" rx="2" fill="#1C1C1C" />
    <!-- Text Lines -->
    <line x1="-14" y1="-20" x2="14" y2="-20" stroke="#666666" stroke-width="3" stroke-linecap="round" />
    <line x1="-14" y1="-10" x2="14" y2="-10" stroke="#666666" stroke-width="3" stroke-linecap="round" />
    <line x1="-14" y1="0" x2="6" y2="0" stroke="#666666" stroke-width="3" stroke-linecap="round" />
    <!-- Red Wax Seal Stamp -->
    <circle cx="9" cy="19" r="8" fill="#8E1831" />
    <path d="M-14 19 Q-8 15 -5 20 Q-1 14 4 19" stroke="#888888" stroke-width="2.5" fill="none" />
  `,

  // 7. Lawyer's Briefcase
  briefcase: `
    <rect x="-34" y="-16" width="68" height="48" rx="6" fill="#050505" />
    <!-- Handle -->
    <path d="M-14 -16 L-14 -30 C-14 -35, 14 -35, 14 -30 L14 -16" stroke="#050505" stroke-width="5.5" fill="none" stroke-linecap="round" />
    <!-- Clasp & Flap -->
    <path d="M-34 -5 L0 6 L34 -5" stroke="#262626" stroke-width="3" fill="none" />
    <rect x="-6" y="4" width="12" height="10" rx="2.5" fill="#666666" />
    <circle cx="0" cy="9" r="2.5" fill="#050505" />
  `,

  // 8. Classical Column / Pillar of Law
  pillar: `
    <rect x="-28" y="-36" width="56" height="7" rx="2.5" fill="#050505" />
    <ellipse cx="-17" cy="-25" rx="9" ry="6" fill="#050505" />
    <ellipse cx="17" cy="-25" rx="9" ry="6" fill="#050505" />
    <rect x="-20" y="-26" width="40" height="6" fill="#050505" />
    <rect x="-16" y="-20" width="32" height="48" fill="#050505" />
    <line x1="-9" y1="-20" x2="-9" y2="28" stroke="#333333" stroke-width="2.5" />
    <line x1="0" y1="-20" x2="0" y2="28" stroke="#333333" stroke-width="2.5" />
    <line x1="9" y1="-20" x2="9" y2="28" stroke="#333333" stroke-width="2.5" />
    <rect x="-22" y="28" width="44" height="6" rx="2" fill="#050505" />
    <rect x="-28" y="34" width="56" height="7" rx="2.5" fill="#050505" />
  `,

  // 9. Feather Quill & Inkpot
  quill: `
    <path d="M-18 16 L14 16 L18 36 L-22 36 Z" fill="#050505" />
    <ellipse cx="-2" cy="16" rx="16" ry="5" fill="#222222" />
    <rect x="-8" y="10" width="12" height="6" fill="#050505" />
    <!-- Feather -->
    <path d="M-2 14 Q20 -14 34 -40 C28 -38 19 -28 14 -18 C8 -10 0 -2 -2 14 Z" fill="#050505" />
    <path d="M-2 14 Q20 -14 34 -40" stroke="#444444" stroke-width="2.5" fill="none" />
  `,

  // 10. Legal Diploma / Charter Scroll
  diploma: `
    <g transform="rotate(-35)">
      <rect x="-34" y="-12" width="68" height="24" rx="5" fill="#050505" />
      <ellipse cx="-34" cy="0" rx="5" ry="12" fill="#222222" />
      <ellipse cx="34" cy="0" rx="5" ry="12" fill="#050505" />
      <rect x="-6" y="-13" width="12" height="26" rx="2" fill="#8E1831" />
      <path d="M0 13 L-7 28 L0 24 L7 28 Z" fill="#8E1831" />
    </g>
  `,

  // 11. Arbitration / Settlement Handshake
  handshake: `
    <path d="M-34 -6 L-17 9 L-2 -2 L12 9 L26 -2 L34 -11" stroke="#050505" stroke-width="5" stroke-linecap="round" fill="none" />
    <rect x="-26" y="-17" width="18" height="15" rx="3" fill="#050505" />
    <rect x="8" y="-17" width="18" height="15" rx="3" fill="#050505" />
    <ellipse cx="0" cy="4" rx="15" ry="10" fill="#222222" />
    <path d="M-8 2 L0 8 L8 2" stroke="#555555" stroke-width="3" stroke-linecap="round" fill="none" />
  `,

  // 12. Intellectual Property / Copyright Seal
  ipBadge: `
    <circle cx="0" cy="0" r="32" fill="#050505" />
    <circle cx="0" cy="0" r="26" stroke="#444444" stroke-width="2.5" fill="none" />
    <path d="M12 -13 C-8 -15 -16 0 -16 0 C-16 0 -8 15 12 13" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none" />
  `,

  // 13. Criminal Defense Handcuffs
  handcuffs: `
    <circle cx="-18" cy="0" r="17" stroke="#050505" stroke-width="5" fill="none" />
    <circle cx="18" cy="0" r="17" stroke="#050505" stroke-width="5" fill="none" />
    <rect x="-7" y="-4" width="14" height="8" rx="2.5" fill="#050505" />
    <circle cx="-18" cy="-17" r="4" fill="#050505" />
    <circle cx="18" cy="-17" r="4" fill="#050505" />
  `,

  // 14. Lady Justice / Blind Justice Silhouette
  ladyJustice: `
    <!-- Head with blindfold -->
    <circle cx="0" cy="-30" r="7" fill="#050505" />
    <rect x="-8" y="-32" width="16" height="4" rx="1" fill="#444444" />
    <!-- Torso & Robe -->
    <path d="M-6 -23 L6 -23 L14 36 L-14 36 Z" fill="#050505" />
    <!-- Left Hand holding Scales -->
    <path d="M-6 -20 L-26 -16" stroke="#050505" stroke-width="3.5" stroke-linecap="round" />
    <circle cx="-26" cy="-16" r="2.5" fill="#050505" />
    <path d="M-36 -16 L-16 -16" stroke="#050505" stroke-width="2.5" />
    <path d="M-36 -16 L-40 -4 L-32 -4 Z" stroke="#050505" stroke-width="1.5" fill="none" />
    <path d="M-16 -16 L-20 -4 L-12 -4 Z" stroke="#050505" stroke-width="1.5" fill="none" />
    <!-- Right Hand holding Sword -->
    <path d="M6 -20 L26 -6" stroke="#050505" stroke-width="3.5" stroke-linecap="round" />
    <path d="M26 -30 L26 26" stroke="#050505" stroke-width="3" stroke-linecap="round" />
    <path d="M21 -14 L31 -14" stroke="#050505" stroke-width="3" stroke-linecap="round" />
  `,

  // 15. Law Enforcement / Legal Badge
  badge: `
    <path d="M0 -34 L28 -14 L20 28 L0 40 L-20 28 L-28 -14 Z" fill="#050505" />
    <circle cx="0" cy="2" r="15" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.9" />
    <!-- 5-Point Star -->
    <path d="M0 -8 L2.5 -2 L8.5 -2 L4 1.5 L5.5 7.5 L0 4 L-5.5 7.5 L-4 1.5 L-8.5 -2 L-2.5 -2 Z" fill="#FFFFFF" opacity="0.9" />
  `,

  // 16. Admiralty / Maritime Anchor
  anchor: `
    <circle cx="0" cy="-28" r="6" stroke="#050505" stroke-width="4.5" fill="none" />
    <path d="M0 -22 L0 34" stroke="#050505" stroke-width="5" stroke-linecap="round" />
    <path d="M-16 -14 L16 -14" stroke="#050505" stroke-width="4.5" stroke-linecap="round" />
    <path d="M-28 10 C-28 32, 28 32, 28 10" stroke="#050505" stroke-width="5" fill="none" stroke-linecap="round" />
    <path d="M-32 12 L-28 8 L-24 12 Z" fill="#050505" />
    <path d="M24 12 L28 8 L32 12 Z" fill="#050505" />
  `,

  // 17. Real Estate / Property Law (House & Key)
  propertyLaw: `
    <path d="M-24 -6 L0 -28 L24 -6" stroke="#050505" stroke-width="5" stroke-linecap="round" fill="none" />
    <rect x="-18" y="-6" width="36" height="34" rx="2" fill="#050505" />
    <!-- Door / Keyhole -->
    <rect x="-6" y="8" width="12" height="20" rx="6" fill="#FFFFFF" opacity="0.85" />
    <circle cx="0" cy="14" r="3" fill="#050505" />
  `,

  // 18. Estate & Trust Key
  trustKey: `
    <circle cx="-16" cy="0" r="16" stroke="#050505" stroke-width="5" fill="none" />
    <circle cx="-16" cy="0" r="6" fill="#050505" />
    <path d="M0 0 L32 0" stroke="#050505" stroke-width="5.5" stroke-linecap="round" />
    <path d="M22 0 L22 14 M30 0 L30 10" stroke="#050505" stroke-width="5" stroke-linecap="round" />
  `,

  // 19. Due Diligence Magnifying Glass
  investigation: `
    <circle cx="-6" cy="-6" r="22" stroke="#050505" stroke-width="5.5" fill="none" />
    <circle cx="-6" cy="-6" r="15" fill="#222222" opacity="0.3" />
    <path d="M10 10 L30 30" stroke="#050505" stroke-width="7" stroke-linecap="round" />
    <!-- Miniature scales inside lens -->
    <line x1="-12" y1="-6" x2="0" y2="-6" stroke="#050505" stroke-width="2.5" />
    <line x1="-6" y1="-12" x2="-6" y2="0" stroke="#050505" stroke-width="2.5" />
  `,

  // 20. Luxury Fountain Pen Nib
  fountainPen: `
    <path d="M0 -36 L14 -6 L10 32 L-10 32 L-14 -6 Z" fill="#050505" />
    <path d="M0 -36 L0 10" stroke="#FFFFFF" stroke-width="2" opacity="0.8" />
    <circle cx="0" cy="10" r="3" fill="#FFFFFF" opacity="0.8" />
    <rect x="-12" y="32" width="24" height="6" rx="1.5" fill="#333333" />
  `,

  // 21. Family Law Protection Umbrella
  umbrella: `
    <path d="M-30 0 C-30 -22, 30 -22, 30 0 C20 -4, 10 -4, 0 0 C-10 -4, -20 -4, -30 0 Z" fill="#050505" />
    <path d="M0 -22 L0 26 C0 32, -8 32, -8 26" stroke="#050505" stroke-width="4.5" stroke-linecap="round" fill="none" />
  `,

  // 22. Legal Excellence Award Ribbon Medal
  awardMedal: `
    <circle cx="0" cy="-10" r="20" fill="#050505" />
    <circle cx="0" cy="-10" r="15" stroke="#FFFFFF" stroke-width="2" fill="none" opacity="0.85" />
    <path d="M0 -20 L0 0 M-10 -10 L10 -10" stroke="#FFFFFF" stroke-width="2" opacity="0.85" />
    <!-- Ribbons -->
    <path d="M-10 6 L-16 32 L-6 26 L4 32 L-2 6 Z" fill="#8E1831" />
    <path d="M10 6 L16 32 L6 26 L-4 32 L2 6 Z" fill="#660C1F" />
  `,

  // 23. Hourglass / Legal Time & Limitation
  hourglass: `
    <rect x="-20" y="-30" width="40" height="5" rx="1.5" fill="#050505" />
    <rect x="-20" y="25" width="40" height="5" rx="1.5" fill="#050505" />
    <path d="M-16 -25 C-16 -5, -4 0, -4 0 C-4 0, -16 5, -16 25 L16 25 C16 5, 4 0, 4 0 C4 0, 16 -5, 16 -25 Z" stroke="#050505" stroke-width="4" fill="none" />
    <path d="M-10 18 Q0 12 10 18 L10 24 L-10 24 Z" fill="#050505" />
    <circle cx="0" cy="0" r="2.5" fill="#050505" />
  `,

  // 24. IP Patent Lightbulb & Tech Gear
  patentGear: `
    <circle cx="0" cy="-10" r="18" fill="#050505" />
    <path d="M-10 6 L10 6 L8 18 L-8 18 Z" fill="#050505" />
    <rect x="-6" y="18" width="12" height="4" rx="1" fill="#333333" />
    <!-- Filament -->
    <path d="M-6 -10 L0 -18 L6 -10" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.85" />
  `,

  // 25. Forensic Evidence Fingerprint
  fingerprint: `
    <path d="M-6 -20 Q0 -26 6 -20 Q12 -14 12 0 Q12 18 0 28" stroke="#050505" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="M-14 -10 Q0 -20 14 -6 Q20 8 18 20" stroke="#050505" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="M-18 4 Q-12 -6 0 -12 Q14 -6 14 12" stroke="#050505" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="M-8 12 Q0 2 8 12" stroke="#050505" stroke-width="3" stroke-linecap="round" fill="none" />
  `
};

const iconKeys = Object.keys(legalIcons);
console.log(`Total legal icons registered: ${iconKeys.length}`);

function pseudoRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

let seed = 444;
const cols = 15;
const rows = 9;
const cellW = width / cols;
const cellH = height / rows;

const placedIcons = [];

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const s1 = pseudoRandom(seed++);
    const s2 = pseudoRandom(seed++);
    const s3 = pseudoRandom(seed++);
    const s4 = pseudoRandom(seed++);
    const s5 = pseudoRandom(seed++);

    // Slight organic jitter so it does not look like a rigid grid
    if (s1 > 0.92) continue;

    const x = Math.round(c * cellW + (s2 * 0.7 + 0.15) * cellW);
    const y = Math.round(r * cellH + (s3 * 0.7 + 0.15) * cellH);

    // Pick icon evenly
    const iconIndex = Math.floor(s4 * iconKeys.length);
    const iconName = iconKeys[iconIndex];

    // Scale: prominent and visible (0.85 to 1.30)
    const scale = Number((0.85 + s5 * 0.45).toFixed(2));
    
    // Rotation: organic angle (-45 to 45 deg)
    const rotation = Math.round((s3 * 90) - 45);

    // Opacity: high contrast, deeply visible black icons across entire canvas
    const opacity = Number((0.55 + s1 * 0.30).toFixed(2));

    placedIcons.push({
      iconName,
      x,
      y,
      scale,
      rotation,
      opacity,
    });
  }
}

// Extra outer border and corner icons for dense, rich frame
const cornerAccents = [
  { iconName: 'scales', x: 80, y: 90, scale: 1.25, rotation: -12, opacity: 0.85 },
  { iconName: 'courthouse', x: 260, y: 70, scale: 1.15, rotation: 8, opacity: 0.80 },
  { iconName: 'ladyJustice', x: 440, y: 85, scale: 1.20, rotation: -15, opacity: 0.82 },
  { iconName: 'lawbook', x: 620, y: 75, scale: 1.10, rotation: 12, opacity: 0.78 },
  { iconName: 'gavel', x: 2180, y: 95, scale: 1.30, rotation: 25, opacity: 0.88 },
  { iconName: 'shield', x: 2320, y: 240, scale: 1.20, rotation: -10, opacity: 0.82 },
  { iconName: 'badge', x: 2280, y: 420, scale: 1.15, rotation: 18, opacity: 0.80 },
  { iconName: 'handcuffs', x: 2320, y: 600, scale: 1.10, rotation: -20, opacity: 0.78 },
  { iconName: 'contract', x: 90, y: 1240, scale: 1.20, rotation: 15, opacity: 0.85 },
  { iconName: 'briefcase', x: 280, y: 1270, scale: 1.15, rotation: -20, opacity: 0.80 },
  { iconName: 'pillar', x: 480, y: 1250, scale: 1.20, rotation: 10, opacity: 0.82 },
  { iconName: 'propertyLaw', x: 2060, y: 1250, scale: 1.15, rotation: -12, opacity: 0.80 },
  { iconName: 'handshake', x: 2260, y: 1200, scale: 1.20, rotation: 30, opacity: 0.85 },
  { iconName: 'quill', x: 1200, y: 65, scale: 1.10, rotation: 15, opacity: 0.75 },
  { iconName: 'diploma', x: 1180, y: 1280, scale: 1.15, rotation: -18, opacity: 0.78 },
  { iconName: 'anchor', x: 110, y: 680, scale: 1.15, rotation: 10, opacity: 0.80 },
  { iconName: 'scales', x: 2300, y: 800, scale: 1.20, rotation: -15, opacity: 0.85 },
  { iconName: 'trustKey', x: 90, y: 480, scale: 1.15, rotation: -25, opacity: 0.78 },
  { iconName: 'investigation', x: 90, y: 880, scale: 1.15, rotation: 20, opacity: 0.80 },
  { iconName: 'awardMedal', x: 2300, y: 980, scale: 1.20, rotation: 15, opacity: 0.82 },
  { iconName: 'hourglass', x: 2120, y: 70, scale: 1.10, rotation: -10, opacity: 0.78 },
  { iconName: 'umbrella', x: 120, y: 280, scale: 1.15, rotation: 12, opacity: 0.80 },
];

const allIcons = [...placedIcons, ...cornerAccents];

console.log(`Generated ${allIcons.length} scattered legal icons across canvas (${width}x${height}).`);

// Build SVG Elements
const iconsSvgElements = allIcons.map((item) => {
  const iconContent = legalIcons[item.iconName] || legalIcons.gavel;
  return `
    <g transform="translate(${item.x}, ${item.y}) rotate(${item.rotation}) scale(${item.scale})" opacity="${item.opacity}">
      ${iconContent}
    </g>
  `;
}).join('\n');

const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <!-- 100% Transparent base -->
  <rect width="${width}" height="${height}" fill="none" />

  <!-- All 25 Distinct Lawyer & Legal Icons Scattered -->
  <g id="scattered-lawyer-icons">
    ${iconsSvgElements}
  </g>
</svg>`;

const svgOutputPath = path.join(__dirname, '../public/assets/images/hero-legal-icons-bg.svg');
fs.writeFileSync(svgOutputPath, fullSvg, 'utf-8');
console.log('Saved SVG at:', svgOutputPath);

// Render high-res PNG version via sharp
const pngOutputPath = path.join(__dirname, '../public/assets/images/hero-legal-icons-banner.png');
sharp(Buffer.from(fullSvg))
  .png()
  .toFile(pngOutputPath)
  .then(() => {
    console.log('Saved High-Res PNG banner at:', pngOutputPath);
  })
  .catch((err) => {
    console.error('Error rendering PNG:', err);
  });
