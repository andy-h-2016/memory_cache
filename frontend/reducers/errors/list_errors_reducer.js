import {RECEIVE_LIST_ERRORS} from '../../actions/error_actions';

const ListErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors.responseJSON
    default:
      return []; 
  };
};

export default ListErrorsReducer;