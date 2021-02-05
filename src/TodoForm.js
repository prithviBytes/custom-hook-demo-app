import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import { DispatchContext } from "./contexts/todos.context";

function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
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
