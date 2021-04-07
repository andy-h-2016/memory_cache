import * as ListAPIUtil from '../util/list_api_util';
import {RECEIVE_LIST_ERRORS, receiveListErrors} from './error_actions';

export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_ALL_LISTS = "RECEIVE_ALL_LISTS";
export const REMOVE_LIST = "REMOVE_LIST";

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveAllLists = lists => ({
  type: RECEIVE_ALL_LISTS,
  lists
});

export const removeList = listId => ({
  type: REMOVE_LIST,
  listId
});

export const fetchAllLists = () => dispatch => {
  return ListAPIUtil.fetchAllLists()
    .then(
      lists => dispatch(receiveAllLists(lists)),
      errors => dispatch(receiveListErrors(errors))
    );
};

export const createList = list => dispatch => {
  return ListAPIUtil.createList(list)
    .then(
      newList => dispatch(receiveList(newList)),
      errors => dispatch(receiveListErrors(errors))
    );
};

export const deleteList = list => dispatch => {
  return ListAPIUtil.deleteList(list.id)
    .then(
      removedList => dispatch(removeList(removedList)),
      errors => dispatch(receiveListErrors(errors))
    );
};