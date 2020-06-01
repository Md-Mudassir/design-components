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
  HorizontalFlex,
  EventCard,
  Timings,
  Enroll,
  FooterContainer,
  FooterCopyRight,
  FooterDescription
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
        <Button Background={Theme.cautious} Color='black' Radius='10px 0 10px'>
          Curve
        </Button>
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
      <SubTitle>
        Card, Form, Thumbnail, Responsive EventCard Components
      </SubTitle>
      <HorizontalFlex>
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
        <EventCard>
          <img
            src='https://mernlmsassets.s3.ap-south-1.amazonaws.com/BannerImages/Placed.png'
            alt='h'
          />
          <h1>How to Crack Off Campus Interviews of Tech Giants</h1>
          <Timings>
            <p>
              Starts on: <b>07 May 2020</b>
            </p>
            <p>
              Entry Fee: <b>Free</b>
            </p>
            <p>
              Venue: <b>Online</b>
            </p>
          </Timings>
          <p>
            Webinar on How to Crack Off Campus Interviews of Tech Giants by
            Parikh Jain
          </p>
          <Enroll>
            <p>
              <b>2021</b> are participating
            </p>
            <Button
              Background={Theme.cautious}
              Color='black'
              Radius='10px 0 10px'
              Margin='0'
              Width='40%'
            >
              Enroll Now
            </Button>
          </Enroll>
        </EventCard>
      </HorizontalFlex>
      <FooterContainer>
        <FooterDescription>
          <img
            className='footer-logo'
            src='https://mernlmsassets.s3.ap-south-1.amazonaws.com/img/footerlogo.PNG'
            alt='CareerLabs'
          />
          <div className='footer-paragraph'>
            CareerLabs is the go-to place for all the career needs of students
            and young professionals! We have a proven track record of helping
            students craft their dream career journeys. We offer a wide range of
            preparatory programs for National & International entrance exams.
            Also, we specialize in providing elite Admissions Consulting
            Services for those seeking admissions to Graduate & Business Schools
            both in India and abroad.
          </div>
        </FooterDescription>
      </FooterContainer>
      <FooterCopyRight>Copyright © 2020 CareerLabs</FooterCopyRight>
      <GlobalStyle />
    </Wrapper>
  )
}

export default App
