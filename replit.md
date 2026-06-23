# Karizzmah - Creative Branding & Advertising Agency Website

## Overview
A modern, visually stunning single-page website for Karizzmah, a premier advertising and branding agency based in Dubai. The site features a dark luxury theme with gold and purple accents, smooth animations, and a fully functional contact form.

## Company Details
- **Company Name:** Karizzmah
- **Website:** karizzmah.ae
- **Email:** info@karizzmah.ae
- **Location:** Dubai, UAE

## Project Architecture

### Frontend (React + TypeScript + Vite)
```
client/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx    # Fixed navigation bar with smooth scroll
│   │   ├── Hero.tsx          # Hero section with stats and CTAs
│   │   ├── Services.tsx      # 6 service cards
│   │   ├── Portfolio.tsx     # 4 portfolio project cards
│   │   ├── About.tsx         # About section with highlights
│   │   ├── Clients.tsx       # Client marquee and stats
│   │   ├── Contact.tsx       # Contact form with validation
│   │   └── Footer.tsx        # Footer with links
│   ├── pages/
│   │   └── Home.tsx          # Main landing page
│   └── index.css             # Theme configuration (dark mode with gold/purple)
```

### Backend (Express + TypeScript)
```
server/
├── routes.ts                 # API routes (contact form)
├── storage.ts                # In-memory storage for contact messages
└── index.ts                  # Express server setup
```

### Shared
```
shared/
└── schema.ts                 # Zod schemas for contact form validation
```

## Design System

### Colors (Dark Theme)
- **Background:** Dark charcoal (#0a0a0c)
- **Primary:** Gold (#FBBF24) - CTAs, highlights, accents
- **Secondary:** Purple (#8B5CF6) - Secondary elements, accents
- **Foreground:** White/light gray for text

### Typography
- **Font Family:** Plus Jakarta Sans, Inter
- **Headings:** Bold, large sizes with gradient text effects

### Animations
- Framer Motion for scroll-triggered animations
- Smooth scroll navigation
- Client logo marquee
- Hover effects on cards and buttons

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "string (min 2 chars)",
  "email": "string (valid email)",
  "phone": "string (optional)",
  "message": "string (min 10 chars)"
}
```

**Response:**
```json
{
  "success": true,
  "message": { "id": "uuid", "name": "...", "email": "...", ... }
}
```

### GET /api/contact
Retrieve all contact messages (admin use).

## Key Features
1. **Responsive Design** - Works on desktop, tablet, and mobile
2. **Smooth Scroll Navigation** - Click nav links to scroll to sections
3. **Animated Content** - Framer Motion animations on scroll
4. **Contact Form** - React Hook Form + Zod validation
5. **Toast Notifications** - Success/error feedback
6. **SEO Optimized** - Meta tags and Open Graph data

## Running the Project
```bash
npm run dev
```
The application runs on port 5000.

## Recent Changes
- Initial implementation (January 2026)
- Created all sections: Hero, Services, Portfolio, About, Clients, Contact, Footer
- Implemented contact form with validation
- Added Framer Motion animations
- Configured dark theme with gold/purple accents
