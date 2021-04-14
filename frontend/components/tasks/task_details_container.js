import {connect} from 'react-redux';
import TaskDetails from './task_details';
import {searchTasks, updateTask, receiveAllTasks} from '../../actions/task_actions';
import { receiveAllLists } from '../../actions/list_actions';

const mapSTP = (state, ownProps)  => {
  const taskProps = state.entities.tasks ? state.entities.tasks[ownProps.match.params.taskId] : '';
  let list;
  let task;
  if (taskProps) {
    if (taskProps.listId) {
      list = state.entities.lists[taskProps.listId].title;
    } else {
      list = 'Inbox';
    }

    task = Object.assign({}, taskProps, {list})

  } else {
    task = {};
  }

  return ({
    task
  });
}

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams)),
  updateTask: task => dispatch(updateTask(task)),
  receiveAllTasks: tasks => dispatch(receiveAllTasks(tasks))
});


export default connect(mapSTP, mapDTP)(TaskDetails);