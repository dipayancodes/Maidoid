# Maidoid Company Ltd. - Corporate Website

## Project Overview
- **Name**: Maidoid Company Ltd.
- **Goal**: Premium, ultra-modern corporate website for a futuristic humanoid robotics company based in Dubai, UAE
- **Design**: Pure White (#FFFFFF) and Deep Black (#000000) minimal theme inspired by Apple, Tesla, and high-end architecture websites
- **Tech Stack**: Hono + TypeScript + Vite + Cloudflare Pages

## Live URLs
- **Preview**: `https://3000-iwda9jy7bzqsaavfwguhq-02b9cc79.sandbox.novita.ai`
- **Production**: `https://maidoid.pages.dev` (after Cloudflare deployment)

## Pages & Routes

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero section, statement block, technology overview, philosophy, CTA |
| Technology | `/technology` | Mechanical Architecture, Motion Intelligence, AI Brain, Safety |
| Product | `/product` | Maidoid One showcase with specs, features, and technical data |
| About | `/about` | Vision, Engineering Standards, Dubai HQ, Responsible Robotics |
| Careers | `/careers` | Department listings with job cards (Robotics, AI, M&E, Manufacturing) |
| Contact | `/contact` | Contact form with name/email/subject/message + Dubai office info |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form (name, email, subject, message) |
| `/api/health` | GET | Health check endpoint |

## Design Features

- **Typography**: Inter font family (100-900 weights)
- **Layout**: Grid-based, large white space, alternating white/black sections
- **Navigation**: Fixed top nav with frosted glass effect, mobile hamburger menu
- **Animations**: Scroll-reveal effects, fade-in hero content, scroll indicator
- **SVG Technical Diagrams**: Custom humanoid body, neural network, motion paths, safety shield
- **Responsive**: Full mobile/tablet/desktop support
- **SEO**: Meta tags, Open Graph, semantic HTML

## Project Structure

```
webapp/
  src/
    index.tsx          # Main Hono app with routes and API
    layout.tsx         # Shared HTML layout (nav, footer, meta)
    pages/
      home.tsx         # Homepage (5 sections)
      technology.tsx   # Technology page (4 detail blocks)
      product.tsx      # Product page (render, features, specs)
      about.tsx        # About page (vision, standards, responsibility)
      careers.tsx      # Careers page (4 departments, benefits)
      contact.tsx      # Contact page (form, info, map)
  public/
    favicon.svg        # SVG favicon
    static/
      styles.css       # Complete stylesheet (24KB)
      app.js           # Frontend interactions (scroll, nav, form)
  ecosystem.config.cjs # PM2 configuration
  vite.config.ts       # Vite build config
  wrangler.jsonc       # Cloudflare Pages config
  package.json         # Dependencies and scripts
```

## Deployment

- **Platform**: Cloudflare Pages
- **Status**: Ready for deployment (configure API key in Deploy tab)
- **Project Name**: `maidoid`
- **Last Updated**: 2026-02-22

### Deploy Commands
```bash
npm run build
npx wrangler pages project create maidoid --production-branch main
npx wrangler pages deploy dist --project-name maidoid
```

## Development

```bash
npm run build              # Build for production
pm2 start ecosystem.config.cjs  # Start dev server on port 3000
pm2 logs maidoid --nostream     # Check logs
```
