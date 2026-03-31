/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'chinese-red': '#990011',
        'chinese-gold': '#FFB800',
        'chinese-dark': '#2F3C7E',
      },
      fontFamily: {
        'heading': ['Arial Black', 'sans-serif'],
        'body': ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
