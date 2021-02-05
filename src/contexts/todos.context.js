import React, { createContext, useReducer } from "react";
import useTodoState from "../useTodoState";
import todoReducer from "../reducers/todo.reducer";

const defaultTodos = [
  { id: 2121, task: "make coffee", completed: false },
  { id: 646, task: "Cook Pasta", completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
