# Kings Royal Riders

A dynamic website for the Kings Royal Riders motorcycle club.

## Deployment

This project is configured to deploy automatically to GitHub Pages. Here's how it works:

1. The project is built using Vite
2. GitHub Actions workflow automatically builds and deploys to GitHub Pages
3. The site is served from the `gh-pages` branch

### Setting up GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set "Source" to "Deploy from a branch"
4. Select "gh-pages" branch and "/ (root)" folder
5. Click "Save"

### Manual Deployment

If you need to deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The site will be built to the 'dist' folder
```

### Development

To run the project locally:

```bash
# Start development server
npm run dev

# Build and preview
npm run prod
```

## Base URL

The site is configured to run at `https://girijashankarj.github.io/kings-royal-riders/`. Make sure to update the `homepage` in `package.json` with your GitHub username.
