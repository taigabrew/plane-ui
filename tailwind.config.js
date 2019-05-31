module.exports = {
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
        full: '100%'
      },
      boxShadow: {
        shade: '0 3px 10px rgba(0,0,0,.03), 0 1px 3px rgba(0,0,0,.02)',
        focus: `0 0 0 3px ${theme => theme('colors.blue.300')}`
      },
      transitionProperty: {
        bg: 'background-color',
        transform: 'transform',
        text: 'color',
        colors: ['color', 'background-color', 'border-color'],
        cheap: ['opacity', 'transform']
      },
      transitionDuration: {
        '325': '325ms'
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [require('tailwindcss-transitions')()]
}
