import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Array.from(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = newState.concat(action.errors);
      return newState.map(error => (
        `${error.status} ${error.statusText}: ${error.responseText}`
      ));
    default:
      return []; 
  };
};

export default SessionErrorsReducer;