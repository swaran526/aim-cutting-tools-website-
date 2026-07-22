# AIM CUTTING TOOLS (ACT) — Premium Industrial Website

A production-ready, multi-page website built for **AIM CUTTING TOOLS (ACT)** — a precision CNC cutting tool manufacturer and trader based in Peenya 2nd Stage, Bangalore.

## 🛠️ Technology Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Industrial Design System
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Micro-Interactions
- **Routing**: React Router DOM (v6)

## 📁 Directory & Folder Structure

```
aim-cutting-tools/
├── public/
│   ├── favicon.svg          # ACT Target & Dart brand mark
│   ├── robots.txt           # SEO Search Engine directives
│   └── sitemap.xml          # XML sitemap
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── brand/
│   │       │   └── logo-act.svg # Main ACT Industrial Logo
│   │       ├── hero/
│   │       │   └── hero-bg.svg # Technical metal & grid background
│   │       └── products/    # 15 Exact Category Photo Drop Folders
│   │           ├── solid-carbide-drills/
│   │           │   └── tool-preview.svg
│   │           ├── solid-carbide-endmills/
│   │           │   └── tool-preview.svg
│   │           ├── ballnose-endmills/
│   │           │   └── tool-preview.svg
│   │           ├── solid-carbide-reamers/
│   │           │   └── tool-preview.svg
│   │           ├── solid-carbide-boring-bars/
│   │           │   └── tool-preview.svg
│   │           ├── holemills/
│   │           │   └── tool-preview.svg
│   │           ├── t-slot-cutters/
│   │           │   └── tool-preview.svg
│   │           ├── brazed-reamers/
│   │           │   └── tool-preview.svg
│   │           ├── radius-tools/
│   │           │   └── tool-preview.svg
│   │           ├── lollipop-cutters/
│   │           │   └── tool-preview.svg
│   │           ├── form-tools/
│   │           │   └── tool-preview.svg
│   │           ├── turning-tool-holders/
│   │           │   └── tool-preview.svg
│   │           ├── milling-cutters/
│   │           │   └── tool-preview.svg
│   │           ├── measuring-instruments/
│   │           │   └── tool-preview.svg
│   │           └── tooling-accessories/
│   │               └── tool-preview.svg
│   ├── components/
│   │   ├── Header.jsx       # Top contact bar + sticky navigation
│   │   ├── Footer.jsx       # Industrial footer + sitemap + dynamic rating
│   │   ├── Hero.jsx         # Full-bleed hero + rotating flagship showcase
│   │   ├── TrustStrip.jsx   # 4 Badge stat cards
│   │   ├── AboutSection.jsx # Split layout 2016 founder story
│   │   ├── ProductCard.jsx  # Card with hover zoom & spec pills
│   │   ├── ProductGrid.jsx  # Filterable grid across 14 categories
│   │   ├── CapabilitiesSection.jsx # Resharpening / Reconditioning / Coating
│   │   ├── WhyChooseUs.jsx  # 4-column feature grid
│   │   ├── ContactForm.jsx  # Interactive inquiry form with validation
│   │   ├── FinalCtaBand.jsx # High-contrast bottom call-to-action
│   │   └── QuoteModal.jsx   # Pop-up quotation request dialog
│   ├── data/
│   │   ├── company.json     # Business profile, address, phones, founder info
│   │   └── products.json    # 14 Product categories with full engineering specs
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
└── SETUP.md
```

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

## 🖼️ How to Drop Real Product Photos

Whenever real product photos are taken:
1. Save the photo as `.png`, `.jpg`, or `.webp` inside the respective category folder under `src/assets/images/products/<category-slug>/`.
2. Example: For a Solid Carbide Drill photo:
   - Place image at `src/assets/images/products/solid-carbide-drills/drill-photo-01.jpg`
3. Update the `image` path in `src/data/products.json` for that item:
   ```json
   "image": "/assets/images/products/solid-carbide-drills/drill-photo-01.jpg"
   ```
The website will immediately reflect the real product photograph without modifying any component logic.
