# 🚀 Quick Setup & Customization Guide

## Getting Started in 3 Steps

### Step 1: Install & Run

```bash
cd "react portfolio"
npm install
npm run dev
```

Visit: `http://localhost:5173`

### Step 2: Customize Your Content

Edit these files:

**Personal Information** (`src/utils/constants.ts`):

- Update the SKILLS array with your skills
- Update the PROJECTS array with your projects
- Update SOCIAL_LINKS with your social profiles
- Update NAVIGATION items if needed

**Contact Info** (`src/components/Contact.tsx`):

- Change email address
- Update phone number
- Update location

**Profile Image** (`src/components/About.tsx`):

- Replace the image URL with your own profile picture
- Update the about me text

### Step 3: Build & Deploy

```bash
npm run build
# Upload the dist/ folder to your hosting
```

---

## File Guide

### Core Files to Customize

| File                         | What to Change                 |
| ---------------------------- | ------------------------------ |
| `src/utils/constants.ts`     | Skills, projects, social links |
| `src/components/Hero.tsx`    | Hero section title and text    |
| `src/components/About.tsx`   | About section text and image   |
| `src/components/Contact.tsx` | Contact information            |
| `tailwind.config.js`         | Colors and theme               |

### Component Files (Don't need to edit)

| File                          | Purpose              |
| ----------------------------- | -------------------- |
| `src/components/Navbar.tsx`   | Navigation bar       |
| `src/components/Hero.tsx`     | Hero/landing section |
| `src/components/About.tsx`    | About me section     |
| `src/components/Skills.tsx`   | Skills section       |
| `src/components/Projects.tsx` | Projects showcase    |
| `src/components/Contact.tsx`  | Contact form         |
| `src/components/Footer.tsx`   | Footer               |

---

## Customization Examples

### Example 1: Change Your Name in Hero

**File**: `src/components/Hero.tsx`

```typescript
// Find this line:
<span className="gradient-text block">Creative Developer</span>

// Change to:
<span className="gradient-text block">Your Title Here</span>
```

### Example 2: Update Your Skills

**File**: `src/utils/constants.ts`

```typescript
export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Your Skill", level: 90 }, // Add/edit here
    ],
  },
  // ...
];
```

### Example 3: Add Your Projects

**File**: `src/utils/constants.ts`

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description here",
    image: "https://your-image-url.com/image.jpg",
    tags: ["React", "Node.js"],
    link: "https://project-url.com",
    github: "https://github.com/your-repo",
  },
  // ...
];
```

### Example 4: Change Theme Colors

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      'accent-cyan': '#00d4ff',      // Change this
      'accent-purple': '#a78bfa',    // Change this
      'accent-blue': '#3b82f6',      // Change this
    },
  },
}
```

---

## Common Tasks

### Add Your Profile Image

1. Place your image in `src/assets/`
2. Update the image URL in `src/components/About.tsx`

### Change Contact Information

Edit `src/components/Contact.tsx`:

- Email: Search for `hello@example.com`
- Phone: Search for `+1 (555) 123-4567`
- Location: Search for `San Francisco, CA`

### Update Social Media Links

Edit `src/utils/constants.ts`:

```typescript
export const SOCIAL_LINKS = [
  {
    icon: "github",
    label: "GitHub",
    url: "https://github.com/your-username", // Update this
  },
  // ...
];
```

### Change Color Scheme

All colors defined in `tailwind.config.js`. Update the color codes to match your brand.

---

## Deployment Checklist

- [ ] Updated all personal information
- [ ] Added profile picture
- [ ] Updated projects with correct images
- [ ] Changed social media links
- [ ] Customized color scheme
- [ ] Updated contact information
- [ ] Tested on mobile devices
- [ ] Built with `npm run build`
- [ ] Uploaded `dist/` folder to hosting

---

## Tips & Tricks

1. **Test Locally First**

   ```bash
   npm run dev
   # Open http://localhost:5173
   # Test on mobile using: http://your-ip:5173
   ```

2. **Check Build Size**

   ```bash
   npm run build
   # Check dist/ folder size
   ```

3. **Preview Production Build**

   ```bash
   npm run preview
   # Test the production build locally
   ```

4. **Optimize Images**
   - Use tools like TinyPNG or ImageOptim
   - Aim for images under 100KB each
   - Use WebP format for better compression

5. **Add Google Analytics**
   - Add Google Analytics script to `index.html`
   - Track visitor behavior

---

## Troubleshooting

### Portfolio not showing?

```bash
# Make sure dev server is running
npm run dev
```

### Styles not applying?

```bash
# Rebuild Tailwind CSS
npm run build
```

### Build fails?

```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run build
```

---

## Performance Tips

1. Optimize images before uploading
2. Use SVG for icons instead of PNG
3. Lazy load images with Next.js Image or similar
4. Minimize animations on mobile
5. Test performance with Lighthouse

---

## Getting Help

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React**: https://react.dev
- **Vite**: https://vitejs.dev

---

## Next Features to Consider

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Download resume/CV
- [ ] Project filtering
- [ ] Search functionality

---

**Happy customizing! 🚀**
