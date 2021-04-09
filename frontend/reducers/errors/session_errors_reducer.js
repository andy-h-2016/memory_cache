import {RECEIVE_SESSION_ERRORS} from '../../actions/error_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Array.from(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON
    default:
      return []; 
  };
};

export default SessionErrorsReducer;