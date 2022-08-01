import { combineReducers } from "redux";
// todo reducers
import getToDoList from "./todo/getToDoList";
import getToDoListId from "./todo/getToDoListId";

const todo = combineReducers({
  getToDoListId: getToDoListId,
  getToDoList: getToDoList,
});

const reducers = combineReducers({
  todo,
});

export default reducers;
