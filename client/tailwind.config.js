/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'ambient-pulse': 'ambient-pulse 8s ease-in-out infinite',
      },
      keyframes: {
        'ambient-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.75' },
        },
      },
      colors: {
        dark: {
          DEFAULT: '#0F172A',
          card: '#1E293B',
          accent: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
