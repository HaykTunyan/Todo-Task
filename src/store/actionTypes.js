// Action Types.

const generate = (actionName) => ({
  WATCH: `${actionName}__WATCH`,
  LOAD: `${actionName}__LOAD`,
  FAIL: `${actionName}__FAIL`,
  SUCCESS: `${actionName}__SUCCESS`,
  RESET: `${actionName}__RESET`,
});

export const TODO = {
  GET_TO_DO: generate("GET_TO_DO"),
  GET_TO_DO_ID: generate("GET_TO_FO_ID"),
  DELETE_TO_DO: generate("DELETE_TO_DO"),
  PUTCH_TO_DO: generate("PUTCH_TO_DO"),
  POST_TO_DO: generate("POST_TO_DO"),
};
