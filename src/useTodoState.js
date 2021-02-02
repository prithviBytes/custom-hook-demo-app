import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialValue) => {
  const [todos, setTodos] = useLocalStorageState("hookTodos", initialValue);
  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
  };
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  const toggleTodo = (todoId) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
  };
  const updateTodo = (id, updatedTask) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask } : todo
    );
    setTodos(updatedTodo);
  };
  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo
  };
};
