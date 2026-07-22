import fs from 'fs';
import path from 'path';

const baseDir = './src/assets/images/products';

const categories = [
  { slug: 'solid-carbide-drills', title: 'Solid Carbide Drill', code: 'ACT-SCD', color: '#E31E24' },
  { slug: 'solid-carbide-endmills', title: 'Solid Carbide Endmill', code: 'ACT-SCE', color: '#38BDF8' },
  { slug: 'ballnose-endmills', title: 'Ballnose Endmill', code: 'ACT-BNE', color: '#A855F7' },
  { slug: 'solid-carbide-reamers', title: 'Solid Carbide Reamer', code: 'ACT-SCR', color: '#10B981' },
  { slug: 'solid-carbide-boring-bars', title: 'Carbide Boring Bar', code: 'ACT-CBB', color: '#F59E0B' },
  { slug: 'holemills', title: 'HoleMill Interpolator', code: 'ACT-HLM', color: '#EC4899' },
  { slug: 't-slot-cutters', title: 'T-Slot Cutter', code: 'ACT-TSC', color: '#6366F1' },
  { slug: 'brazed-reamers', title: 'Brazed Tip Reamer', code: 'ACT-BZR', color: '#14B8A6' },
  { slug: 'radius-tools', title: 'Corner Radius Tool', code: 'ACT-RAD', color: '#F97316' },
  { slug: 'lollipop-cutters', title: 'Lollipop 5-Axis Cutter', code: 'ACT-LOP', color: '#8B5CF6' },
  { slug: 'form-tools', title: 'Custom Profile Form Tool', code: 'ACT-FRM', color: '#E31E24' },
  { slug: 'turning-tool-holders', title: 'Turning Tool Holder & Insert', code: 'ACT-TTH', color: '#64748B' },
  { slug: 'milling-cutters', title: 'Indexable Milling Cutter', code: 'ACT-FMC', color: '#3B82F6' },
  { slug: 'measuring-instruments', title: 'Precision Metrology Caliper', code: 'ACT-MET', color: '#0EA5E9' },
  { slug: 'tooling-accessories', title: 'VMC Tooling Collet & Holder', code: 'ACT-ACC', color: '#D97706' }
];

categories.forEach(cat => {
  const dir = path.join(baseDir, cat.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="metalShank" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#CBD5E1"/>
      <stop offset="40%" stop-color="#94A3B8"/>
      <stop offset="80%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="pvdCoat_${cat.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B2A4A"/>
      <stop offset="50%" stop-color="${cat.color}"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <radialGradient id="cardGlow_${cat.slug}" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="${cat.color}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="600" height="400" rx="16" fill="#0F172A"/>
  <rect width="600" height="400" rx="16" fill="url(#cardGlow_${cat.slug})"/>
  <rect x="0" y="0" width="600" height="400" rx="16" fill="none" stroke="#1B2A4A" stroke-width="2"/>

  <!-- Blueprint Lines -->
  <line x1="40" y1="200" x2="560" y2="200" stroke="#334155" stroke-dasharray="6,4"/>
  <line x1="300" y1="40" x2="300" y2="360" stroke="#334155" stroke-dasharray="6,4"/>

  <!-- Tool Shank Body -->
  <rect x="60" y="140" width="220" height="120" rx="6" fill="url(#metalShank)"/>
  <text x="80" y="185" font-family="monospace" font-weight="bold" font-size="14" fill="#0F172A">${cat.code}-SPEC-01</text>
  <text x="80" y="210" font-family="monospace" font-size="11" fill="#334155">CARBIDE h6 • ISO 9001</text>

  <!-- Cutting Profile Head -->
  <path d="M280,140 L450,140 L520,200 L450,260 L280,260 Z" fill="url(#pvdCoat_${cat.slug})"/>
  <circle cx="520" cy="200" r="12" fill="${cat.color}" opacity="0.8"/>
  <circle cx="520" cy="200" r="4" fill="#FFFFFF"/>

  <!-- Flute / Cutting Edge Details -->
  <path d="M300,140 Q350,200 400,260 M360,140 Q410,200 460,260" stroke="#0F172A" stroke-width="6" fill="none"/>
  <path d="M300,140 Q350,200 400,260 M360,140 Q410,200 460,260" stroke="${cat.color}" stroke-width="2" fill="none"/>

  <!-- Title & Specification Overlay -->
  <rect x="40" y="320" width="520" height="50" rx="8" fill="#1B2A4A" stroke="${cat.color}" stroke-width="1.5"/>
  <text x="60" y="352" font-family="'Inter', sans-serif" font-weight="bold" font-size="16" fill="#FFFFFF">${cat.title}</text>
  <text x="540" y="352" font-family="monospace" font-weight="bold" font-size="13" fill="${cat.color}" text-anchor="end">±0.002mm Toleranced</text>
</svg>`;

  fs.writeFileSync(path.join(dir, 'tool-preview.svg'), svgContent);
  console.log(`Created asset for ${cat.slug}`);
});
