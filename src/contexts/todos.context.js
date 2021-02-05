import React, { createContext } from "react";
import useTodoState from "../useTodoState";

const defaultTodos = [
  { id: 2121, task: "make coffee", completed: false },
  { id: 646, task: "Cook Pasta", completed: false }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toggleTodo, updateTodo } = useTodoState(
    defaultTodos
  );
  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        updateTodo
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
