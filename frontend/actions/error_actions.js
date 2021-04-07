export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";


export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveListErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const clearErrors = () => ({type: CLEAR_ERRORS});