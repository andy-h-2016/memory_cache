import * as SessionAPIUtil from "../util/session_api_util";
import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from './session_actions';

export const signup = credentials => dispatch => {
  return SessionAPIUtil.signup(credentials)
    .then(
      user => dispatch({
        type: RECEIVE_CURRENT_USER,
        user
      }),
      errors => dispatch({
        type: RECEIVE_SESSION_ERRORS,
        errors
      })
    )
}
