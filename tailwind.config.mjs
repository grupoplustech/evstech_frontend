/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        evs: {
          navy: '#0B132B',
          dark: '#1C2541',
          slate: '#3A506B',
          cyan: '#00A8E8',
          accent: '#007EA7',
          light: '#F8FAFC',
          lenovo: '#E2231A',
        },
      },
    },
  },
  plugins: [],
};
