# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: GitHub Integration (Easiest)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Option 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd portfolio-website
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project? No
   - Project name: portfolio-website (or your preferred name)
   - Directory: ./
   - Override settings? No

## Other Deployment Options

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder to Netlify

### Traditional Hosting

1. Build and export:
   ```bash
   npm run build
   npm run start
   ```

2. Upload the built files to your hosting provider

## Environment Variables

If you add any environment variables later, make sure to:

1. Add them to `.env.local` for local development
2. Add them to your deployment platform (Vercel/Netlify dashboard)

## Custom Domain

After deployment, you can add a custom domain:

1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Tips

- The site is already optimized for performance
- Images are automatically optimized by Next.js
- Static pages are pre-rendered for faster loading
- CSS is automatically minified and optimized

Your portfolio will be live at: `https://your-project-name.vercel.app`
