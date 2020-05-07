# design-components

> careerlabs designed components

[![NPM](https://img.shields.io/npm/v/design-components.svg)](https://www.npmjs.com/package/design-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### [View Demo](https://md-mudassir.github.io/design-components/)

## Install

```bash
npm install --save design-components
```

## Dependencies

```
npm install --save styled-components
```

## Usage

```jsx
import React from 'react'
import {
  Button,
  Wrapper,
  Header,
  Title,
  GlobalStyle,
  Theme,
  SubTitle,
  HorizontalFlex
} from 'design-components'

const App = () => {
  return (
    <Wrapper>
      <Title>CareerLabs Styled Components</Title>
      <SubTitle>Header Component</SubTitle>
      <Header />
      <SubTitle>Buttons Component</SubTitle>
      <Button>Primary</Button>
      <Button Background={Theme.secondary}>Secondary</Button>
      <Button Background={Theme.warning}>Warning</Button>
      <Button Background={Theme.danger}>Danger</Button>
      <Button as='a' href='/' Background={Theme.cautious} Color='black'>
        Link
      </Button>
      <GlobalStyle />
    </Wrapper>
  )
}

export default App
```

## API

### Global Style (Default)

`* { box-sizing: border-box; padding:0; margin:0; }`

To add in your project `import {GlobalStyle} from 'design-components'` and enclose in inside the main container `<GlobalStyle />`

### Button

![Buttons Color](https://gitlab.com/freelms/design-components/-/raw/baseCSS/example/public/btns.png)

| Prop       | Type   | Default | Description                                                                                                                                   |
| ---------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Color      | string | white   | `Color='black'`                                                                                                                               |
| Background | string | Primary | to change the color pass any color `Background='red'` or use theme by `import {Theme} from 'design-components'` & `Background={Theme.danger}` |
| as         | string | null    | to make the button a link pass in `as='a' href='/'`                                                                                           |
| Margin     | string | 1rem    | adds margin around the button                                                                                                                 |
| Width      | string | 220px   | make the button smaller or larger `Width='300px'`                                                                                             |

## License

MIT © [Md-Mudassir](https://github.com/Md-Mudassir)
