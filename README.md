# Jaikishore — Personal Portfolio

A futuristic, responsive personal portfolio for Jaikishore: 17-year-old tech builder, founder in progress, and CMO at Falkon Labs.

## Design direction

- Obsidian black canvas with blueprint grid lines
- Cyan, electric violet, and neon emerald accents
- Frosted glass cards with hover glow states
- Technical monospace labels paired with Space Grotesk display typography
- Framer Motion reveal animations, animated metrics, and responsive mobile navigation
- Bento layouts for capabilities, work, learning, and business mindset

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

The project uses `output: 'export'` in `next.config.mjs`, so the generated static site can be deployed to GitHub Pages or any static host. The contact form opens the visitor’s default email client with a pre-filled message and does not require server-side credentials.

## Content updates

Most portfolio content is in `components/FuturePortfolio.tsx`:

- `navLinks` — navigation anchors
- `skills` — capability cards
- `phases` — story timeline
- `learnings` — current learning queue
- `stats` — hero proof points
- `socials` — external profiles

The homepage metadata is in `pages/index.tsx`; global visual tokens and responsive styling are in `styles/globals.css`.
