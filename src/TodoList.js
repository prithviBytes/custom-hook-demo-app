import React, { useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { TodosContext } from "./contexts/todos.context";
function TodoList(props) {
  const todos = useContext(TodosContext);
  if (todos) {
    return (
      <Paper>
        <List>
          {todos.map((todo) => (
            <>
              <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
              />
              <Divider />
            </>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}

export default TodoList;
