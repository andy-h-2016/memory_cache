import {ACTIVATE_DROPDOWN, CLEAR_DROPDOWN} from '../../actions/dropdown_actions';

const DropdownReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case ACTIVATE_DROPDOWN:
      return action.dropdown;
    case CLEAR_DROPDOWN:
      return null;
    default: 
      return state;
  };
};

export default DropdownReducer;