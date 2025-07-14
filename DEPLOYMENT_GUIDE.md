# RiteFit.AI - Hostinger Deployment Guide

## Overview
This guide explains how to deploy your RiteFit.AI website to Hostinger hosting.

## Prerequisites
- Hostinger hosting account with cPanel access
- Domain name configured in Hostinger
- File manager or FTP access

## Deployment Options

### Option 1: Static Website (Recommended for Hostinger)
Since Hostinger typically provides shared hosting, the best approach is to deploy as a static website.

#### Steps:
1. **Build the Frontend Only**
   ```bash
   # In your Replit environment
   npx vite build
   ```

2. **Download the Built Files**
   - The build creates files in the `dist` folder
   - Download the entire `dist` folder contents
   - Also download the `attached_assets` folder for images/logos

3. **Upload to Hostinger**
   - Log into Hostinger cPanel
   - Open File Manager
   - Navigate to your domain's public_html folder
   - Upload all files from the `dist` folder
   - Upload the `attached_assets` folder

4. **Configure Routing**
   - Create a `.htaccess` file in the root directory with:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

### Option 2: Full-Stack Deployment (VPS/Cloud hosting)
If you have a VPS or cloud hosting plan from Hostinger:

#### Steps:
1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Project Files**
   - Upload the entire project folder
   - Install dependencies: `npm install`
   - Set up environment variables (DATABASE_URL, etc.)

3. **Configure Web Server**
   - Set up Node.js process manager (PM2)
   - Configure reverse proxy (Nginx)
   - Set up SSL certificate

## Required Files for Static Deployment

### Essential Files to Upload:
- `index.html` (from dist folder)
- `assets/` folder (from dist folder)
- `attached_assets/` folder (for images/logos)
- `.htaccess` (create this file for routing)

### .htaccess Configuration:
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Handle React Router
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
```

## Domain Configuration

### Custom Domain Setup:
1. **DNS Settings**
   - Point your domain to Hostinger's nameservers
   - Configure A records in Hostinger DNS zone

2. **SSL Certificate**
   - Enable SSL through Hostinger cPanel
   - Force HTTPS redirects

## Contact Form Functionality

### Static Hosting Limitations:
- Contact form won't work with static hosting
- Need to use a third-party service like:
  - Formspree (formspree.io)
  - Netlify Forms
  - EmailJS

### Alternative: EmailJS Setup
1. Sign up at EmailJS.com
2. Create email template
3. Update contact form component:
   ```javascript
   import emailjs from '@emailjs/browser';
   
   const sendEmail = (formData) => {
     emailjs.send('service_id', 'template_id', formData, 'public_key')
       .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
       });
   };
   ```

## Performance Optimization

### Before Upload:
- Compress images in `attached_assets` folder
- Minify CSS/JS (done automatically by Vite)
- Enable gzip compression via .htaccess

### After Upload:
- Test website speed with Google PageSpeed Insights
- Enable caching in Hostinger cPanel
- Configure CDN if available

## Testing Checklist

After deployment, verify:
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images and logos display
- [ ] Mobile responsiveness
- [ ] Contact information is clickable
- [ ] SSL certificate is active
- [ ] Performance is acceptable

## Troubleshooting

### Common Issues:
1. **Blank page**: Check .htaccess file
2. **Missing images**: Verify attached_assets folder upload
3. **404 errors**: Configure proper routing
4. **Performance issues**: Enable compression and caching

### Support Resources:
- Hostinger Knowledge Base
- cPanel documentation
- React Router documentation for routing issues

## Next Steps
1. Build the project locally or in Replit
2. Download the dist folder
3. Upload to Hostinger
4. Configure domain and SSL
5. Test thoroughly
6. Set up analytics and monitoring