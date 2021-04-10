// import {combineReducers} from 'redux';
// import SessionErrorsReducer from './session_errors_reducer';
// import ListErrorsReducer from './list_errors_reducer';

// export default combineReducers({
//   session: SessionErrorsReducer,
//   list: ListErrorsReducer
// });

import {RECEIVE_ERRORS} from '../../actions/error_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Array.from(state);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors.responseJSON || ["500: Internal Server Error"];
    default:
      return []; 
  };
};

export default ErrorsReducer;