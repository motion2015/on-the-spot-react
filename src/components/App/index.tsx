import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { ToDoInput } from 'components/ToDoInput';
import { ShowInputButton } from 'components/ShowInputButton/inex';

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
  const [showTodoInput, setShowTodoInput] = useState(false);
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
    setShowTodoInput(false);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />

      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
      {showTodoInput && <ToDoInput onAdd={onAdd} />}
    </Container>
  );
}

export default App;
