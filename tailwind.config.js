/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      
      animation: {
           'float': 'float 6s ease-in-out infinite',
           'glow': 'glow 2s ease-in-out infinite alternate',
           'gradient-shift': 'gradient-shift 8s ease infinite',
           'typing': 'typing 3.5s steps(40, end)',
           'blink': 'blink 1s infinite',
           'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
           'orbit': 'orbit 20s linear infinite',
           'scan': 'scan 3s linear infinite',
           'particle-float': 'particle-float 8s ease-in-out infinite',
      },
       backgroundImage: {
           'grid-pattern': 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
      },
       backgroundSize: {
            'grid': '20px 20px',
      },
    },
  },
  plugins: [],
}

