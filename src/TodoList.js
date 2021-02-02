import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
function TodoList(props) {
  if (props.todos) {
    return (
      <Paper>
        <List>
          {props.todos.map((todo) => (
            <>
              <Todo
                key={todo.id}
                id={todo.id}
                toggleTodo={props.toggleTodo}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
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
