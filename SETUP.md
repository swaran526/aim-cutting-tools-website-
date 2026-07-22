# SETUP & DEPLOYMENT GUIDE — AIM CUTTING TOOLS (ACT)

This guide covers updating product content, dropping real photography assets, and deploying the website to production hosting (Vercel, Netlify, Hostinger, or VPS).

---

## 1. Adding Real Product Photos

All product photography assets are organized by category slugs in:
`src/assets/images/products/<category-slug>/`

### Folder & Naming Convention:
- **Solid Carbide Drills**: `/src/assets/images/products/solid-carbide-drills/`
- **Solid Carbide Endmills**: `/src/assets/images/products/solid-carbide-endmills/`
- **Ballnose Endmills**: `/src/assets/images/products/ballnose-endmills/`
- **Solid Carbide Reamers**: `/src/assets/images/products/solid-carbide-reamers/`
- **Solid Carbide Boring Bars**: `/src/assets/images/products/solid-carbide-boring-bars/`
- **HoleMills**: `/src/assets/images/products/holemills/`
- **T-Slot Cutters**: `/src/assets/images/products/t-slot-cutters/`
- **Brazed Reamers**: `/src/assets/images/products/brazed-reamers/`
- **Radius Tools**: `/src/assets/images/products/radius-tools/`
- **Lollipop Cutters**: `/src/assets/images/products/lollipop-cutters/`
- **Form Tools**: `/src/assets/images/products/form-tools/`
- **Turning Tool Holders**: `/src/assets/images/products/turning-tool-holders/`
- **Milling Cutters**: `/src/assets/images/products/milling-cutters/`
- **Measuring Instruments**: `/src/assets/images/products/measuring-instruments/`
- **Tooling Accessories**: `/src/assets/images/products/tooling-accessories/`

**Recommended Image Specs**:
- Format: `.png`, `.jpg`, or `.webp` (transparent background PNG or clean studio grey background preferred).
- Aspect Ratio: 3:2 or 4:3 (e.g., 600x400px or 800x600px).

---

## 2. Updating Product Catalog Data

Edit `src/data/products.json` to modify specs, descriptions, coatings, or add new products.

```json
{
  "id": "scd-001",
  "name": "Solid Carbide Drills",
  "slug": "solid-carbide-drills",
  "category": "Solid Carbide Drills",
  "type": "Manufacturing",
  "image": "/assets/images/products/solid-carbide-drills/tool-preview.svg",
  "shortDescription": "High-performance internal coolant & solid carbide drills...",
  "specs": {
    "Diameter Range": "Ø1.0mm to Ø25.0mm",
    "Point Angle": "135° / 140° Self-Centering Point"
  }
}
```

---

## 3. Updating Company & Contact Information

Edit `src/data/company.json` to update:
- Phone numbers (`phonePrimary`, `phoneSecondary`)
- Address or Google Maps Embed URL
- Customer satisfaction rating score (e.g. 4.9 / 5.0)

---

## 4. Deploying to Vercel / Netlify

### Option A: Vercel Deployment (Recommended)
1. Push the code repository to GitHub/GitLab.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select the repository `aim-cutting-tools`.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Option B: Netlify Deployment
1. Connect repository on Netlify.
2. Set Build Command: `npm run build`
3. Set Publish directory: `dist`
4. Add `_redirects` file in `public/` with content: `/* /index.html 200` for client-side routing support.
