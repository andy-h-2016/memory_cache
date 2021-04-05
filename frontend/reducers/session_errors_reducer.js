import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Array.from(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return newState.concat(action.errors);
    default:
      return []; 
  };
};

export default SessionErrorsReducer;