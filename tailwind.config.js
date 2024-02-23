/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#FF6584', // Light pinkish-red for the primary color
          secondary: '#ff93a8', // Light peach for the secondary color
          background: '#F9F5F5', // Light beige for the background
          text: '#333333', // Dark gray for text
        },
      },
      dark: {
        primary: '#D7385E', // Darker pinkish-red for the primary color
        secondary: '#E07A5F', // Darker peach for the secondary color
        background: '#1E1E1E', // Dark background
        text: '#FFFFFF', // White text for better readability on dark background
      },
    },
  },
  plugins: [],
}
