import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          label="Add new Task"
          fullWidth
          onChange={handleChange}
          value={value}
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
