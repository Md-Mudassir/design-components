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
  Card,
  Form,
  Input,
  SocialBtn,
  Thumbnail,
  SubTitle
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
      <SubTitle>Social Buttons</SubTitle>
      <SocialBtn>
        <img
          src='https://image.flaticon.com/icons/svg/2702/2702602.svg'
          alt='google'
        />
      </SocialBtn>
      <SocialBtn Width='130px'>
        <img
          src='https://www.flaticon.com/premium-icon/icons/svg/2392/2392487.svg'
          alt='insta'
        />
      </SocialBtn>
      <SubTitle>Card, Form, Thumbnail Components</SubTitle>
      <Card>
        <Thumbnail>
          <img
            alt='dp'
            src='https://image.flaticon.com/icons/svg/1177/1177568.svg'
          />
        </Thumbnail>
        <Form>
          <Input type='text' placeholder='Name' name='name' required />
          <Input
            type='number'
            placeholder='Mobile Number'
            name='phone'
            maxLength='10'
            InputMode='tel'
            required
          />
          <Input type='email' placeholder='Email' name='email' required />
          <Button type='submit'>Update</Button>
        </Form>
      </Card>
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

`<Button>Exampe</Button>`

Buttons: primary, secondary, warning, cautious, danger

| Prop       | Type   | Default | Description                                                                                                                                   |
| ---------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Color      | string | white   | `Color='black'`                                                                                                                               |
| Background | string | Primary | to change the color pass any color `Background='red'` or use theme by `import {Theme} from 'design-components'` & `Background={Theme.danger}` |
| as         | string | null    | to make the button a link pass in `as='a' href='/'`                                                                                           |
| Margin     | string | 1rem    | adds margin around the button                                                                                                                 |
| Width      | string | 220px   | make the button smaller or larger `Width='300px'`                                                                                             |

### Card

`<Card></Card>`

| Prop   | Type   | Default     |
| ------ | ------ | ----------- |
| Width  | string | 22rem       |
| Height | string | fit-content |

### Input

`<Input/>`

| Prop  | Type   | Default |
| ----- | ------ | ------- |
| Width | string | 300px   |

### Thumbnail

`<Thumbnail></Thumbnail>`

| Prop   | Type   | Default |
| ------ | ------ | ------- |
| Width  | string | 55px    |
| Radius | string | 50%     |

### Social Button/Icons

`<SocialBtn></SocialBtn>`

| Prop  | Type   | Default |
| ----- | ------ | ------- |
| Width | string | 65px    |

## License

MIT © [Md-Mudassir](https://github.com/Md-Mudassir)
