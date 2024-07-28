/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      'bg': {
        dark: '#181a1b!important',
        light: '#f5f5f5',
      },
      'bg-alt': {
        dark: '#202225!important',
        light: '#e3e5e8',
      },
      'bg-hover': {
        dark: '#2f3136!important',
        light: '#ebedf0',
      },
      'action': '#3b82f680'
    },
    extend: {},
  },
  plugins: [],
}

