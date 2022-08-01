import { generateWatcher } from "./generete";
import services from "../service";
import { TODO } from "../actionTypes";

export const getToDoData = generateWatcher({
  actionType: TODO.GET_TO_DO,
  service: services.todoList.getTodo,
});

export const getToDoId = generateWatcher({
  actionType: TODO.GET_TO_DO_ID,
  service: services.todoList.getTodoId,
});

export const createTodo = generateWatcher({
  actionType: TODO.POST_TO_DO,
  service: services.todoList.createId,
});

export const changeTodo = generateWatcher({
  actionType: TODO.PUTCH_TO_DO,
  service: services.todoList.changeId,
});

export const deleteId = generateWatcher({
  actionType: TODO.DELETE_TO_DO,
  service: services.todoList.deleteId,
});
