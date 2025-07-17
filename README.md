# RiteFit.AI - Business Website

A modern, responsive business website for RiteFit.AI, a talent and technology enablement firm specializing in AI-driven workforce solutions.

## 🚀 Features

- **Modern Design**: Clean, professional interface with AI-themed styling
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth animations and scroll effects
- **Contact Forms**: Functional contact forms with Web3Forms integration
- **Leadership Team**: Dedicated founders section showcasing the team
- **Multi-Page Structure**: Home, About, Services, Academy, and Contact pages
- **Dual Deployment**: Both React SPA and static HTML versions

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Wouter** for routing
- **Radix UI** components

### Backend
- **Express.js** with TypeScript
- **PostgreSQL** with Drizzle ORM
- **TanStack Query** for state management

### Development
- **Vite** for build tooling
- **Hot Module Replacement** for development
- **ESBuild** for production builds

## 📁 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   └── lib/           # Utility functions
├── server/                # Express backend
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── index.ts           # Server entry point
├── static_website/        # Static HTML version for hosting
│   ├── *.html            # HTML pages
│   ├── style.css         # Compiled CSS
│   ├── script.js         # JavaScript functionality
│   └── .htaccess         # Apache configuration
├── shared/               # Shared TypeScript schemas
└── attached_assets/      # Logo and brand assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ritefit-website.git
   cd ritefit-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Update database schema

## 🌐 Static Website Deployment

The `static_website/` directory contains a complete static HTML version ready for deployment on:
- **Hostinger** (recommended)
- **Netlify**
- **Vercel**
- **GitHub Pages**
- Any static hosting provider

### Quick Deploy to Hostinger
1. Download `ritefit-website.tar.gz` from the `static_website/` folder
2. Extract and upload files to your hosting provider
3. Update the Web3Forms access key in contact forms if needed

## 🔧 Configuration

### Contact Forms
The contact forms use Web3Forms for email delivery. To configure:

1. Sign up at [Web3Forms](https://web3forms.com)
2. Get your access key
3. Update the access key in:
   - `client/src/components/contact-form.tsx`
   - `static_website/contact.html`

### Database Setup
The application uses PostgreSQL with Drizzle ORM. Schema is defined in `shared/schema.ts`.

## 🎨 Customization

### Colors
The website uses a blue/teal gradient color palette:
- Primary: `#0087e1` to `#0bbc8c`
- Update colors in `tailwind.config.ts` and `static_website/style.css`

### Content
- Update company information in the respective page files
- Replace logo in `attached_assets/` directory
- Modify founders information in about pages

## 🚀 Leadership Team

- **Venkata Gannamaneni** - President
- **Krishna Bendapudi** - Founder & Principal Director  
- **Sarveshwar Rao Murari** - CPO
- **Ramesh B.Y** - COO

## 📄 License

This project is proprietary software for RiteFit.AI.

## 🤝 Support

For support and inquiries, contact RiteFit.AI through the website contact form or reach out to the development team.

---

Built with ❤️ by the RiteFit.AI team