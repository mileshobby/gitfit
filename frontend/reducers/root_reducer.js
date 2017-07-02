import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  currentUser: usersReducer,
  errors: errorsReducer
});

export default rootReducer;
