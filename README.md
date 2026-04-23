# Chiêm Tinh Học - Astrology Web App

A modern astrology web application built with Next.js 14, TypeScript, and Tailwind CSS. Powered by the Astrologer API v5 from RapidAPI.

## Features

- **📍 Birth Chart (Lá Số Tử Vi)** - Discover your natal chart with all planetary positions
- **♾️ Compatibility (Hợp Tuổi)** - Check compatibility between two people with detailed aspect analysis
- **🌙 Moon Phase (Pha Mặt Trăng)** - View current moon phase and its influence
- **⭐ Transit Chart (Hành Tinh Hiện Tại)** - See current planetary transits affecting you

## Setup

### 1. Get RapidAPI Key

1. Visit: https://rapidapi.com/gbattaglia/api/astrologer
2. Subscribe to any plan (Free tier available)
3. Copy your `X-RapidAPI-Key` from the Header Parameters section

### 2. Configure Environment

Create `.env.local` in the project root:

```
RAPIDAPI_KEY=your_key_from_rapidapi
RAPIDAPI_HOST=astrologer.p.rapidapi.com
```

### 3. Install & Run

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

Visit: http://localhost:3000

## Development

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom cosmic theme
- **Language:** TypeScript
- **API:** All calls proxied through Next.js API routes for security

### Project Structure

```
src/
├── app/              # Pages: birth-chart, compatibility, moon-phase, transit
├── api/              # API proxy routes (keep RAPIDAPI_KEY secret)
├── components/
│   ├── layout/       # Navbar, Footer, StarBackground
│   ├── ui/           # GlowCard, MysticButton, SectionHeader, etc.
│   ├── forms/        # SubjectForm (reusable birth data form)
│   ├── charts/       # SvgChartDisplay, PlanetTable
│   └── features/     # Feature-specific form & result components
├── hooks/            # useBirthChart, useCompatibility, useMoonPhase, useTransit
└── lib/
    ├── types.ts      # All TypeScript interfaces
    ├── api-client.ts # Client-side fetch helpers
    ├── astrologer-api.ts # Server-side API wrapper
    └── utils.ts      # Formatters, zodiac data, etc.
```

## Build

```bash
npm run build
npm start
```

---

Built with ⭐ and powered by Astrologer API v5
