import * as APIUtil from '../util/session_util';
import receiveErrors from './error_actions';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


export const receiveCurrentUser = (user) =>({
  type: RECEIVE_CURRENT_USER,
  user
});

export const signIn = user => dispatch => {
  APIUtil.signIn(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)))
}
