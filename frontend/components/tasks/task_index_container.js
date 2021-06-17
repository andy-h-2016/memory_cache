import {connect} from 'react-redux';
import TaskIndex from './task_index';
import {searchTasks, createTask} from '../../actions/task_actions';
import {activateDropdown, clearDropdown} from '../../actions/dropdown_actions';

const mapSTP = (state, ownProps) => ({
  tasks: Object.values(state.entities.tasks),
  // lists: Object.values(state.entities.lists),
  lists: state.entities.lists,
  dropdown: state.ui.dropdown
});

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams)),
  createTask: task => dispatch(createTask(task)),
  activateDropdown: dropdown => dispatch(activateDropdown(dropdown)),
  clearDropdown: () => dispatch(clearDropdown())
});

export default connect(mapSTP, mapDTP)(TaskIndex);