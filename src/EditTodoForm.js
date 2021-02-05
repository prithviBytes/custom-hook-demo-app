import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import { TodosContext } from "./contexts/todos.context";
function EditTodoForm(props) {
  const { updateTodo } = useContext(TodosContext);
  const [value, handleChange] = useInputState(props.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(props.id, value);
    props.toggleEditForm();
  };
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", marginLeft: "1rem" }}>
      <TextField fullWidth value={value} onChange={handleChange} autoFocus />
    </form>
  );
}

export default EditTodoForm;
