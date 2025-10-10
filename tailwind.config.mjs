import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ec6d13",
        "background-light": "#f8f7f6",
        "background-dark": "#221810",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"], // Añadido sans-serif como fallback
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
      },
    },
  },
  plugins: [
    forms(),
  ],
}