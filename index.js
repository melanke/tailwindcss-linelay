const _ = require('lodash')

module.exports = function() {
  return ({addUtilities, variants, theme, e}) => {
    const horiz_verti_ut = {
      '.horiz': {
        display: 'flex',
        'flex-direction': 'row',
        '& > *': {
          'flex-shrink': 0,
        },
      },
      '.verti': {
        display: 'flex',
        'flex-direction': 'column',
        '& > *': {
          'flex-shrink': 0,
        },
      },
    }

    const weight = theme('weight')

    const weights_ut = _.map(weight, ([number], name) => ({
      [`.weight-${e(name)}`]: {
        'flex-grow': number,
        'flex-shrink': 'unset',
        'flex-basis': 0,
      },
    }))

    addUtilities(horiz_verti_ut, variants())
    addUtilities(weights_ut, variants())
  }
}