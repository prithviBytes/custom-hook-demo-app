import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import { DispatchContext } from "./contexts/todos.context";
function EditTodoForm(props) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange] = useInputState(props.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE", id: props.id, updatedTask: value });
    props.toggleEditForm();
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", marginLeft: "1rem" }}>
      <TextField fullWidth value={value} onChange={handleChange} autoFocus />
    </form>
  );
}

export default EditTodoForm;
