# 🎨 Modern Animated Portfolio Website

A stunning, fully-functional personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion animations. This portfolio is designed to showcase your work with smooth animations, modern aesthetics, and a premium feel.

## ✨ Features

### 🎯 Key Components

- **Responsive Navbar** - Smooth navigation with animated underline effects and mobile menu
- **Hero Section** - Eye-catching intro with animated background gradients and CTA buttons
- **About Section** - Compelling biography with profile image, stats, and timeline-style layout
- **Skills Section** - Animated progress bars with categorized tech stack and skill cloud
- **Projects Section** - Beautiful project cards with hover effects and modal preview
- **Contact Section** - Functional contact form with social media links
- **Footer** - Comprehensive footer with quick links and scroll-to-top button

### 🎨 Design Features

- **Dark Theme** - Premium dark mode with custom color palette
- **Glassmorphism** - Modern glass-effect design elements
- **Smooth Animations** - Framer Motion animations on scroll and hover
- **Gradient Effects** - Beautiful gradient text and backgrounds
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Tailwind CSS** - Utility-first CSS framework for rapid development

### ⚡ Technical Highlights

- **React Functional Components** - Modern React with hooks
- **TypeScript** - Full type safety throughout the project
- **Framer Motion** - Professional animations and transitions
- **Vite** - Lightning-fast development and build tool
- **PostCSS** - Advanced CSS processing with Tailwind
- **Component Structure** - Clean, reusable, and scalable architecture

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd "react portfolio"

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # All React components
│   ├── Navbar.tsx       # Navigation with mobile menu
│   ├── Hero.tsx         # Hero section with animations
│   ├── About.tsx        # About me section
│   ├── Skills.tsx       # Skills and tech stack
│   ├── Projects.tsx     # Project cards and modal
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer with links
│   └── index.ts         # Component exports
├── utils/
│   └── constants.ts     # Skills, projects, navigation data
├── assets/              # Images and static files
├── App.tsx              # Main app component
├── App.css              # App styles
├── index.css            # Global styles with Tailwind
└── main.tsx             # Entry point

public/                   # Static assets
tailwind.config.js        # Tailwind CSS configuration
postcss.config.js         # PostCSS configuration
vite.config.ts            # Vite configuration
tsconfig.json             # TypeScript configuration
package.json              # Project dependencies
```

## 🛠️ Customization

### Update Personal Information

Edit `src/utils/constants.ts` to customize:

- Skills and tech stack
- Project portfolio
- Social media links
- Navigation items

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'dark-bg': '#0a0e27',
  'dark-card': '#151a3a',
  'accent-cyan': '#00d4ff',
  'accent-purple': '#a78bfa',
}
```

### Update Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About**: Edit `src/components/About.tsx`
- **Contact**: Update contact links in `src/components/Contact.tsx`
- **Projects**: Modify project data in `src/utils/constants.ts`

## 📦 Dependencies

### Main Dependencies

- **React** (v18+) - UI library
- **React DOM** (v18+) - DOM rendering
- **Framer Motion** - Animation library
- **TypeScript** - Type safety

### Dev Dependencies

- **Vite** - Build tool
- **Tailwind CSS** - Utility CSS framework
- **@tailwindcss/postcss** - Tailwind PostCSS plugin
- **PostCSS** - CSS processing

## 🎨 Design Features

This portfolio combines:

- Modern minimalism with clean layout
- Premium aesthetics with gradients and glassmorphism
- Smooth, purposeful animations
- Dark theme with elegant design
- Full responsive design

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 💡 Tips

1. Update `src/utils/constants.ts` with your actual data
2. Replace image URLs with your own project screenshots
3. Add your real contact information
4. Customize colors to match your brand
5. Test on multiple devices before deploying

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion

Happy coding! 🚀
