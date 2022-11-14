import React from "react";

interface TodoInputProps {
    handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const TodoInput = ({handleOnSubmit, todo, setTodo}: TodoInputProps) => {
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <input
        type="text"
        placeholder="add todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">add todo</button>
    </form>
  );
};

export default TodoInput;
