/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-600': 'var(--color-primary-600)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        bg: 'var(--color-bg)',
        muted: 'var(--color-muted)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)'
      },
      boxShadow: {
        card: '0 6px 18px rgba(2,6,23,0.12)'
      },
      transitionDuration: {
        250: '250ms'
      }
    },
  },

  plugins: [],
};

module.exports = config;
