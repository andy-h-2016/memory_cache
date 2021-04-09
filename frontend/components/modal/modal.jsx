import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import RenameListFormContainer from '../lists/rename_list_form_container';
import CreateListFormContainer from '../lists/create_list_form_container';

function Modal({modalType, props, closeModal}) {
  if (!modalType) {
    return null;
  }
  let component;
  switch (modalType) {
    case 'renameListForm':
      component = <RenameListFormContainer /> ;
      break;
    case 'createListForm':
      component = <CreateListFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child">
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modalType: state.ui.modal.modalType,
    props: state.ui.modal.props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);