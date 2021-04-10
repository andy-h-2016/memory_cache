import {connect} from 'react-redux';
import TaskIndex from './task_index';
import {searchTasks, createTask} from '../../actions/task_actions';

const mapSTP = (state, ownProps) => ({
  tasks: Object.values(state.entities.tasks),
  lists: Object.values(state.entities.lists)
});

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams)),
  createTask: task => dispatch(createTask(task))
});

export default connect(mapSTP, mapDTP)(TaskIndex);