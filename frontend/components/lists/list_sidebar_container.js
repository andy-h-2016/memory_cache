import ListSideBar from './list_sidebar';
import {connect} from 'react-redux';
import {fetchAllLists, createList, renameList, deleteList} from '../../actions/list_actions';
import {activateDropdown, clearDropdown} from '../../actions/dropdown_actions';

const mapSTP = state => ({
  lists: Object.values(state.entities.lists),
  dropdown: state.ui.dropdown
})

const mapDTP = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists()),
  createList: title => dispatch(createList(title)),
  renameList: list => dispatch(renameList(list)),
  deleteList: list => dispatch(deleteList(list)),
  activateDropdown: dropdown => dispatch(activateDropdown(dropdown)),
  clearDropdown: () => dispatch(clearDropdown())
});

export default connect(mapSTP, mapDTP)(ListSideBar);