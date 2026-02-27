import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { ToDoInput } from 'components/ToDoInput';
import { Button } from 'components/BasicButton';

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;
const ShowInputButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;

function App() {
  const [toDo, setTodo] = useState('');
  const [showTodoInput, setShowTodoInput] = useState(false);
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
    setShowTodoInput(false);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />

      <ShowInputButton>
        <Button
          label={showTodoInput ? '닫기' : '할 일 추가'}
          color={showTodoInput ? undefined : '#304FFE'}
          onClick={() => setShowTodoInput(!showTodoInput)}
        />
      </ShowInputButton>
      {showTodoInput && <ToDoInput onAdd={onAdd} />}
    </Container>
  );
}

export default App;
