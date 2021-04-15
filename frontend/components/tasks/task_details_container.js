import {connect} from 'react-redux';
import TaskDetails from './task_details';
import {searchTasks, updateTask, deleteTask} from '../../actions/task_actions';

const mapSTP = (state, ownProps)  => {
  const taskProps = state.entities.tasks ? state.entities.tasks[ownProps.match.params.taskId] : '';
  let listTitle;
  let task;
  
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
  // console.log('ownProps', ownProps)
  // console.log('taskProps', taskProps)
  // console.log('task', task)
  // console.log('listsByTitle', listsByTitle)
  
  return ({
    task,
    listsByTitle
  });
}

const mapDTP = dispatch => ({
  searchTasks: searchParams => dispatch(searchTasks(searchParams)),
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: task => dispatch(deleteTask(task))
});


export default connect(mapSTP, mapDTP)(TaskDetails);