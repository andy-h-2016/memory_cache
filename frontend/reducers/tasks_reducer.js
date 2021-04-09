import {RECEIVE_TASK, RECEIVE_ALL_TASKS, REMOVE_TASK} from '../actions/task_actions';

const TasksReducer = (state = {}, action) => {
   Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case REMOVE_TASK:
      delete newState[action.taskId];
      return newState;
    default:
      return state;
  }
}


 
export default TasksReducer; 
