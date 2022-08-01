import endpoints from "../endpoints";
import client from "../httpclient";

const todoList = {
  // to do list
  getList: (payload) => client().get(endpoints.getList, payload),
  getTodo: (payload) => client().get(endpoints.todos, payload),
  getTodoId: (payload) => client().get(endpoints.todos, payload),
  deleteId: (payload) =>
    client().delete(`${endpoints.todos}/${payload.id}`, payload),
  createId: (payload) => client().post(endpoints.todos, payload),
  changeId: (payload) =>
    client().patch(`${endpoints.todos}/${payload.id}`, payload),
};

export default todoList;
