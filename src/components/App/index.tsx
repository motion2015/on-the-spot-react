import logo from './logo.svg';
// import "./App.css";
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
const spinAnimation = keyframes`
from {
      transfrom: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spinAnimation} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;
const Title = styled.h1`
  margin-bottom: 32px;
`;

const Button = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

function App() {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    // <div className="App">
    <Container>
      <Header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React{' '}
        </AppLink>
      </Header>
      <Title>Counter App</Title>
      <Contents>
        <Button onClick={sub}>-</Button>
        <Label>{counter}</Label>
        <Button onClick={add}>+</Button>
      </Contents>
    </Container>
    // </div>
  );
}

export default App;
