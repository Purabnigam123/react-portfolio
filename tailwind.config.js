/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f1419',
        'dark-card': '#1a2540',
        'dark-border': '#2d3e5f',
        'accent-cyan': '#3F5E96',
        'accent-purple': '#141E30',
        'accent-blue': '#3F5E96',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'shooting-star': 'shooting-star 3s linear infinite',
        'shooting-star-2': 'shooting-star-2 4s linear infinite',
        'shooting-star-3': 'shooting-star-3 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(63, 94, 150, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(63, 94, 150, 0.8)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(63, 94, 150, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(63, 94, 150, 0.8)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shooting-star': {
          '0%': { 
            transform: 'translateX(-100vw) translateY(100vh) rotate(45deg)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100vw) translateY(-100vh) rotate(45deg)',
            opacity: '0'
          },
        },
        'shooting-star-2': {
          '0%': { 
            transform: 'translateX(-100vw) translateY(50vh) rotate(45deg)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100vw) translateY(-50vh) rotate(45deg)',
            opacity: '0'
          },
        },
        'shooting-star-3': {
          '0%': { 
            transform: 'translateX(-100vw) translateY(70vh) rotate(45deg)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100vw) translateY(-70vh) rotate(45deg)',
            opacity: '0'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #141E30 0%, #3F5E96 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(20, 30, 48, 0.4) 0%, rgba(63, 94, 150, 0.2) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
