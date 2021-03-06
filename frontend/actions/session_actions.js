import * as SessionAPIUtil from "../util/session_api_util";
// import { receiveSessionErrors} from "./error_actions";
import { receiveErrors} from "./error_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = userId => ({
  type: LOGOUT_CURRENT_USER,
  userId
});

export const login = credentials => dispatch => {
  return SessionAPIUtil.login(credentials)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    )
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(user => dispatch(logoutCurrentUser(user.id)),
      errors => dispatch(receiveErrors(errors))
    ); 
};