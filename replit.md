# RiteFit.AI - Business Website

## Overview

This is a modern, responsive business website for RiteFit.AI, a talent and technology enablement firm. The application is built as a full-stack TypeScript project using React for the frontend and Express.js for the backend, with PostgreSQL as the database and Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animation**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration
- **Production**: Compiled with esbuild for optimal performance

### Database Schema
The application uses two main tables:
- **Users**: Basic user authentication (id, username, password)
- **Contacts**: Contact form submissions (id, name, email, phone, company, message, service, created_at)

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with multiple sections
- **About Page**: Dedicated page with company mission, vision, values, and statistics
- **Services Page**: Detailed service descriptions with features, benefits, and process
- **Hero Section**: Animated text and call-to-action
- **Services Section**: Four main service offerings with descriptions
- **About Section**: Expertise showcase with animated progress bars
- **Testimonials**: Carousel of client testimonials
- **Stats Section**: Animated counters for key metrics
- **Contact Form**: Professional contact form with validation and submission
- **Contact Section**: Call-to-action with contact information
- **Navbar**: Responsive navigation with page routing and smooth scrolling
- **Footer**: Company information and social links

### Animation Features
- **Scroll Reveal**: Components animate into view when scrolled
- **Split Text**: Character-by-character text animations
- **Progress Bars**: Animated skill/expertise indicators
- **Floating Elements**: Decorative background animations
- **Counters**: Animated number counting effects

### UI System
- **Design System**: Custom color palette for RiteFit.AI branding
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized animations and lazy loading

## Data Flow

1. **Static Content**: Most content is hardcoded for this business website
2. **Contact Forms**: (Ready for implementation) Contact form data flows to backend API
3. **User Authentication**: (Prepared structure) User registration/login through backend
4. **Database Operations**: Drizzle ORM handles all database interactions
5. **Session Management**: Express sessions with PostgreSQL storage

## External Dependencies

### Frontend Libraries
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, Lucide React icons
- **Animation**: Framer Motion, React Intersection Observer
- **Form Handling**: React Hook Form, Hookform Resolvers
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS, Class Variance Authority
- **Utilities**: Date-fns, clsx, nanoid

### Backend Libraries
- **Server**: Express.js, Node.js
- **Database**: Drizzle ORM, Neon Database serverless
- **Session**: Express Session, connect-pg-simple
- **Validation**: Drizzle Zod, Zod
- **Development**: TSX, Vite

### Development Tools
- **Build**: Vite, esbuild, TypeScript
- **Styling**: PostCSS, Autoprefixer
- **Code Quality**: ESLint, Prettier (implicit)
- **Database**: Drizzle Kit for migrations

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: Express server with Vite middleware integration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Environment**: NODE_ENV=development for development features

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript to `dist/index.js`
- **Database**: Drizzle migrations ensure schema consistency
- **Environment**: NODE_ENV=production for production optimizations

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)
- **REPL_ID**: Replit-specific environment detection

### Build Process
1. `npm run build`: Compiles both frontend and backend
2. `npm run start`: Runs production server
3. `npm run dev`: Starts development environment
4. `npm run db:push`: Updates database schema

The application is designed to be deployed on platforms like Replit, Vercel, or traditional hosting providers with PostgreSQL support.