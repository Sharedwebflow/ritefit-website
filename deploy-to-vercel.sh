#!/bin/bash

echo "🚀 Preparing RiteFit.AI for Vercel deployment..."

# Test the build process
echo "📦 Testing build process..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix the issues before deploying."
    exit 1
fi

echo "
🎯 Next steps for Vercel deployment:

1. Create a GitHub repository:
   - Go to https://github.com/new
   - Name: ritefit-website
   - Make it public or private

2. Push your code to GitHub:
   git init
   git add .
   git commit -m 'Initial commit - RiteFit.AI website'
   git branch -M main  
   git remote add origin https://github.com/yourusername/ritefit-website.git
   git push -u origin main

3. Deploy on Vercel:
   - Go to https://vercel.com
   - Click 'New Project'
   - Import your GitHub repository
   - Set build command: npm run build
   - Set output directory: dist/public
   - Add environment variables:
     * DATABASE_URL (your PostgreSQL connection)
     * NODE_ENV=production

4. Your site will be live at: https://your-project-name.vercel.app

📋 Files ready for deployment:
✅ vercel.json (Vercel configuration)
✅ README.md (Documentation)
✅ .gitignore (Git ignore rules)
✅ DEPLOYMENT_VERCEL.md (Detailed deployment guide)

🔗 Need a database? Try these free options:
- Neon: https://neon.tech
- Supabase: https://supabase.com
- PlanetScale: https://planetscale.com
"