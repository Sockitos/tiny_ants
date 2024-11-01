/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'white': '#ffffffff',
      'black': '#000000ff',
      'melon': '#ffadadff',
      'sunset': '#ffd6a5ff',
      'cream': '#fdffb6ff',
      'tea-green': '#caffbfff',
      'electric-blue': '#9bf6ffff',
      'jordy-blue': '#a0c4ffff',
      'periwinkle': '#bdb2ffff',
      'mauve': '#ffc6ffff',
      'baby-powder': '#fffffcff'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
      },
      screens: {
        DEFAULT: '96rem',
      }
    },
    fontFamily: {
      sans: ['Baloo\\ 2', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
