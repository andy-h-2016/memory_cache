import {combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ListErrorsReducer from './list_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  list: ListErrorsReducer
});