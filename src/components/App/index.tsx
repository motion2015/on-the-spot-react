import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [todo, setTodo] = useState('');
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '12시 전에 자기',
    '06: 35분에 일어나기',
  ]);

  const onDelete = (todo: string) => {
    console.log(todo);

    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={todo} onChange={setTodo} />
    </Container>
  );
}

export default App;
