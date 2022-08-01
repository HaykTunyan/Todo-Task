import { TODO } from '../actionTypes';

const todo = {
  getList: (payload) => ({ type: TODO.GET_TO_DO.WATCH, payload }),
  findGetList: (payload) => ({ type: TODO.GET_TO_DO.WATCH, payload }),
  
  getListId: (payload) => ({ type: TODO.GET_TO_DO_ID.WATCH, payload }),
  findGetListId: (payload) => ({ type: TODO.GET_TO_DO_ID.WATCH, payload }),

  deleteId: (payload) => ({ type: TODO.DELETE_TO_DO.WATCH, payload }),
  findDeleteId: (payload) => ({ type: TODO.DELETE_TO_DO.WATCH, payload }),

  createId: (payload) => ({ type: TODO.POST_TO_DO.WATCH, payload }),
  findCreateUser: (payload) => ({ type: TODO.POST_TO_DO.WATCH, payload }),

  changeId: (payload) => ({ type: TODO.PUTCH_TO_DO.WATCH, payload }),
  findChangeUser: (payload) => ({ type: TODO.PUTCH_TO_DO.WATCH, payload }),
};

export default todo;

