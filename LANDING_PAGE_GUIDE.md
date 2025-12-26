# QuBit Landing Page - Complete Guide

## Overview

A professional, modern React.js landing page showcasing QuBit's comprehensive AI testing framework capabilities. The landing page is designed similar to DeepEval with excellent navigation and beautiful UI.

## Project Structure

```
qubit-landing/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Features.tsx
│   │   ├── Documentation.tsx
│   │   ├── Examples.tsx
│   │   └── GettingStarted.tsx
│   ├── App.tsx          # Main app with routing
│   ├── index.tsx         # Entry point
│   └── index.css         # Global styles with Tailwind
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies
```

## Pages

### 1. Home (`/`)
- **Hero Section**: Eye-catching gradient background with call-to-action
- **Features Overview**: 6 main feature cards with icons
- **Capabilities Grid**: 12 evaluation capabilities showcased
- **CTA Section**: Final call-to-action to get started

### 2. Features (`/features`)
- **Detailed Feature Descriptions**: 6 main features with full details
- **Technical Features Grid**: Advanced capabilities
- **Comparison Section**: Why choose QuBit

### 3. Documentation (`/documentation`)
- **Quick Links**: Fast access to common docs
- **Expandable Sections**: 
  - Getting Started
  - Evaluators
  - CLI Usage
  - Configuration
  - Reports
  - Python API
  - Live Monitoring

### 4. Examples (`/examples`)
- **Code Examples**: 6 real-world examples
  - Basic Test Suite
  - External Agent Testing
  - Python API Usage
  - YAML Test Suite
  - Live Chat Monitoring
  - G-Eval with Rubrics
- **Copy to Clipboard**: Easy code copying
- **Additional Resources**: Links to docs and GitHub

### 5. Getting Started (`/getting-started`)
- **Quick Start**: 4-command setup
- **Step-by-Step Guide**: 5 detailed steps
  - Installation
  - Configuration
  - Create Test Suite
  - Run Tests
  - View Reports
- **Next Steps**: Links to continue learning

## Design Features

### Color Scheme
- **Primary**: Blue gradient (primary-600 to primary-700)
- **Secondary**: Purple gradient (secondary-600 to secondary-700)
- **Accents**: Yellow/Orange for highlights

### Components
- **Navigation**: Sticky header with mobile menu
- **Footer**: Multi-column with links and social icons
- **Cards**: Hover effects and shadows
- **Animations**: Framer Motion for smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile navigation menu
- Responsive grids

## Key Features Showcased

1. **10+ Built-in Evaluators**
   - G-Eval, DAG, Hallucination Detection, etc.

2. **Multi-Provider LLM Support**
   - OpenAI, Anthropic, Gemini, 100+ providers via LiteLLM

3. **Safety & Compliance**
   - PII Detection, Toxicity, Bias Detection

4. **Rich Analytics**
   - HTML and JSON reports with visualizations

5. **Easy Integration**
   - CLI, Python API, REST endpoints

6. **Flexible Architecture**
   - Chatbots, RAG, Agents, Custom apps

## Running the Landing Page

### Development
```bash
cd qubit-landing
npm install
npm start
```
Opens at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates optimized build in `build/` folder

### Deploy
```bash
# Vercel
vercel deploy

# Netlify
netlify deploy

# Static hosting
# Upload build/ folder to your hosting service
```

## Customization

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Update Content
Edit page components in `src/pages/`

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add link in `src/components/Navigation.tsx`

## Technologies Used

- **React 19**: Modern React with TypeScript
- **React Router**: Client-side routing
- **Tailwind CSS 3**: Utility-first CSS
- **Framer Motion**: Animations
- **Lucide React**: Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size (~125KB gzipped)
- Lazy loading for images
- Code splitting
- Production optimizations

## SEO Considerations

- Semantic HTML
- Meta tags (add in `public/index.html`)
- Accessible navigation
- Fast loading times

## Future Enhancements

- [ ] Add blog section
- [ ] Add pricing page
- [ ] Add testimonials section
- [ ] Add interactive demos
- [ ] Add video tutorials
- [ ] Add API playground
- [ ] Add dark mode toggle

## Support

For issues or questions:
- GitHub: [Your Repo]
- Email: contact@qubit.ai
- Documentation: /documentation

