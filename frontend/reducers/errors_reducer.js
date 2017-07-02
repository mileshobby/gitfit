import { RECEIVE_ERRORS } from '../actions/error_actions';

const noErrors = [];

const errorsReducer = (state = noErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors || [];
    default:
      return state;
  }
};

export default errorsReducer;
