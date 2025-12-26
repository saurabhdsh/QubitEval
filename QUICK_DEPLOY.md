# Quick Deploy to GitHub Pages

## 🚀 Quick Start (3 Steps)

### Step 1: Navigate to Landing Page Directory
```bash
cd /Users/saurabhdubey/QuBit/qubit-landing
```

### Step 2: Initialize Git and Push
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Deploy QuBit landing page to GitHub Pages"

# Add remote (if not already added)
git remote add origin https://github.com/saurabhdsh/QubitEval.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to: https://github.com/saurabhdsh/QubitEval/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Save

## ✅ That's It!

The GitHub Actions workflow will automatically:
- Build the site
- Deploy to GitHub Pages
- Make it available at: **https://saurabhdsh.github.io/QubitEval**

## 📝 Notes

- The site is configured with base path `/QubitEval`
- All routes will work correctly
- Future pushes to `main` will auto-deploy
- Check the **Actions** tab in GitHub to see deployment status

## 🔄 Updating the Site

Just push changes:
```bash
git add .
git commit -m "Update landing page"
git push
```

GitHub Actions will automatically rebuild and redeploy!

