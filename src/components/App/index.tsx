import logo from './logo.svg';
// import "./App.css";
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Component, ErrorInfo, useState } from 'react';
import { Button } from 'components/Button';
import { IScriptSnapshot } from 'typescript';
import { Title } from 'components/Title';
import { Label } from 'components/Label';
import { TodoItem } from 'components/TodoITem';
import TodoList from 'components/TodoList';

const spinAnimation = keyframes`
from {
      transfrom: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
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

// const Title = styled.h1`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

function App() {
  const [counter, setCounter] = useState(0);
  // const sub = () => {
  //   setCounter(counter - 1);
  // };
  // const add = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <Container>
      {/* <Header>
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
      </Contents> */}
      <Title label="할 일 목록" />
      <TodoList />
    </Container>
  );
}

/* =====  클래스 컴포넌트 ======
type Props = Record<string, never>;
interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  private sub = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  };

  private add = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <Container>
        <Title>Counter App</Title>{' '}
        <Contents>
          <Button label="-" onClick={this.sub} /> <Label data={counter} />
          <Button label="+" onClick={this.add} />
        </Contents>
      </Container>
    );
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount>>>');
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    return {
      testData: true,
    };
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: IScriptSnapshot,
  ): void {
    console.log('componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    console.log('shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('nextProps', nextProps);
    return true;
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log('componentDidCatch');
    console.log('error', error);
    console.log('info', info);
  }
  
}

 */

export default App;
