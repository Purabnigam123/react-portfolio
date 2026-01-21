# 📋 Quick Reference Card

## 🚀 Start & Stop Commands

```bash
# Start development server
npm run dev
# → http://localhost:5173

# Stop server
Ctrl + C (in terminal)

# Build for production
npm run build
# → Creates dist/ folder

# Preview production build
npm run preview
# → Test build locally

# Install dependencies (first time only)
npm install
```

---

## 📝 Files to Edit (Customization)

### Update Your Information

**File**: `src/utils/constants.ts`

```typescript
SKILLS array      → Your skills & levels
PROJECTS array    → Your portfolio projects
SOCIAL_LINKS      → Your social profiles
NAVIGATION        → Menu items (usually don't change)
```

### Update Text Content

**File**: `src/components/Hero.tsx`

- Change "Creative Developer" to your title
- Update intro text

**File**: `src/components/About.tsx`

- Update about me paragraph
- Change image URL

**File**: `src/components/Contact.tsx`

- Email address
- Phone number
- Location

### Customize Design

**File**: `tailwind.config.js`

```javascript
colors.accent-cyan      → #00d4ff (main accent)
colors.accent-purple    → #a78bfa (secondary)
colors.accent-blue      → #3b82f6 (tertiary)
colors.dark-bg          → #0a0e27 (background)
colors.dark-card        → #151a3a (cards)
```

---

## 🎯 Component Files (View Only)

| Component  | File           | What It Does             |
| ---------- | -------------- | ------------------------ |
| Navigation | `Navbar.tsx`   | Menu bar with animations |
| Landing    | `Hero.tsx`     | Main landing section     |
| Biography  | `About.tsx`    | About me section         |
| Skills     | `Skills.tsx`   | Tech skills showcase     |
| Portfolio  | `Projects.tsx` | Project portfolio        |
| Form       | `Contact.tsx`  | Contact form             |
| Bottom     | `Footer.tsx`   | Footer with links        |

---

## 🔧 Configuration Files

| File                 | Purpose        | Edit For           |
| -------------------- | -------------- | ------------------ |
| `tailwind.config.js` | Design system  | Colors, animations |
| `postcss.config.js`  | CSS processing | Usually don't edit |
| `vite.config.ts`     | Build settings | Usually don't edit |
| `tsconfig.json`      | TypeScript     | Usually don't edit |
| `package.json`       | Dependencies   | Usually don't edit |

---

## 🎨 Useful Tailwind Classes

### Colors

```
text-accent-cyan       → Cyan text
text-accent-purple     → Purple text
bg-dark-bg             → Dark background
bg-dark-card           → Card background
border-dark-border     → Border color
```

### Effects

```
glass-effect           → Glassmorphism effect
gradient-text          → Gradient text color
card-hover             → Hover animation
```

### Responsive

```
md:                    → Tablet size (768px+)
lg:                    → Desktop size (1024px+)
sm:                    → Small devices (480px+)
```

---

## 📱 Responsive Breakpoints

| Device  | Width  | Tailwind  | Used For  |
| ------- | ------ | --------- | --------- |
| Mobile  | 320px  | (default) | Phones    |
| Tablet  | 768px  | md:       | Tablets   |
| Desktop | 1024px | lg:       | Computers |

---

## 🎬 Common Animation Properties

```typescript
// Standard fade & slide
hidden: { opacity: 0, y: 20 }
visible: { opacity: 1, y: 0 }

// Spring animation
transition: { type: 'spring', stiffness: 100 }

// Timed animation
transition: { duration: 0.8 }

// Staggered children
staggerChildren: 0.2
```

---

## 🚀 Deployment URLs

After building, deploy `dist/` folder to:

| Platform     | How                 | Difficulty  |
| ------------ | ------------------- | ----------- |
| Vercel       | `vercel` command    | ⭐ Easy     |
| Netlify      | Drop `dist/` folder | ⭐ Easy     |
| GitHub Pages | Push to gh-pages    | ⭐⭐ Medium |
| AWS S3       | Upload to S3        | ⭐⭐⭐ Hard |

---

## 🐛 Troubleshooting

### Portfolio not loading?

```bash
# Make sure dev server is running
npm run dev
# Check: http://localhost:5173
```

### Styles not working?

```bash
# Rebuild
npm run build
# Or restart dev server
# Ctrl+C then npm run dev
```

### Build fails?

```bash
# Clear and reinstall
rm -r node_modules
npm install
npm run build
```

### Changes not showing?

```bash
# Hard refresh browser
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

---

## 📊 Key Statistics

| Metric      | Value                    |
| ----------- | ------------------------ |
| Components  | 7                        |
| Build Time  | ~3-4 seconds             |
| CSS Size    | 28 kB (gzipped: 5 kB)    |
| JS Size     | 341 kB (gzipped: 107 kB) |
| TypeScript  | 100%                     |
| Responsive  | Yes                      |
| Mobile Menu | Yes                      |
| Animations  | 10+                      |

---

## 📚 Learning Resources

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **Vite**: https://vitejs.dev

---

## ⌨️ Keyboard Shortcuts

### Terminal

```
Ctrl+C     → Stop dev server
Ctrl+L     → Clear terminal
↑/↓        → Previous/next command
Tab        → Autocomplete
```

### Browser (on localhost:5173)

```
F12        → Open DevTools
Ctrl+R     → Refresh page
Ctrl+Shift+R → Hard refresh
F5         → Refresh
```

---

## 🎯 Before Deploying

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check on mobile device
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check all images load
- [ ] Test on different browsers
- [ ] Update all personal info

---

## 💾 Backup Recommendations

```bash
# Backup your project
# Copy entire folder to safe location

# Version control (recommended)
git init
git add .
git commit -m "Initial commit"
git push to GitHub/GitLab
```

---

## 🎓 Best Practices

✅ Keep code organized
✅ Use meaningful names
✅ Comment complex logic
✅ Test before deploy
✅ Regular backups
✅ Update regularly
✅ Monitor analytics
✅ Get feedback

---

## 📞 Quick Help Links

| Issue             | Solution                                         |
| ----------------- | ------------------------------------------------ |
| Port 5173 in use  | Use different port: `npm run dev -- --port 3000` |
| Module not found  | Run `npm install`                                |
| TypeScript errors | Check file names and imports                     |
| CSS not loading   | Hard refresh: `Ctrl+Shift+R`                     |
| Build slow        | Close other apps, clear node_modules             |

---

## 🎉 You're Ready!

Everything you need is set up and working.

**Current Status:**
✅ Dev server running at http://localhost:5173
✅ All components built and animated
✅ Fully responsive design
✅ Production build ready
✅ Documentation complete

**Now:**

1. Customize your content
2. Test thoroughly
3. Deploy with confidence
4. Share your portfolio!

---

_Quick Reference v1.0 - Keep this handy!_ 📌
