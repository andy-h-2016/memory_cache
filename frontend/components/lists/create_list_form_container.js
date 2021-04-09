import {connect} from 'react-redux';
import ListForm from './list_form';
import {createList} from '../../actions/list_actions';
import {closeModal} from '../../actions/modal_actions';

const mapSTP = ({entities, ui}) => ({
  list: {title: ''},
  formHeader: 'Add a list',
  inputLabel: 'Please enter a new list name:',
  submitButtonLabel: 'Save'
})

const mapDTP = dispatch => ({
  submit: list => dispatch(createList(list)),
  closeModal: () => dispatch(closeModal())

})

export default connect(mapSTP, mapDTP)(ListForm)