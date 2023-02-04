/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1f6fd',
          '100': '#dfeafa',
          '200': '#c6dbf7',
          '300': '#9ec4f2',
          '400': '#72a5ea',
          '500': '#4f84e2',
          '600': '#3a67d6',
          '700': '#3154c4',
          '800': '#2d45a0',
          '900': '#293d7f',
        },
        'secondary': {
          '50': '#f3f7f8',
          '100': '#e1e9ec',
          '200': '#c6d6db',
          '300': '#9eb9c2',
          '400': '#618796',
          '500': '#537787',
          '600': '#486472',
          '700': '#3f535f',
          '800': '#394751',
          '900': '#333e46',
        },
        'success': {
          '50': '#eefbf6',
          '100': '#d6f5e8',
          '200': '#b4ead6',
          '300': '#7ed7bc',
          '400': '#49be9e',
          '500': '#26a385',
          '600': '#18836c',
          '700': '#136959',
          '800': '#125347',
          '900': '#0f453c',
        },
        'warning': {
          '50': '#fdfced',
          '100': '#f8f4cd',
          '200': '#f0e897',
          '300': '#eadb72',
          '400': '#e2c63d',
          '500': '#daab26',
          '600': '#c0871f',
          '700': '#a0641d',
          '800': '#834f1d',
          '900': '#6c411b',
        },
        'danger': {
          '50': '#fdf3f3',
          '100': '#fce7e9',
          '200': '#f9d2d7',
          '300': '#f3aeb5',
          '400': '#ea7383',
          '500': '#e0536a',
          '600': '#cc3252',
          '700': '#ab2545',
          '800': '#90213f',
          '900': '#7b203b',
        },
        'light': {
          '50': '#faf9fb',
          '100': '#f3f2f5',
          '200': '#e6e4ea',
          '300': '#d8d4de',
          '400': '#beb9c7',
          '500': '#a39cb0',
          '600': '#8c839a',
          '700': '#766d83',
          '800': '#635c6d',
          '900': '#504b58',
        },
        'dark': {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#cfcfd2',
          '300': '#aeaeb2',
          '400': '#85868b',
          '500': '#6a6b70',
          '600': '#5b5b5f',
          '700': '#4d4d51',
          '800': '#444546',
          '900': '#3f3f41',
        },
      }
    },
  },
  plugins: [],
}
