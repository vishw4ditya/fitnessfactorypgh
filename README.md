# Fitness Factory Pittsburgh

Multi-page marketing website for **Fitness Factory Pittsburgh**, a locally owned 24/7 neighborhood gym at **212 S. Highland Ave, Pittsburgh, PA 15206** (East Liberty / Shadyside).

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** with design tokens defined via CSS custom properties (`src/index.css` & `tailwind.config.js`)
- **React Router** (`react-router-dom`) for multi-page navigation
- **Lucide React** icons & Google Fonts (`Oswald` display headings + `Inter` body copy)

## Pages & Features

- **Home (`/`)**: Hero image carousel with US flag industrial aesthetic, feature pillars, 24/7 keycard banner, starter membership overview, Matterport 360° & equipment bento grid, featured coaches, member testimonials, and neighborhood drop-in map + direct contact form.
- **Memberships (`/memberships`)**: Live floor capacity metric card, 24/7 Access Upgrade banner (`+$129/yr`), 4-tier pricing cards (`Passes`, `Individual`, `Couples`, `Discounted`), sticky-header plan comparison matrix, interactive FAQ accordion, and instant online onboarding form.
- **Trainers (`/trainers`)**: Coaching stats card, live client-side specialty filter chips, 2×2 detailed coach cards with rates (`$65 / $300 / $550`), Fitness Factory Method pillars, integrated coaching floor banner, and multi-objective coach consultation request form.
- **Supporting Pages**: Virtual Tour (`/virtual-tour` with interactive 360° zone pan), About (`/about`), Blog (`/blog` with readable article modals), and Contact (`/contact`).

## Local Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```
