# Deployment Guide

This guide explains how to deploy your new Svelte academic website to replace your existing Jekyll site.

## Option 1: Gradual Migration (Recommended)

1. **Test the new site locally**:
   ```bash
   npm run preview
   ```

2. **Deploy to a subdomain first** (e.g., `new.cmxu.io`):
   - Create a new branch: `git checkout -b svelte-site`
   - Copy the `build` directory contents to the root
   - Test on the new branch

## Option 2: Full Replacement

1. **Backup your current site**:
   ```bash
   # In your main directory
   git checkout -b jekyll-backup
   git push origin jekyll-backup
   ```

2. **Build the Svelte site**:
   ```bash
   cd svelte-site
   npm run build
   ```

3. **Replace the Jekyll site**:
   ```bash
   # From the repository root
   # Remove old Jekyll files (keep .git and CNAME)
   find . -maxdepth 1 ! -name '.git' ! -name 'CNAME' ! -name 'svelte-site' -exec rm -rf {} +
   
   # Copy the built files
   cp -r svelte-site/build/* .
   
   # Add and commit
   git add .
   git commit -m "Migrate to Svelte-based academic site"
   git push origin master
   ```

## GitHub Pages Configuration

Make sure your GitHub Pages is configured to:
- Source: Deploy from a branch
- Branch: `master` (or `main`)
- Folder: `/ (root)`

## Custom Domain

Your `CNAME` file should remain in the root with:
```
cmxu.io
```

## Post-Deployment

1. **Check your site** at https://cmxu.io
2. **Verify all pages load correctly**
3. **Test on mobile devices**
4. **Check that PDF viewer works** for your CV

## Updating Content

To update your site content:

1. Make changes in the `svelte-site` directory
2. Run `npm run build`
3. Copy the built files to root
4. Commit and push

## Automation (Optional)

Consider setting up GitHub Actions to automatically build and deploy when you push changes to the `svelte-site` directory. 