module.exports = {
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
        full: '100%'
      },
      boxShadow: {
        shade: '0 3px 10px rgba(0,0,0,.03), 0 1px 3px rgba(0,0,0,.02)'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [
    // Some useful comment
  ]
}
