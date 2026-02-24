import logo from './logo.svg';
// import "./App.css";
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useState } from 'react';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
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

const Title = styled.h1`
  margin-bottom: 32px;
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
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Contents>
    </Container>
    // </div>
  );
}

export default App;
