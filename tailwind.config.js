module.exports = {
  mode: 'jit',
  purge: {
    enabled: false,
    content: ['./templates/**/*.html'],
    options: {
      keyframes: true,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
