import { ShowInputButton } from 'components/ShowInputButton/inex';
import { ToDoInput } from 'components/ToDoInput';
import { useState } from 'react';

interface Props {
  readonly onAdd: (todo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onAddTodo = (todo: string) => {
    onAdd(todo);
    setShowTodoInput(false);
  };
  return (
    <>
      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
      {showTodoInput && <ToDoInput onAdd={onAddTodo} />}
    </>
  );
};
