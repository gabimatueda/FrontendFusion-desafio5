/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'small': '360px',
          'large': '510px',
          'tablet': '720px',
          'laptop': '1024px',  
          'desktop': '1280px',
        },
        colors: {
          'green': '#A5FF96',
          'orange': '#FFD38A',
          'red': '#FFC5A0',
          'blue': '#ABE1FF',
          'lightBlue': '#ADFFE6',
          'gray': '#D6E7FF',
          'commonGray': '#E2E2E2'
        }
      },
    },
    plugins: [],
  }