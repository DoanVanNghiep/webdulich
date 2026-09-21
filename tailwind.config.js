/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040817',
          900: '#081026',
          850: '#0d1838',
          800: '#12224d',
          700: '#1b326e',
          600: '#254494',
        },
        gold: {
          50: '#fcfbf7',
          100: '#f8f4e6',
          200: '#f1e6bf',
          300: '#e7d492',
          400: '#dcbe5f',
          500: '#d4af37', // Champagne / Imperial Gold
          600: '#b68f23',
          700: '#8e6b18',
        },
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#eae2d3',
          300: '#dcceb8',
        },
        ocean: {
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Be Vietnam Pro"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 40px -5px rgba(212, 175, 55, 0.4)',
        'navy-card': '0 20px 40px -15px rgba(4, 8, 23, 0.7)',
      },
      animation: {
        'kenburns': 'kenburns 20s ease infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'hero-content': 'heroContent 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1%, -1%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
        heroContent: {
          '0%': { opacity: '0', transform: 'translateY(18px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
