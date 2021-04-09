import {combineReducers} from 'redux';
import DropdownReducer from './dropdown_reducer';
import ModalReducer from './modal_reducer';

const uiReducer = combineReducers({
  dropdown: DropdownReducer,
  modal: ModalReducer
});

export default uiReducer;