import React from 'react'
import { storiesOf } from '@storybook/react'

import ServerButton from '.'

storiesOf('ServerButton', module)
  .add('Default', () => <ServerButton />)
  .add('isHome', () => <ServerButton isHome selected />)
  .add('Mentions', () => <ServerButton mentions={10} />)
  .add('hasNotifications', () => <ServerButton hasNotifications />)
  .add('Selected', () => <ServerButton selected />)
