import * as TaskAPIUtil from '../util/task_api_util';
import {receiveErrors} from './error_actions';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";


export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  taskId
});

export const searchTasks = searchParams => dispatch => {
  return TaskAPIUtil.fetchTasks(searchParams)
    .then(
      tasks => dispatch(receiveAllTasks(tasks)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const createTask = task => dispatch => {
  return TaskAPIUtil.createTask(task)
    .then(
      newTask => dispatch(receiveTask(newTask)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const updateTask = task => dispatch => {
  return TaskAPIUtil.updateTask(task)
    .then(
      editedTask => dispatch(receiveTask(editedTask)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const deleteTask = task => dispatch => {
  return TaskAPIUtil.deleteTask(task)
    .then(
      deletedTask => dispatch(removeTask(deletedTask.id)),
      errors => dispatch(receiveErrors(errors))
    );
};