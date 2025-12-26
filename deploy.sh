#!/bin/bash

# Deploy script for GitHub Pages
# This script builds and prepares the site for GitHub Pages deployment

echo "🚀 Building QuBit Landing Page for GitHub Pages..."

# Set the public URL for GitHub Pages
export PUBLIC_URL=/QubitEval

# Build the project
npm run build

echo "✅ Build complete!"
echo ""
echo "📦 To deploy to GitHub Pages:"
echo "1. Make sure you're in the qubit-landing directory"
echo "2. Initialize git if not already done: git init"
echo "3. Add the remote: git remote add origin https://github.com/saurabhdsh/QubitEval.git"
echo "4. Add, commit and push:"
echo "   git add ."
echo "   git commit -m 'Deploy QuBit landing page'"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "5. Enable GitHub Pages in repository settings:"
echo "   - Go to Settings > Pages"
echo "   - Source: GitHub Actions"
echo ""
echo "Or use the GitHub Actions workflow that will auto-deploy on push to main branch."

