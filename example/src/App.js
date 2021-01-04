import React from 'react'

import Clock from '@berserk-code/react-clock'
import '@berserk-code/react-clock/dist/index.css'


const App = () => {
  const color = '#59df7a';
  const dateColor = '#09b8be';
  return <Clock
    color={color}
    dateColor={dateColor}
    locales={['es-ES']}
    optionsLocaleDate={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}
    optionLocaleTime={{ hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }}
  />
}

export default App