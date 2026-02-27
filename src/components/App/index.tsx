import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const InputContainer = styled.div``;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '12시 전에 자기',
    '06: 35분에 일어나기',
  ]);

  const onDelete = (todoToDelete: string) => {
    console.log(todoToDelete);

    setToDoList(toDoList.filter((item) => item !== todoToDelete));
  };

  const onAdd = (newToDo: string) => {
    if (newToDo === '') return;
    setToDoList([...toDoList, newToDo]);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <InputContainer onAdd={onAdd} />
    </Container>
  );
}

export default App;
