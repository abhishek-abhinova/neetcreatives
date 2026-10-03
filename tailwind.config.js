/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050507',
          900: '#09090D',
          800: '#111118',
          700: '#181822',
          600: '#22222e',
        },
        violet: {
          450: '#7C5CFF',
        },
        electric: '#7C5CFF',
        neon: '#22D3EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'spin-slower': 'spin 22s linear infinite',
        'marquee': 'marquee 32s linear infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'blob': 'blob 18s ease-in-out infinite',
        'shimmer': 'shimmer 2.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '80%, 100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-50px) scale(1.12)' },
          '66%': { transform: 'translate(-30px,30px) scale(0.92)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,92,255,0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.4)',
        card: '0 24px 60px -24px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
};
