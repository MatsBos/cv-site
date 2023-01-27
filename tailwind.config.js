/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        'primary': { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        'my-red': '#ff626c',
        'my-pink': '#ee5cd0',
        'my-purple': '#5f36ff',
        /* 'my-cyan': '#138099',
        'my-pink': '#c471ed',
        'my-red': '#f64f59', */

      },
    }
  }

}
