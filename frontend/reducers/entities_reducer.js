import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ListsReducer from './lists_reducer';
import TasksReducer from './tasks_reducer';

export default combineReducers({
  users: UsersReducer,
  lists: ListsReducer,
  tasks: TasksReducer
});