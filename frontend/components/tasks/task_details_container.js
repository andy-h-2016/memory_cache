import {connect} from 'react-redux';
import TaskDetails from './task_details';
import {searchTasks, updateTask, receiveAllTasks} from '../../actions/task_actions';
import { fetchAllLists } from '../../actions/list_actions';

const mapSTP = (state, ownProps)  => {
  const taskProps = state.entities.tasks ? state.entities.tasks[ownProps.match.params.taskId] : '';
  let listTitle;
  let task;
  // console.log('taskProps', taskProps)
  // console.log('state', state)
  if (taskProps) {
    if (taskProps.listId && state.entities.lists[taskProps.listId]) {
      listTitle = state.entities.lists[taskProps.listId].title;
    } else {
      listTitle = 'Inbox';
    }

    task = Object.assign({}, taskProps, {listTitle})

  } else {
    task = {};
  }

  let listsByTitle = {};
  Object.values(state.entities.lists).forEach(list => listsByTitle[list.title] = list.id);

  return ({
    task,
    listsByTitle
  });
}

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams)),
  updateTask: task => dispatch(updateTask(task)),
  fetchAllLists: () => dispatch(fetchAllLists())
});


export default connect(mapSTP, mapDTP)(TaskDetails);