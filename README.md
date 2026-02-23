# Maidoid Company Ltd. - Corporate Website

## Project Overview
- **Company**: Maidoid Company Ltd.
- **Industry**: Humanoid Robotics & Artificial Intelligence
- **Location**: Dubai, United Arab Emirates
- **Design**: Ultra-modern, pure White & Black minimal theme
- **Tech Stack**: Hono + TypeScript + Vite + Cloudflare Pages

## Live URLs
- **Preview**: https://3000-iwda9jy7bzqsaavfwguhq-02b9cc79.sandbox.novita.ai
- **GitHub**: https://github.com/dipayancodes/Maidoid

## Pages

| Page | Path | Key Content |
|------|------|-------------|
| **Homepage** | `/` | Animated humanoid robot hero, company stats, 6 feature cards, 4 systems overview, 6 use cases, philosophy, CTA |
| **Technology** | `/technology` | 4 deep-dive technology sections (Mechanical, AI, Vision, Safety) with spec grids |
| **Product** | `/product` | Animated robot showcase, 6 capabilities with metrics, full technical specs table |
| **About** | `/about` | Company timeline (2021-2026), engineering standards, Dubai narrative, responsible robotics |
| **Careers** | `/careers` | Split hero, 4 departments with 13 job listings, 6 benefit cards |
| **Contact** | `/contact` | Two-column form with company info, demo center details |

## Interactive Features
- **Animated CSS Humanoid Robot**: Floating animation, glowing eyes, arm sway, breathing core light
- **Robot Head Mouse Tracking**: Head follows cursor position in real-time
- **Eye Blinking**: Random natural blink cycle every 4-7 seconds
- **Page Loader**: Pulse animation on "M" logo mark
- **Custom Cursor**: Dot cursor with enlarge effect on interactive elements
- **Counter Animations**: Scroll-triggered number counting (2,000 / 10,000 etc.)
- **Scroll Reveal**: Staggered fade-up animations on all content blocks
- **Feature Card Hover**: Full black fill transition effect
- **Job Row Hover**: Slide-right interaction with arrow animation
- **Floating Data Labels**: Robot annotation points fade in sequentially

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/health` | GET | Health check |

## Project Structure

```
webapp/
  src/
    index.tsx              # Hono routes & API
    layout.tsx             # Shared layout (nav, footer, meta, loader)
    pages/
      home.tsx             # Homepage (7 sections)
      technology.tsx       # Technology (4 system deep-dives)
      product.tsx          # Product (robot showcase, specs)
      about.tsx            # About (timeline, standards, Dubai)
      careers.tsx          # Careers (departments, benefits)
      contact.tsx          # Contact (form, info)
  public/static/
    styles.css             # Complete stylesheet (34KB)
    app.js                 # Frontend interactions (9KB)
    favicon.svg            # SVG favicon
  ecosystem.config.cjs     # PM2 config
  vite.config.ts           # Vite build
  wrangler.jsonc           # Cloudflare Pages config
```

## Deployment
- **Platform**: Cloudflare Pages
- **Project Name**: `maidoid`
- **Status**: Ready for deployment
- **Last Updated**: 2026-02-23
