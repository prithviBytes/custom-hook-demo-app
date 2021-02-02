import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
function EditTodoForm(props) {
  const [value, handleChange] = useInputState(props.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateTodo(props.id, value);
    props.toggleEditForm();
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", marginLeft: "1rem" }}>
      <TextField fullWidth value={value} onChange={handleChange} autoFocus />
    </form>
  );
}

export default EditTodoForm;
