/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LOCKED PALETTE
        primary: "#0B0A3D",    // Deep Navy (Background)
        surface: "#14135C",    // Lighter Navy (Cards)
        accent: "#E0B84C",     // Muted Gold (Buttons/Highlights)
        "text-main": "#FFFFFF",
        "text-muted": "#C7C9E2",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'], 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}