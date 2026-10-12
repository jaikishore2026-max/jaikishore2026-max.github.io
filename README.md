# Jaikishore — Personal Portfolio

A futuristic, responsive personal portfolio for Jaikishore: 17-year-old tech builder, founder in progress, and CMO at Falkon Labs.

## Design direction

- Warm paper-and-ink palette with a restrained persimmon accent
- Oversized editorial typography paired with technical monospace details
- Confident whitespace, fine rules, and a mix of light content panels and dark interactive surfaces
- Subtle hover states, responsive layouts, and reduced-motion-aware section reveals
- Interactive systems map, code proof showcase, and project growth calculator

## Stack

- Next.js 16 (Pages Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Static export for GitHub Pages

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The project uses `output: 'export'` in `next.config.mjs`, so the generated static site can be deployed to GitHub Pages or any static host. Contact links open the visitor’s default email client and do not require server-side credentials.

## Content updates

Most portfolio content is in `components/FuturePortfolio.tsx`:

- `links` — navigation anchors
- `storyPhases` — founder story timeline
- `skillSpecs` — capability cards and proof points
- `businessCards` — business learning areas
- Project, learning, hero, and contact copy — section markup
- `socials` — external profiles

The homepage metadata is in `pages/index.tsx`; global visual tokens and responsive styling are in `styles/globals.css`.
