import {OPEN_MODAL, CLOSE_MODAL} from '../../actions/modal_actions';

const nullState = {modalType: null, props: null}

const ModalReducer = (state = nullState, {type, modalType, props}) => {
  Object.freeze(state);

  switch(type) {
    case OPEN_MODAL:
      return {modalType, props}
    case CLOSE_MODAL:
      return nullState;
    default:
      return state;
  }
}

export default ModalReducer;