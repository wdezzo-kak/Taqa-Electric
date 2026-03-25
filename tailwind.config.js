/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        // Primary - Industrial Red
        "primary": "hsl(var(--primary) / <alpha-value>)",
        "primary-light": "hsl(var(--primary-light) / <alpha-value>)",
        "primary-dark": "hsl(var(--primary-dark) / <alpha-value>)",
        
        // Tertiary - Golden Accent  
        "tertiary": "hsl(var(--tertiary) / <alpha-value>)",
        "tertiary-light": "hsl(var(--tertiary-light) / <alpha-value>)",
        "tertiary-dark": "hsl(var(--tertiary-dark) / <alpha-value>)",
        
        // Background & Surface
        "background": "hsl(var(--background))",
        "surface": "hsl(var(--surface))",
        "surface-dim": "hsl(var(--surface-dim))",
        "surface-container": "hsl(var(--surface-container))",
        "surface-container-low": "hsl(var(--surface-container-low))",
        "surface-container-lowest": "hsl(var(--surface-container-lowest))",
        "surface-container-high": "hsl(var(--surface-container-high))",
        "surface-container-highest": "hsl(var(--surface-container-highest))",
        
        // On Colors
        "on-background": "hsl(var(--on-background))",
        "on-surface": "hsl(var(--on-surface))",
        "on-surface-variant": "hsl(var(--on-surface-variant))",
        "on-primary": "hsl(var(--on-primary))",
        "on-tertiary": "hsl(var(--on-tertiary))",
        
        // Outline
        "outline": "hsl(var(--outline))",
        "outline-variant": "hsl(var(--outline-variant))",
        
        // Error
        "error": "hsl(var(--error))",
        "on-error": "hsl(var(--on-error))",
      },
      fontFamily: {
        // Distinctive: Syne for bold headlines, Outfit for body, Rajdhani for labels
        "headline": ["Syne", "sans-serif"],
        "body": ["Outfit", "sans-serif"],
        "label": ["Rajdhani", "sans-serif"],
        "rajdhani": ["Rajdhani", "sans-serif"],
        "display": ["Syne", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0rem",
        "lg": "0rem",
        "xl": "0rem",
        "full": "9999px"
      },
      boxShadow: {
        'glow': '0 0 30px hsl(var(--primary) / 0.3)',
        'glow-tertiary': '0 0 30px hsl(var(--tertiary) / 0.3)',
        'glow-lg': '0 0 50px hsl(var(--primary) / 0.4)',
        'glow-intense': '0 0 80px hsl(var(--primary) / 0.5)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        // New distinctive animations
        'shimmer': 'shimmer 2s infinite',
        'tilt': 'tilt 3s ease-in-out infinite',
        'border-dance': 'borderDance 3s linear infinite',
        'scan': 'scan 4s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'blob': 'blob 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
          '50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.5)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // New distinctive animations
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        borderDance: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}
