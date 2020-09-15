import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
// const styles = require('../src/styles/GlobalStyles')
import theme from './theme'

addParameters({
  options: {
    theme
  }
})

// addDecorator(styles)
addDecorator(withInfo)
