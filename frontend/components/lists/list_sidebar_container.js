import ListSideBar from './list_sidebar';
import {connect} from 'react-redux';
import {fetchAllLists} from '../../actions/list_actions';

const mapSTP = state => ({
  lists: Object.values(state.entities.lists)
})

const mapDTP = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists())
});

export default connect(mapSTP, mapDTP)(ListSideBar);