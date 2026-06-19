/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fdf6f0',
          100: '#f5e6d3',
          200: '#e8c9a8',
          300: '#d4a574',
          400: '#c08a52',
          500: '#a66e3b',
          600: '#8a5a30',
          700: '#6d4626',
          800: '#52351d',
          900: '#382413',
        },
        terracotta: {
          50: '#fdf2f0',
          100: '#fce5e0',
          200: '#f8c8bc',
          300: '#f09e8a',
          400: '#e0745c',
          500: '#c8553d',
          600: '#a84330',
          700: '#873528',
          800: '#6b2a20',
          900: '#4a1d16',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e3ebe3',
          200: '#c5d6c5',
          300: '#9bb89b',
          400: '#729872',
          500: '#547854',
          600: '#426042',
          700: '#354d35',
          800: '#293c29',
          900: '#1e2b1e',
        },
        cream: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f0ebe0',
          300: '#e5ddd0',
          400: '#d4c8b5',
          500: '#b8a88e',
          600: '#9a8a70',
          700: '#7a6e58',
          800: '#5c5342',
          900: '#3e382e',
        },
        whatsapp: {
          400: '#25d366',
          500: '#1ebe5d',
          600: '#128c4a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
};
