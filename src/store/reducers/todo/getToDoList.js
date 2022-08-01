import { TODO } from "../../actionTypes";

export const initialState = {
  data: null,
  loaded: false,
  loading: false,
  failed: false,
};

const getToDoList = (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [TODO.GET_TO_DO.LOAD].includes(type):
      return { ...state, loading: true };
    case [TODO.GET_TO_DO.SUCCESS].includes(type):
      return { 
        loaded: true, 
        failed: false, 
        data: response, 
        loaded: false 
      };
    default:
      return state;
  }
};

export default getToDoList;
