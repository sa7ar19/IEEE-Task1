/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "pink" : 'hsl(322, 100%, 66%)',
      "very-pale-cyan" : 'hsl(193, 100%, 96%)',
      "very-dark-cyan" : "hsl(192, 100%, 9%)",
      "grayish-blue": 'hsl(208, 11%, 55%)'
    },
    extend: {
      backgroundImage: {
        'bg-hero-desktop': "url('/src/assets/bg-hero-desktop.svg')",
        'bg-hero-mobile' : "url('/src/assets/bg-hero-mobile.svg')"
      },
      fontFamily: {
        heading: ['Poppins', 'sans'],
        body: ['Open sans', 'sans']
      },
    },
  },
  plugins: [],
}

