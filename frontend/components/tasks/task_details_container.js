import {connect} from 'react-redux';
import TaskDetails from './task_details';
import {searchTasks} from '../../actions/task_actions';

const mapSTP = (state, ownProps)  => {
  const task = state.entities.tasks ? state.entities.tasks[ownProps.match.params.taskId] : '';
  const list = task ? state.entities.lists[task.listId] : '';
  return ({
    task,
    list
  });
}

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams))
});


export default connect(mapSTP, mapDTP)(TaskDetails);