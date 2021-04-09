import {connect} from 'react-redux';
import ListForm from './list_form';
import {renameList} from '../../actions/list_actions';
import {closeModal} from '../../actions/modal_actions';


const mapSTP = ({entities, ui}) => ({
  //modal.props == list.id, passed in from click event from ListSidebar
  list: entities.lists[ui.modal.props],
  formHeader: 'Rename List',
  inputLabel: 'List name:',
  submitButtonLabel: 'Save'
})

const mapDTP = dispatch => ({
  submit: list => dispatch(renameList(list)),
  closeModal: () => dispatch(closeModal())

})

export default connect(mapSTP, mapDTP)(ListForm)