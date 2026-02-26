import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/BasicButton';
import { Title } from 'components/Title';
import { ToDoInput } from 'components/ToDoInput';
import { log } from 'node:console';
import { logDOM } from '@testing-library/dom';

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDo, setTodo] = useState('');
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '12시 전에 자기',
    '06: 35분에 일어나기',
  ]);

  const onDelete = (toDo: string) => {
    console.log(toDo);

    setToDoList(toDoList.filter((item) => item !== toDo));
  };

  const onAdd = (toDo: string) => {
    if (toDo === '') return;
    setToDoList([...toDoList, toDo]);
    setTodo('');
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <ToDoInput onAdd={onAdd} />
    </Container>
  );
}

export default App;
