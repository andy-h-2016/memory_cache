import {RECEIVE_LIST, RECEIVE_ALL_LISTS, REMOVE_LIST} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      newState[action.list.id] = action.list;
      return newState;
    case REMOVE_LIST:
      delete newState[action.listId];
      return newState;
    default:
      return state;
  }
}


 
export default listsReducer;