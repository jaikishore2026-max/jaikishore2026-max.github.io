# My Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features...

- ⚡ **Fast & Optimized** - Built with Next.js 16 and optimized for performance
- 🎨 **Beautiful UI** - Tailwind CSS and shadcn/ui components
- 📱 **Fully Responsive** - Works great on all devices
- 🌙 **Dark Mode** - Built-in dark mode support with next-themes
- 🎭 **Smooth Animations** - Framer Motion animations
- 📊 **Charts** - Recharts for data visualization
- 🔍 **Form Validation** - React Hook Form with Zod validation
- 📈 **Analytics** - Vercel Analytics integration

## Tech Stack

- **Frontend Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + Radix UI
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Saravanan-Codez/jaikishore2026-max.github.io.git
cd jaikishore2026-max.github.io

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your portfolio.

### Building

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Run ESLint to check code quality
pnpm lint
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
│   └── utils.ts          # className merging utility
├── hooks/                 # Custom React hooks
├── public/                # Static assets
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── README.md              # This file
```

## Customization

### Update Your Information

Edit the following files to personalize your portfolio:

- **`app/page.tsx`** - Update the home page with your name, bio, and projects
- **`app/layout.tsx`** - Update metadata (title, description)
- **`README.md`** - Update this file with your information

### Add Components

Use shadcn/ui CLI to add pre-built components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add navbar
```

### Styling

- Use Tailwind CSS classes for styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Deployment

This portfolio is configured for static export and can be deployed to:

- **GitHub Pages** - Free hosting for your portfolio
- **Vercel** - Recommended platform for Next.js apps
- **Netlify** - Alternative deployment option
- **Any static hosting** - AWS S3, Cloudflare Pages, etc.

### Deploy to GitHub Pages

```bash
# The build output will be in the `out` directory
pnpm build
```

Then push to your GitHub repository's `gh-pages` branch.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Contributing

This is a fork of [jaikishore2026-max/jaikishore2026-max.github.io](https://github.com/jaikishore2026-max/jaikishore2026-max.github.io)

Feel free to customize it for your own portfolio!

## License

This project is open source and available under the MIT License.

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)

## Support

If you encounter any issues, please check:
1. The original repository: [jaikishore2026-max.github.io](https://github.com/jaikishore2026-max/jaikishore2026-max.github.io)
2. Next.js docs: https://nextjs.org/docs
3. Tailwind CSS docs: https://tailwindcss.com/docs

## EmailJS (Contact Form)

This project includes an EmailJS-based contact form handler. To enable it:

- Install the client (already added as a dependency):

```bash
pnpm install
```

- Create a local env file at the project root named `.env.local` and set the following values (do NOT commit real keys):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

- Create an EmailJS template that uses the template variables: `from_name`, `from_email`, `subject`, `message`, and `to_email`.
- Restart the dev server after adding env vars: `pnpm dev`.

If you'd like, I can help wire the repository secrets on GitHub or create a deploy workflow that injects these values during CI.
