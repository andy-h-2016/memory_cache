import {connect} from 'react-redux';
import TaskIndex from './task_index';
import {searchTasks} from '../../actions/task_actions';

const mapSTP = (state, ownProps) => ({
  tasks: Object.values(state.entities.tasks)
});

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams))
});

export default connect(mapSTP, mapDTP)(TaskIndex);