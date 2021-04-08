import ListSideBar from './list_sidebar';
import {connect} from 'react-redux';
import {fetchAllLists, createList, renameList} from '../../actions/list_actions';
import {activateDropdown} from '../../actions/dropdown_actions';

const mapSTP = state => ({
  lists: Object.values(state.entities.lists),
  dropdown: state.ui.dropdown
})

const mapDTP = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists()),
  createList: title => dispatch(createList(title)),
  renameList: list => dispatch(renameList(list)),
  activateDropdown: dropdown => dispatch(activateDropdown(dropdown))
});

export default connect(mapSTP, mapDTP)(ListSideBar);