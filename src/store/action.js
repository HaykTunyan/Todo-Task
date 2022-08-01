import {
  GET_TO_DO,
  GET_TO_DO_ID,
  POST_TO_DO,
  PUTCH_TO_DO,
  DELETE_TO_DO,
} from "./actionTypes";

export const GetTodo = { type: GET_TO_DO };
export const GetTodoId = { type: GET_TO_DO_ID };
export const PostTodo = (payload) => ({ type: POST_TO_DO, payload });
export const PuchTodo = (payload) => ({ type: PUTCH_TO_DO, payload });
export const DeleteId = (payload) => ({
  type: DELETE_TO_DO,
  payload,
});
