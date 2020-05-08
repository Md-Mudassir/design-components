import React from 'react'
import styles from './styles.module.css'
// eslint-disable-next-line import/no-duplicates
import styled from 'styled-components'
// eslint-disable-next-line import/no-duplicates
import { createGlobalStyle } from 'styled-components'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

/* GLOBAL STYLE */

export const Theme = {
  primary: '#00308F',
  secondary: '#007FFF',
  warning: '#ea6400',
  danger: '#EF0107',
  cautious: '#FFC72C'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }
`

/* CONTAINER */

export const Wrapper = styled.section`
  padding: 1rem 5vw;
  margin: 0 auto;
`

/* HEADER */

export const Header = styled.div`
  min-height: 7vh;
  background: rgb(0, 5, 36);
  background: -o-linear-gradient(
    29deg,
    rgba(0, 5, 36, 1) 1%,
    rgba(0, 61, 255, 1) 96%
  );
  background: linear-gradient(
    61deg,
    rgba(0, 5, 36, 1) 1%,
    rgba(0, 61, 255, 1) 96%
  );

  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.Padding || '0 2rem'};
  align-items: center;
`

/* TITLE & SUBTITLE */

export const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem;
`

export const SubTitle = styled.h2`
  font-size: 1.3rem;
  padding: 1rem;
`

/* BUTTONS */

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.Background || Theme.primary};
  color: ${(props) => props.Color || 'white'};
  outline: 0;
  width: ${(props) => props.Width || '12rem'};
  border: 0;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  margin: ${(props) => props.Margin || '1rem'};
  padding: 0.7rem 1rem;
  border-radius: 26px;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(68, 47, 47, 0.5);

  &:hover {
    filter: contrast(250%);
    box-shadow: 0px 5px 4px rgba(68, 47, 47, 0.5);
    transition: box-shadow 0.2s;
  }
`
export const SocialBtn = styled.div`
  width: ${(props) => props.Width || '65px'};
  box-shadow: 0px 2px 4px rgba(68, 47, 47, 0.5);
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0.7rem;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`

/* LAYOUT */

export const HorizontalFlex = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

/* FORM AND INPUT */

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: ${(props) => props.Width || '300px'};
  border: 0;
  margin: 1rem 0 0 0;
  padding: 15px;
  border-radius: 26px;
  font-size: 1rem;
`

/* CARD */
export const Card = styled.section`
  width: ${(props) => props.Width || '22rem'};
  height: ${(props) => props.height || 'fit-content'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(68, 47, 47, 0.5);
  background: white;
`
export const Thumbnail = styled.section`
  width: ${(props) => props.Width || '120px'};
  box-shadow: 0px 6px 8px rgba(68, 47, 47, 0.5);
  margin: 1rem;
  border-radius: ${(props) => props.Radius || '50%'};

  img {
    display: block;
    width: 100%;
  }
`
