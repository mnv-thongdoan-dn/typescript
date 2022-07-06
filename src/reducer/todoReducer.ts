import { TodoTypes, TodoAction } from '../todoTypes/todo.type';

export const todoReducer = (state: TodoTypes, action: TodoAction) => {
  switch (action.type) {
    case "CREATE":
      return state;
    case "EDIT":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
}
