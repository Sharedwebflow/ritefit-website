# RiteFit.AI - Business Website

A modern, professional business website for RiteFit.AI, a talent and technology enablement firm specializing in AI-driven solutions and comprehensive human capital management services.

## 🚀 Features

- **Modern React Frontend**: Built with React 18, TypeScript, and Tailwind CSS
- **Express.js Backend**: Full-stack architecture with PostgreSQL database
- **AI-Themed Design**: Professional blue/teal color palette with animations
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Components**: Framer Motion animations and scroll effects
- **Contact Forms**: Fully functional with Web3Forms integration
- **Real Founder Photos**: Authentic leadership team presentation

## 🛠 Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui components
- Framer Motion for animations
- TanStack Query for state management
- Wouter for routing

### Backend
- Express.js with TypeScript
- PostgreSQL with Drizzle ORM
- Session management
- RESTful API design

## 🌐 Services

- **Staff Augmentation**: Flexible access to skilled professionals
- **HCM Implementation**: Streamlined HR processes and workforce optimization
- **Managed Services**: 24/7 technical and functional support
- **AI-Powered Solutions**: Smart hiring tools with machine learning

## 🚀 Quick Deploy to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/your-template-id)

### Manual Railway Deployment

1. **Fork this repository**
2. **Connect to Railway**:
   - Go to [Railway](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select this repository
3. **Environment Variables**:
   ```
   DATABASE_URL=postgresql://...  (Railway will provide this)
   NODE_ENV=production
   ```
4. **Deploy**: Railway will automatically build and deploy your application

## 💻 Local Development

### Prerequisites
- Node.js 18+ 
- PostgreSQL database

### Setup
1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd ritefit-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment setup**:
   ```bash
   # Create .env file with:
   DATABASE_URL=postgresql://username:password@localhost:5432/ritefit
   NODE_ENV=development
   ```

4. **Database setup**:
   ```bash
   npm run db:push
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

6. **Open browser**: Navigate to `http://localhost:5000`

## 📦 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Update database schema

## 🌟 Key Features

### Professional Design
- Clean, modern interface with AI-themed backgrounds
- Professional color scheme and typography
- Smooth animations and micro-interactions

### Real Content
- Authentic founder photos and company information
- Service descriptions based on actual offerings
- Professional testimonials and case studies

### Performance Optimized
- Server-side rendering ready
- Optimized animations and images
- Fast loading times

## 📱 Pages

- **Home**: Hero section, services overview, testimonials
- **About**: Company mission, founder profiles, statistics
- **Services**: Detailed service descriptions and processes
- **Academy**: Training programs and curriculum
- **Contact**: Contact forms and company information

## 🔧 Deployment Options

- **Railway** (Recommended): Full-stack deployment with database
- **Vercel**: Frontend deployment with serverless functions
- **Render**: Full-stack deployment alternative
- **Static Hosting**: Pre-built static version available

## 📞 Contact

- **Website**: [ritefit.ai](https://ritefit.ai)
- **Email**: info@ritefit.ai
- **Phone**: +919176690330

## 📄 License

© 2025 RiteFit.AI. All rights reserved.