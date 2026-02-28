import styled from '@emotion/styled';
import { TodoItem } from 'components/TodoITem';
import React from 'react';
interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
`;

export const TodoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};
