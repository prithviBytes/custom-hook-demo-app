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
import { DispatchContext } from "./contexts/todos.context";

function Todo({ task, completed, id }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleEditing] = useToggleState(false);
  const handleRemove = () => {
    dispatch({ type: "REMOVE", id });
  };
  const handleEditing = () => {
    toggleEditing();
  };
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm toggleEditForm={toggleEditing} task={task} id={id} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id })}
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
