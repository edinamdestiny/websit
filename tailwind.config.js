/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D4734',      // Royal Emerald Green — prestigious Gulf green
          foreground: '#FFFFFF',
          dark: '#072C20',         // Dark Forest Green
          light: '#166249',        // Light Emerald Green
          surface: '#F0F7F4',
        },
        secondary: {
          DEFAULT: '#E8F4EE',      // Soft Mint/Sage tint
          foreground: '#0D4734',
        },
        accent: {
          DEFAULT: '#D4AF37',      // Royal Warm Gold
          light: '#E8C96A',        // Bright Gold
          dark: '#9E7B26',         // Deep Bronze Gold
          foreground: '#0D4734',
        },
        teal: {
          DEFAULT: '#1B7A5A',      // Jade / Emerald Accent
          light: '#27A379',
          dark: '#12563F',
        },
        gold: {
          50: '#FBF8EF',
          100: '#F6EFCF',
          200: '#EEDD9E',
          300: '#E5CA6D',
          400: '#DCBA46',
          500: '#D4AF37',          // Main Gold
          600: '#B89425',
          700: '#94741B',
          800: '#755919',
          900: '#5F4717',
        },
        brand: {
          whatsapp: '#25D366',
          whatsappDark: '#1EBE5D',
          whatsappBg: '#092B16',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0D4734',
        },
        muted: {
          DEFAULT: '#F4F8F6',
          foreground: '#4D6D62',
        },
        border: 'rgba(13, 71, 52, 0.12)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Cairo', 'system-ui', 'sans-serif'],
        display: ['Cairo', 'Outfit', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 24px -8px rgba(13, 71, 52, 0.10)',
        'elevated': '0 20px 40px -12px rgba(13, 71, 52, 0.20)',
        'gold': '0 8px 24px -4px rgba(212, 175, 55, 0.40)',
        'green': '0 8px 24px -4px rgba(27, 122, 90, 0.35)',
      }
    },
  },
  plugins: [],
}
