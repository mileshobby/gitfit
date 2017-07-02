import { RECEIVE_CURRENT_USER} from '../actions/session_actions';

const nullUser = {username: "", password: ""};

const usersReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default usersReducer;
