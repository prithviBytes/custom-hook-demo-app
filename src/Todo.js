import React, { useContext } from "react";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { TodosContext } from "./contexts/todos.context";

function Todo({ task, completed, id }) {
  const { removeTodo, updateTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggleEditing] = useToggleState(false);
  const handleRemove = () => {
    removeTodo(id);
  };
  const handleEditing = () => {
    toggleEditing();
  };
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          toggleEditForm={toggleEditing}
          task={task}
          id={id}
          updateTodo={updateTodo}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={handleEditing} aria-label="Edit Button">
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleRemove} aria-label="Delete Button">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
