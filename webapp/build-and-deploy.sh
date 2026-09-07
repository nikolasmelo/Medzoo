#!/bin/bash

# Stop execution if any command fails
set -e

echo "📦 1. Installing dependencies..."
npm install

echo "🔨 2. Compiling the Vite project..."
npm run build

echo "📂 3. Copying compiled static assets to the repository root..."
# Recursively copy all contents from dist/ to the root directory
cp -R dist/* ../

echo "📄 4. Generating SPA routing fallback (404.html)..."
# Duplicate index.html to 404.html at the root for GitHub Pages React Router support
cp dist/index.html ../404.html

echo "✅ Build automation complete!"
echo "⚠️  Next steps:"
echo "   1. cd .."
echo "   2. git add ."
echo "   3. git commit -m \"build: compile static assets to root\""
echo "   4. git push origin main"
