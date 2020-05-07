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
      <HorizontalFlex>
        <Button>Primary</Button>
        <Button Background={Theme.secondary}>Secondary</Button>
        <Button Background={Theme.warning}>Warning</Button>
        <Button Background={Theme.danger}>Danger</Button>
        <Button as='a' href='/' Background={Theme.cautious} Color='black'>
          Link
        </Button>
      </HorizontalFlex>
      <GlobalStyle />
    </Wrapper>
  )
}

export default App
