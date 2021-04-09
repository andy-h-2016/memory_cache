import * as SessionAPIUtil from "../util/session_api_util";
import {receiveCurrentUser} from './session_actions';
// import {receiveSessionErrors} from './error_actions'
import {receiveErrors} from './error_actions'

export const signup = credentials => dispatch => {
  return SessionAPIUtil.signup(credentials)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    );
};
