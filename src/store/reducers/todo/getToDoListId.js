import { TODO } from "../../actionTypes";

export const initialState = {
  data: null,
  loaded: false,
  loading: false,
  failed: false,
};

const getToDoListId = (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [TODO.GET_TO_DO_ID.LOAD].includes(type):
      return { ...state, loading: true };
    case [TODO.GET_TO_DO_ID.SUCCESS].includes(type):
      return { 
        loaded: true, 
        failed: false, 
        data: response, 
        loading: false 
      };
    default:
      return state;
  }
};

export default getToDoListId;
