import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

export const login = credentials => dispatch => {
  return SessionAPIUtil.login(credentials)
    .then(user => {
      console.log('ajax output', user)
      dispatch({
          type: RECEIVE_CURRENT_USER,
          user
        })},
        errors => dispatch({
          type: RECEIVE_SESSION_ERRORS,
          errors
        })
      )
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
    .then(
      user => dispatch({
        type: LOGOUT_CURRENT_USER,
        userID: user.id
      }),
      errors => dispatch({
        type: RECEIVE_SESSION_ERRORS,
        errors
      })  
    );
};

export const demoLogin = () => dispatch => {
  return SessionAPIUtil.login({username: 'hagrid', password: 'nevermore'})
}