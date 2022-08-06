/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-elements': 'hsl(209, 23%, 22%)', //(Dark Mode Elements)
        'dark-bg': 'hsl(207, 26%, 17%)', //(Dark Mode Background)
        'light-text': 'hsl(200, 15%, 8%)', //(Light Mode Text)
        'Light-input': 'hsl(0, 0%, 52%)', //(Light Mode Input)
        'light-bg': 'hsl(0, 0%, 95%)', //(Light Mode Background)
        //White : hsl(0, 0%, 100%) //(Dark Mode Text & Light Mode Elements)
      },
    },
  },
  plugins: [],
};
