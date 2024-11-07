/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': {
        900: '#ffffff',
        800: '#f9f9f9',
        700: '#f4f4f4',
      },
      'nightblue': {
        900: '#001f3a',
        800: '#00294d',
      },
      'petrol': {
        600: '#1e93a7',
        500: '#20a3ba',
      },
      'vibrant-orange': '#ff9900',
      'black': '#12110c',
      'lipa-danger': {
        600: '#FF4444',
        500: '#FF6969',
      },
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      }
    },
    extend: {},
  },
}