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
| **Homepage** | `/` | Animated humanoid robot hero with orbit rings, company stats, 6 feature cards, 4 systems overview, 6 use cases, philosophy, CTA |
| **Technology** | `/technology` | 4 deep-dive technology sections (Mechanical, AI, Vision, Safety) with spec grids |
| **Product** | `/product` | Animated robot showcase, 6 capabilities with metrics, full technical specs table |
| **About** | `/about` | Company timeline (2021-2026), engineering standards, Dubai narrative, responsible robotics |
| **Careers** | `/careers` | Split hero, 4 departments with 13 job listings, 6 benefit cards |
| **Contact** | `/contact` | Two-column form with company info, demo center details |

## v4 Features - Full Responsive + Modern Motion Graphics

### Responsive Design (8 Breakpoints)
- **Ultrawide**: 1920px+ (expanded max-widths)
- **Large Desktop**: 1440px+ (wider container)
- **Small Desktop**: 1280px (adjusted grids)
- **Tablet Landscape**: 1024px (single-column hero, 2-col grids)
- **Tablet Portrait**: 768px (hamburger menu, stacked layouts)
- **Mobile**: 600px (single-column everything)
- **Small Mobile**: 400px (full-width buttons, minimal stats)
- **Tiny Mobile**: 340px (stripped-down minimal)
- **Landscape Mobile**: handled via max-height + orientation

### Motion Graphics
- **Floating Geometric Shapes**: 5 animated shapes (squares + circles) with gentle drift
- **Grid Overlay**: Subtle drifting grid pattern across entire page
- **Scan Line**: Horizontal scan line traversing the viewport
- **Orbit Rings**: 3 concentric expanding/fading rings around robot
- **Orbit Particles**: 2 orbiting dots circling the robot
- **Robot Antenna**: Pulsing indicator light on head
- **Energy Flow**: Vertical energy beam through robot chest
- **Visor Scan**: Light sweep across robot visor

### Interactive Effects
- **Custom Cursor**: Dot + ring follower with magnetic scaling on hover
- **Magnetic Card Tilt**: 3D perspective tilt on feature/benefit cards (desktop)
- **IntersectionObserver Reveal**: GPU-accelerated scroll reveal with stagger
- **Counter Animations**: Cubic ease-out counting with locale formatting
- **Robot Head Tracking**: Head follows mouse with rotateX/Y
- **Robot Parallax**: Container shifts on scroll
- **Eye Blink**: Natural random blink cycle (3-7 second intervals)
- **Scroll Progress Bar**: Page-level reading progress
- **Touch Active States**: Visual feedback for mobile taps

### Accessibility
- **Reduced Motion**: Full `prefers-reduced-motion` support
- **High Contrast**: `prefers-contrast: high` border enhancements
- **Keyboard Navigation**: ESC closes mobile menu, focus management
- **ARIA Labels**: Navigation roles, dialog roles, aria-hidden decorations
- **Print Styles**: Clean print output with hidden chrome
- **Screen Reader**: Proper heading hierarchy, link labels

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form (name, email, subject, message) |
| `/api/health` | GET | Health check with timestamp |

## Project Structure

```
webapp/
  src/
    index.tsx              # Hono routes & API
    layout.tsx             # Shared layout (nav, footer, motion BG, meta)
    pages/
      home.tsx             # Homepage (7 sections + animated robot)
      technology.tsx       # Technology (4 system deep-dives)
      product.tsx          # Product (robot showcase, specs)
      about.tsx            # About (timeline, standards, Dubai)
      careers.tsx          # Careers (departments, benefits)
      contact.tsx          # Contact (form, info)
  public/static/
    styles.css             # Complete responsive stylesheet (51KB)
    app.js                 # Frontend interactions + motion (13KB)
    favicon.svg            # SVG favicon
  ecosystem.config.cjs     # PM2 config
  vite.config.ts           # Vite build
  wrangler.jsonc           # Cloudflare Pages config
```

## Deployment
- **Platform**: Cloudflare Pages
- **Project Name**: `maidoid`
- **Status**: Ready for deployment
- **Last Updated**: 2026-02-24
