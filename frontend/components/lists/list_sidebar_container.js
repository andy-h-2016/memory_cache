import ListSideBar from './list_sidebar';
import {connect} from 'react-redux';
import {fetchAllLists, deleteList} from '../../actions/list_actions';
import {activateDropdown, clearDropdown} from '../../actions/dropdown_actions';
import {openModal} from '../../actions/modal_actions';


const mapSTP = state => ({
  lists: Object.values(state.entities.lists),
  dropdown: state.ui.dropdown
})

const mapDTP = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists()),
  deleteList: list => dispatch(deleteList(list)),
  activateDropdown: dropdown => dispatch(activateDropdown(dropdown)),
  clearDropdown: () => dispatch(clearDropdown()),
  openModal: (modalType, formId) => dispatch(openModal(modalType, formId))
});

export default connect(mapSTP, mapDTP)(ListSideBar);