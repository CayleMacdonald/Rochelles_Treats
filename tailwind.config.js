/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Pacifico', 'cursive'],
        display: ['Fredoka', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      colors: {
        sweet: {
          50: '#fff5f8',
          100: '#ffe4ef',
          200: '#ffc9df',
          300: '#ff9ec4',
          400: '#ff5e9d',
          500: '#ec4899',
          600: '#d6267d',
          700: '#b31868',
          800: '#8f1452',
          900: '#5f0b38',
        },
        cherry: {
          400: '#ff5f6d',
          500: '#e63946',
          600: '#c81d3b',
        },
        buttercup: {
          300: '#ffe56b',
          400: '#ffd23f',
          500: '#f5b700',
          600: '#d49900',
        },
        lagoon: {
          300: '#5fe6d7',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        cream: {
          50: '#fffdf7',
          100: '#fff8e8',
          200: '#fff0d4',
          300: '#ffe3ad',
        },
        whatsapp: {
          400: '#25d366',
          500: '#1ebe5d',
          600: '#128c4a',
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-med': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'wiggle': 'wiggle 2.5s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'steam': 'steam 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pop': 'pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'badge-glow': 'badgeGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '20%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-45px) scaleX(1.6)', opacity: '0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        badgeGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 210, 63, 0.7)' },
          '50%': { boxShadow: '0 0 20px 4px rgba(255, 210, 63, 0.6)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
};
