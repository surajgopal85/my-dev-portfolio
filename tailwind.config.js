// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Example: 'Inter' for body, 'Clash Display' (or similar) for headings
        // You'll need to import these fonts in your main CSS or HTML
        sans: ['Inter', 'sans-serif'], // A good readable sans-serif for body text
        display: ['Clash Display', 'sans-serif'], // Or 'Montserrat', 'Roboto', 'Poppins', 'Open Sans' with specific weights
                                               // Check Google Fonts for similar Apple/Spotify vibes: "Inter", "Plus Jakarta Sans", "Figtree"
      },
      colors: {
        // Define a very subtle, sophisticated dark palette
        'dark-bg': '#0A0A0A', // Almost black
        'dark-surface': '#1A1A1A', // Slightly lighter for cards/sections
        'light-text': '#E0E0E0', // Light grey for primary text
        'subtle-text': '#A0A0A0', // Darker grey for secondary text
        'accent-blue': '#4F46E5', // A subtle, deep blue accent (similar to your previous blue)
        'accent-purple': '#8B5CF6', // A subtle purple accent
      }
    },
  },
  plugins: [],
}