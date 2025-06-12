// tailwind.config.mjs
import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths to match your project
  ],
  theme: {
    extend: {},
  },
  plugins: [scrollbarHide()],
};
