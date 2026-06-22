/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['DM Sans', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        cerise: {
          50: '#fdf2f5',
          100: '#fce4eb',
          200: '#f9c9d8',
          300: '#f49db8',
          400: '#ec5f8a',
          500: '#de3163',
          600: '#c41d4d',
          700: '#a3163d',
          800: '#881636',
          900: '#741833',
        },
        gold: {
          50: '#fdf8e8',
          100: '#f9efc6',
          200: '#f3de8a',
          300: '#edc84d',
          400: '#e5b520',
          500: '#d49a12',
          600: '#b87b0e',
          700: '#935b0f',
          800: '#7a4b14',
          900: '#663e17',
        },
        ink: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#0a0a0a',
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
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(222, 49, 99, 0.5)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(222, 49, 99, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(222, 49, 99, 0)' },
        },
      },
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
};
