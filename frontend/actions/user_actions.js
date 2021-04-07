import * as SessionAPIUtil from "../util/session_api_util";
import {RECEIVE_CURRENT_USER, receiveCurrentUser} from './session_actions';
import {RECEIVE_SESSION_ERRORS, receiveSessionErrors} from './error_actions'

export const signup = credentials => dispatch => {
  return SessionAPIUtil.signup(credentials)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors))
    );
};
