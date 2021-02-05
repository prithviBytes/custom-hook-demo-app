import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.updatedTask } : todo
      );
    default:
      return state;
  }
};
export default reducer;
// {type:"ADD",task: "wwalk the dog"}
// {type:"REMOVE" id: 22131}
//{type: "TOGGLE" id: 12121}
//{type: "UPDATE" id: 12121 updatedTask}
