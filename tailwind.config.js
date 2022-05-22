/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
      "index.html"
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '980px',
      'lg': '1024px',
    },
    extend: {
      spacing: {
        18: '4.5rem'
      },
      backgroundColor: {
        header: '#373C3F',
        burger: '#202529'
      }
    },
  },
  plugins: [],
}
