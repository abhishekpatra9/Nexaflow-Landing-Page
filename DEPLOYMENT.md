# Deployment Guide

Step-by-step guide to deploy your Nexaflow landing page.

## Prerequisites

- Git installed
- GitHub account
- Vercel account (free tier available)
- Node.js 18+ installed locally

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the platform created by the makers of Next.js. It offers the best performance and easiest deployment.

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit: Nexaflow landing page"
   \`\`\`

2. **Create GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Create a new repository named "nexaflow"
   - Don't initialize with README (you already have one)

3. **Push your code**:
   \`\`\`bash
   git remote add origin https://github.com/YOUR_USERNAME/nexaflow.git
   git branch -M main
   git push -u origin main
   \`\`\`

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**:
   - Click "Add New Project"
   - Select your "nexaflow" repository
   - Click "Import"

3. **Configure Project** (optional):
   - Project Name: nexaflow
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - Your site will be live at `https://nexaflow.vercel.app`

### Step 3: Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain

2. **Configure DNS**:
   - Add the following records to your domain registrar:
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   \`\`\`

3. **Wait for DNS propagation** (up to 24 hours)

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub
(Same as Vercel Step 1)

### Step 2: Deploy to Netlify

1. **Sign up/Login**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **New Site from Git**:
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select "nexaflow" repository

3. **Build Settings**:
   \`\`\`
   Build command: npm run build
   Publish directory: .next
   \`\`\`

4. **Deploy**:
   - Click "Deploy site"
   - Your site will be live at a Netlify URL

---

## Option 3: Self-Hosted (VPS/Server)

### Requirements
- Ubuntu 20.04+ server
- Node.js 18+ installed
- Nginx installed
- Domain name pointed to your server

### Step 1: Server Setup

1. **Install Node.js**:
   \`\`\`bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   \`\`\`

2. **Install PM2** (Process Manager):
   \`\`\`bash
   sudo npm install -g pm2
   \`\`\`

3. **Clone Repository**:
   \`\`\`bash
   cd /var/www
   git clone https://github.com/YOUR_USERNAME/nexaflow.git
   cd nexaflow
   \`\`\`

4. **Install Dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

5. **Build Project**:
   \`\`\`bash
   npm run build
   \`\`\`

### Step 2: Start with PM2

\`\`\`bash
pm2 start npm --name "nexaflow" -- start
pm2 save
pm2 startup
\`\`\`

### Step 3: Configure Nginx

1. **Create Nginx config**:
   \`\`\`bash
   sudo nano /etc/nginx/sites-available/nexaflow
   \`\`\`

2. **Add configuration**:
   \`\`\`nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

3. **Enable site**:
   \`\`\`bash
   sudo ln -s /etc/nginx/sites-available/nexaflow /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   \`\`\`

### Step 4: SSL Certificate (HTTPS)

\`\`\`bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
\`\`\`

---

## Environment Variables

If you add backend integrations, you'll need environment variables.

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables:
   \`\`\`
   NEXT_PUBLIC_API_URL=https://api.yoursite.com
   CONTACT_EMAIL=contact@nexaflow.com
   \`\`\`

### Netlify
1. Go to Site Settings → Environment Variables
2. Add the same variables

### Self-Hosted
Create `.env.local` file:
\`\`\`bash
nano .env.local
\`\`\`

Add:
\`\`\`env
NEXT_PUBLIC_API_URL=https://api.yoursite.com
CONTACT_EMAIL=contact@nexaflow.com
\`\`\`

Restart PM2:
\`\`\`bash
pm2 restart nexaflow
\`\`\`

---

## Post-Deployment Checklist

- [ ] Site loads correctly on mobile and desktop
- [ ] All navigation links work
- [ ] Images load properly
- [ ] Contact form displays correctly
- [ ] No console errors in browser
- [ ] Lighthouse score > 90
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate installed (HTTPS)
- [ ] Google Analytics added (optional)
- [ ] Sitemap generated (optional)
- [ ] robots.txt configured (optional)

---

## Continuous Deployment

Both Vercel and Netlify offer automatic deployments:

1. **Push changes to GitHub**:
   \`\`\`bash
   git add .
   git commit -m "Update pricing"
   git push
   \`\`\`

2. **Automatic deployment** happens within 1-2 minutes

3. **Preview deployments** for pull requests

---

## Troubleshooting

### Build Fails

**Check Node version**:
\`\`\`bash
node --version  # Should be 18+
\`\`\`

**Clear cache and rebuild**:
\`\`\`bash
rm -rf .next node_modules
npm install
npm run build
\`\`\`

### Images Not Loading

- Ensure images are in `public/` folder
- Use correct path: `/image-name.jpg` (not `./public/`)
- Check image file names match code exactly

### Slow Performance

1. **Optimize images**:
   - Use WebP format
   - Compress with [tinypng.com](https://tinypng.com)
   - Use Next.js Image component

2. **Check Lighthouse score**:
   - Chrome DevTools → Lighthouse
   - Fix reported issues

### Navigation Not Working

- Check all section IDs match navigation hrefs
- Ensure smooth scroll JavaScript is not blocked
- Test in different browsers

---

## Monitoring

### Vercel Analytics
Enable in Project Settings → Analytics (free basic tier)

### Google Analytics

Add to `app/layout.jsx`:
\`\`\`jsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

---

## Backup Strategy

### GitHub (Version Control)
All code is backed up in Git repository.

### Database Backups (If Added Later)
- Automated daily backups
- Store in separate location
- Test restore process monthly

---

## Support

If you encounter deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Happy Deploying!** 🚀
