# Vercel Deployment Guide for RiteFit.AI

This guide will help you deploy the RiteFit.AI website to Vercel.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub Repository**
   ```bash
   git add .
   git commit -m "Initial commit - RiteFit.AI website"
   git branch -M main
   git remote add origin https://github.com/yourusername/ritefit-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Configure the following settings:
     - **Framework Preset**: Other
     - **Root Directory**: Leave empty (uses root)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist/public`
     - **Install Command**: `npm install`

3. **Environment Variables**
   In the Vercel dashboard, add these environment variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=production
   ```

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 📋 Environment Variables Required

Add these in your Vercel dashboard under Settings > Environment Variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `DATABASE_URL` | Your PostgreSQL connection string | Database connection |
| `NODE_ENV` | `production` | Environment setting |

## 🗄️ Database Setup

### Option 1: Neon Database (Recommended)
1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new database project
3. Copy the connection string
4. Add it as `DATABASE_URL` in Vercel environment variables

### Option 2: Supabase
1. Go to [supabase.com](https://supabase.com) and create a project
2. Get the PostgreSQL connection string from Settings > Database
3. Add it as `DATABASE_URL` in Vercel environment variables

### Option 3: PlanetScale
1. Go to [planetscale.com](https://planetscale.com) and create a database
2. Get the connection string
3. Add it as `DATABASE_URL` in Vercel environment variables

## 🔧 Build Configuration

The project includes a `vercel.json` configuration file that handles:
- **Backend**: Node.js serverless functions
- **Frontend**: Static React build
- **Routing**: API routes and client-side routing
- **Build**: Optimized production build

## 🌐 Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 🚨 Common Issues & Solutions

### Build Errors
- **TypeScript errors**: Run `npm run check` locally to fix type issues
- **Missing dependencies**: Ensure all dependencies are in `package.json`
- **Build timeout**: Large builds may need optimization

### Database Connection
- **Connection string**: Ensure DATABASE_URL includes all required parameters
- **SSL mode**: Add `?sslmode=require` to connection string if needed
- **Connection pooling**: Use connection pooling for better performance

### Performance Optimization
- **Static assets**: Images are optimized automatically
- **Code splitting**: Vite handles automatic code splitting
- **Caching**: Vercel provides automatic edge caching

## 📊 Monitoring & Analytics

1. **Vercel Analytics**: Enable in project settings
2. **Performance monitoring**: Built-in Vercel insights
3. **Error tracking**: Check function logs in Vercel dashboard

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback capabilities in Vercel dashboard

## 📞 Support

For deployment issues:
1. Check Vercel function logs
2. Verify environment variables
3. Test build locally: `npm run build`
4. Check database connectivity

## 🎯 Production Checklist

- [ ] Repository pushed to GitHub
- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Contact forms working
- [ ] All pages loading correctly
- [ ] Mobile responsiveness tested

---

Your RiteFit.AI website will be live at: `https://your-project-name.vercel.app`