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
      <SubTitle>Social Buttons</SubTitle>
      <HorizontalFlex>
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
        <SocialBtn>
          <img
            src='https://image.flaticon.com/icons/svg/145/145802.svg'
            alt='facebook'
          />
        </SocialBtn>
      </HorizontalFlex>
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
