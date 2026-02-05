# Vercel Deployment Guide

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `setkorp-landingpage`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `Html/setkorp`
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy your site
   - You'll get a live URL like: `https://setkorp-xxx.vercel.app`

---

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to your project
cd c:\Users\sunit\Desktop\setkorp-landingpage\Html\setkorp

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## Environment Variables (if needed)

If you need to add environment variables:

1. Go to your project on Vercel dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables
4. Redeploy

---

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Build Configuration

The project is already configured with:
- ✅ Next.js 16.1.6
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ ESLint
- ✅ Framer Motion
- ✅ Image optimization

**No additional configuration needed!**

---

## Troubleshooting

### If build fails on Vercel:

1. **Check Node version**
   - Vercel uses Node 18+ by default
   - Your project is compatible

2. **Check build logs**
   - Click on the failed deployment
   - Review the build logs
   - Most issues are environment-related

3. **Clear cache and redeploy**
   - Go to deployment settings
   - Click "Redeploy" → "Redeploy with cache cleared"

---

## Post-Deployment Checklist

- [ ] Visit your deployed URL
- [ ] Test all sections (Hero, Services, FAQ, Contact)
- [ ] Check mobile responsiveness
- [ ] Verify images load correctly
- [ ] Test form interactions
- [ ] Check navigation links
- [ ] Verify social media links

---

## Performance Tips

Your site is already optimized with:
- Static page generation
- Image optimization via Next.js Image
- Tailwind CSS purging
- Framer Motion for smooth animations

**Expected Performance:**
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

---

## Support

If you encounter any issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs in Vercel dashboard
3. Check Next.js [deployment guide](https://nextjs.org/docs/deployment)

---

**Ready to deploy!** 🚀
