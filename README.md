# QuBit Landing Page

A professional, modern landing page showcasing QuBit - the comprehensive AI testing framework for LLM applications.

## Features

- 🎨 **Modern Design**: Beautiful, professional UI with Tailwind CSS
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Optimized performance with React
- 🎭 **Animations**: Smooth animations with Framer Motion
- 🧭 **Navigation**: Easy navigation similar to DeepEval
- 📄 **Multiple Pages**: Home, Features, Documentation, Examples, Getting Started

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Pages

- **Home** (`/`): Hero section, features overview, capabilities showcase
- **Features** (`/features`): Detailed feature descriptions with icons
- **Documentation** (`/documentation`): Comprehensive documentation guide
- **Examples** (`/examples`): Code examples and use cases
- **Getting Started** (`/getting-started`): Step-by-step installation and setup guide

## Tech Stack

- **React 19**: Modern React with TypeScript
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon library

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Content

Edit the page components in `src/pages/` to update content.

## Deployment

The landing page can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: `npm run build` then deploy `build/` folder
- **Any static hosting**: Build and serve the `build/` folder

## License

MIT
