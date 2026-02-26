import styled from '@emotion/styled';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/BasicButton';

const Container = styled.div`
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

  const onAdd = () => {
    if (toDo === '') return;
    setToDoList([...toDoList, toDo]);
    setTodo('');
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setTodo} />
      <Button label="추가" color="#304ffe" onClick={onAdd} />
    </Container>
  );
}

export default App;
