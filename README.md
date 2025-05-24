
# Premium Financial Services Website

A modern, responsive financial services website built with React, TypeScript, and Tailwind CSS. This project replicates a sophisticated VIP banking/investment platform design with premium animations and user experience.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and glass-morphism effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover animations, and micro-interactions
- **Component-Based**: Modular React components for easy customization
- **TypeScript**: Full type safety and better development experience
- **Professional Sections**:
  - Hero landing with animated statistics
  - Services showcase with hover effects
  - Feature highlights with icons
  - Pricing plans with popular highlighting
  - Contact form with validation
  - Professional footer with newsletter signup

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd financial-services-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## 🎨 Customization

### Branding
- Update `src/components/Header.tsx` and `src/components/Footer.tsx` to change logo and brand name
- Modify color scheme in `tailwind.config.ts`
- Replace placeholder images in components with your own assets

### Content
- Edit text content in each component file
- Update pricing plans in `src/components/Pricing.tsx`
- Customize services in `src/components/Services.tsx`
- Modify contact information in `src/components/Contact.tsx`

### Styling
- Tailwind classes can be modified in component files
- Custom animations are defined in `tailwind.config.ts`
- Global styles in `src/index.css`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect the framework and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify or connect your GitHub repository

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── Services.tsx    # Services showcase
│   ├── Features.tsx    # Feature highlights
│   ├── Pricing.tsx     # Pricing plans
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer section
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

## 🎯 Performance Optimizations

- Lazy loading for images
- Optimized animations with CSS transforms
- Minimal bundle size with tree shaking
- Responsive images with appropriate sizes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact [your-email@domain.com](mailto:your-email@domain.com)

---

Built with ❤️ using React + Tailwind CSS
