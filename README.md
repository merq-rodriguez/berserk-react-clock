# @berserk-code/react-clock

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@berserk-code/react-clock.svg)](https://www.npmjs.com/package/@berserk-code/react-clock) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


  <img 
    align="right"
    width="300"
    heigh="300"
    src="https://s2.gifyu.com/images/Screen-Capture_select-area_20210104105105.gif"    
    alt="Screen-Capture_select-area_20210104105105.gif" 
    border="0" 
  />
  <img 
    width="300"
    heigh="300"
    src="https://s2.gifyu.com/images/Screen-Capture_select-area_20210104110638.gif"    
    alt="Screen-Capture_select-area_20210104105105.gif" 
    />


## Install

```bash
npm install --save @berserk-code/react-clock
```

## Usage

```jsx
import React from 'react'
import Clock from '@berserk-code/react-clock'

const App = () => {
  const color = '#59df7a';
  const dateColor = '#09b8be';
  return <Clock
    gradient
    color={color}
    dateColor={dateColor}
    locales={['es-ES']}
    optionsLocaleDate={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}
    optionLocaleTime={{ hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }}
  />
}

export default App
```

## Properties

| Property   | Type                  | Default  | Description                                                                   |
| :--------- | :-------------------- | :------- | :---------------------------------------------------------------------------- |
| `gradient`  | `boolean`            | **false** | Add background gradiant default  |
| `color`     | `string`             | **#59df7a** | Set color of clock canvas                 |
| `dateColor` | `string`             | **#09b8be**    | Set color of date and time  inside the clock             |
| `locales`   | `array`              | **['es-ES']** | Set locale language             |
| `optionsLocaleDate` | `object`     | **required** | Set locale options for `toLocaleDateString` function|
| `optionLocaleTime` | `object`      | **required** | Set locale options for `toLocaleTimeString` function |

## License

MIT © [merq-rodriguez](https://github.com/merq-rodriguez)
