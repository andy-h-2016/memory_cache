import {combineReducers} from 'redux';
import DropdownReducer from './dropdown_reducer';

const uiReducer = combineReducers({
  dropdown: DropdownReducer
});

export default uiReducer;