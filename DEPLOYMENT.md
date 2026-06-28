# Fusion Angular Tailwind - Deployment Guide

This branch is configured for deployment to Netlify or GitHub Pages.

## Local Build Steps

Run these commands in your terminal:

```bash
npm install
npm run build
```

The built files will be in: `dist/fusion-angular-tailwind-starter/`

## Deploy to Netlify (Recommended)

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "New site from Git"
4. Select this repository
5. Build command: `npm run build`
6. Publish directory: `dist/fusion-angular-tailwind-starter`
7. Click Deploy!

Your site will be live at a Netlify URL like: `https://your-project.netlify.app`

## Deploy to GitHub Pages

1. Go to repository Settings → Pages
2. Source: Select branch `deploy/build-dist`
3. Select `/` (root) as the directory
4. Click Save

Your site will be live at: `https://aafreenjshaikh-droid.github.io/Angular-resume-20/`

## Environment Notes

- Node version: 18+
- npm version: 9+
- Output path: `dist/fusion-angular-tailwind-starter`
