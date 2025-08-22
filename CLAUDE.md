# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

This is a **Next.js 15 jobboard application** using the App Router architecture with the following key patterns:

### Framework & Stack
- **Next.js 15.3.5** with App Router (`app/` directory structure)
- **React 19** with TypeScript 5
- **Tailwind CSS v4** for styling with PostCSS integration
- **Geist fonts** (Sans & Mono) from Google Fonts

### Directory Structure & Patterns
- `app/layout.tsx` - Global layout with font configuration and Header integration
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles including custom CSS grid background system
- `components/` - Reusable React components (currently Header navigation)

### Key Architecture Decisions
- **Server-Side Rendering (SSR)** by default with selective client components (`'use client'`)
- **Mobile-first responsive design** using Tailwind CSS classes
- **Custom CSS grid system** with responsive breakpoints in `globals.css`
- **Component composition** pattern with Header imported into root layout

### Styling System
The app uses a unique **CSS grid background system** defined in `globals.css`:
- CSS variables for colors: `--background` and `--foreground`
- Responsive grid columns: 12 cols (desktop) → 6 cols (tablet) → 4 cols (mobile)
- Linear gradient backgrounds that adapt to screen size

### Navigation & Routing
- **Next.js Link-based navigation** for client-side routing
- **Responsive header** with hamburger menu for mobile

### Current State
Early MVP with basic landing page structure. No backend integration, authentication, or database layer implemented yet. The Header component demonstrates the expected patterns for future component development with proper TypeScript, responsive design, and accessibility considerations.