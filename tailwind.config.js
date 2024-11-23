/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1A1A1A', // Slightly lighter for readability
        lightDark: '#252525', // Subtle variation for sections in dark mode
        borderDark: '#333333', // Slightly lighter for contrast in borders
        darkwhite: '#D6D6D6', // Softer white for text in dark mode
        lightdarkwhite: '#A3A3A3', 
        light: '#FDF9F4',
        // #60A561 27AE60 #1C8E3F
        green: '#1C8E3F',
    
        lightBackground: '#FAF4ED', // Secondary light background
        grayBackground: '#EDE7E3', // Subtle gray for lighter areas
        lightText: '#3A3A3A', // Text on light backgrounds
        lightMuted: '#6F6F6F',
        borderLight: '#DDD8D2'
      },
      fontFamily: {
        merriweather: ['Merriweather', 'sans-serif'], // Add your custom font here
      },
      animation: {
        marquee: "marquee 35s linear infinite", // Custom animation added
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },}
    },
  },
  plugins: [],
}

