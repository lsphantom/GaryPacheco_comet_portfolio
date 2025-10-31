/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 24px 60px -40px rgba(15, 23, 42, 0.35)',
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#edf2f7',
          700: '#1f2937',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.18em',
      },
    },
  },
  plugins: [],
}

