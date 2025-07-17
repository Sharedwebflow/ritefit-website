# GitHub & Vercel Deployment Guide

## 🚀 Complete Deployment Instructions

Your GitHub repository is ready at: https://github.com/Sharedwebflow/ritefit-website

### Step 1: Upload Files to GitHub

Since git operations are restricted in this environment, you'll need to upload the files manually:

#### Option A: GitHub Web Interface (Recommended)
1. Go to your repository: https://github.com/Sharedwebflow/ritefit-website
2. Click "uploading an existing file" or drag and drop
3. Upload ALL files from this project (see file list below)
4. Commit with message: "Initial commit - RiteFit.AI website"

#### Option B: Local Git (If you have git installed locally)
1. Download all files from this Replit project
2. In your local terminal:
   ```bash
   git clone https://github.com/Sharedwebflow/ritefit-website.git
   cd ritefit-website
   # Copy all files from Replit to this directory
   git add .
   git commit -m "Initial commit - RiteFit.AI website"
   git push origin main
   ```

### Step 2: File Structure to Upload

Make sure you upload these key files and directories:

```
📁 Root Directory
├── 📁 client/                     # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   ├── 📁 lib/
│   │   └── main.tsx
│   └── index.html
├── 📁 server/                     # Express backend
│   ├── routes.ts
│   ├── storage.ts
│   ├── index.ts
│   └── vite.ts
├── 📁 shared/                     # Shared schemas
│   └── schema.ts
├── 📁 static_website/             # Static HTML version
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── academy.html
│   ├── contact.html
│   ├── style.css
│   ├── script.js
│   └── .htaccess
├── 📁 attached_assets/            # Logo and images
│   └── [all image files]
├── 📄 vercel.json                 # Vercel config
├── 📄 package.json                # Dependencies
├── 📄 tailwind.config.ts          # Tailwind config
├── 📄 tsconfig.json               # TypeScript config
├── 📄 vite.config.ts              # Vite config
├── 📄 drizzle.config.ts           # Database config
├── 📄 postcss.config.js           # PostCSS config
├── 📄 README.md                   # Documentation
├── 📄 .gitignore                  # Git ignore
└── 📄 DEPLOYMENT_VERCEL.md        # Deployment guide
```

### Step 3: Deploy to Vercel

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Import your GitHub repository: `ritefit-website`

3. **Configure Deployment Settings**
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
   - **Root Directory**: Leave empty

4. **Environment Variables**
   Add these in Vercel dashboard:
   
   | Variable | Value | Required |
   |----------|-------|----------|
   | `DATABASE_URL` | Your PostgreSQL connection string | Yes |
   | `NODE_ENV` | `production` | Yes |

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at: `https://ritefit-website.vercel.app`

### Step 4: Database Setup (Choose One)

#### Option A: Neon (Recommended)
1. Go to https://neon.tech
2. Sign up and create a new project
3. Copy the connection string
4. Add to Vercel as `DATABASE_URL`

#### Option B: Supabase
1. Go to https://supabase.com
2. Create a new project
3. Go to Settings → Database
4. Copy PostgreSQL connection string
5. Add to Vercel as `DATABASE_URL`

#### Option C: PlanetScale
1. Go to https://planetscale.com
2. Create a new database
3. Get connection string
4. Add to Vercel as `DATABASE_URL`

### Step 5: Test Your Deployment

After deployment, test these features:
- [ ] All pages load (Home, About, Services, Academy, Contact)
- [ ] Navigation works correctly
- [ ] Contact forms submit successfully
- [ ] Founders section displays properly
- [ ] Mobile responsiveness
- [ ] Page loading speed

### Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🚨 Troubleshooting

### Build Errors
- Check build logs in Vercel dashboard
- Verify all files uploaded correctly
- Ensure package.json is present

### Database Connection Issues
- Verify DATABASE_URL format
- Check database is accessible
- Add `?sslmode=require` to connection string if needed

### Contact Form Issues
- Verify Web3Forms access key: `06ee5cc9-fb04-4288-bc38-5854ab34471e`
- Check form submission in browser developer tools
- Test form on deployed site

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify all environment variables are set
3. Test the build locally: `npm run build`
4. Check database connectivity

Your RiteFit.AI website will be live and fully functional once deployed!