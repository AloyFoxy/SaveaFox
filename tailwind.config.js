module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    './public/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'desktop-lg': '1536px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {
      backgroundImage: {
        'heroImg-mobile': "url('../assets/img/header_mobile.webp')",
        'heroImg': "url('../assets/img/header_web.webp')",
      },
      dropShadow: {
        'btnDark': '1px 16px 36px 1px rgba(248,158,11,0.09)'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        // 'fox-500': '#f59e0b',
        // 'fox-400': '#fbbf24',
        'silver': '#e2e8f0',
        'darkcolor': '#0F1214',
        'darkcolor-light': '#2d3031',
        'foxColor': '#1d2021'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-hamburgers'),
  ],
}


/*
  npx tailwindcss -i ./styles.css -o ./public/css/styles.css --watch
  npx tailwindcss -o ./public/css/styles.css --minify
*/