import styled from '@emotion/styled';
import { TodoItem } from 'components/TodoITem';
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
`;

const TodoList = () => {
  return (
    <Container>
      <TodoItem label="리액트 공부하기" />
      <TodoItem label="12시 전에 자기" />
      <TodoItem label="06: 35분에 일어나기" />
    </Container>
  );
};

export default TodoList;
