# Deploying QuBit Landing Page to GitHub Pages

This guide will help you deploy the QuBit landing page to GitHub Pages at `https://saurabhdsh.github.io/QubitEval`.

## Prerequisites

- Node.js and npm installed
- Git installed
- Access to the GitHub repository: https://github.com/saurabhdsh/QubitEval.git

## Method 1: Automatic Deployment (Recommended)

### Step 1: Initialize Git Repository

```bash
cd qubit-landing
git init
git remote add origin https://github.com/saurabhdsh/QubitEval.git
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Commit and Push

```bash
git add .
git commit -m "Initial commit: QuBit landing page"
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository: https://github.com/saurabhdsh/QubitEval
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The GitHub Actions workflow will automatically deploy on every push to `main` branch

### Step 5: Access Your Site

Once deployed, your site will be available at:
**https://saurabhdsh.github.io/QubitEval**

## Method 2: Manual Deployment

If you prefer to deploy manually:

```bash
# Build with correct public URL
export PUBLIC_URL=/QubitEval
npm run build

# The build folder is ready to deploy
# You can use gh-pages package or manually push build folder
```

## GitHub Actions Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Automatically builds the site on push to `main` branch
- Deploys to GitHub Pages
- Uses the correct base path for GitHub Pages

## Troubleshooting

### Routes Not Working

If routes (like `/features`, `/documentation`) show 404 errors:
- Make sure `PUBLIC_URL` is set to `/QubitEval` during build
- The Router in `App.tsx` uses the basename correctly

### Build Errors

If you encounter build errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Updating

- Check GitHub Actions tab for deployment status
- Ensure Pages is enabled in repository settings
- Wait a few minutes for GitHub to process the deployment

## Updating the Site

To update the site:
1. Make your changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update landing page"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings as per GitHub Pages documentation
3. Update the `homepage` field in `package.json` if needed

