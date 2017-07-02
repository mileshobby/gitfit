import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import {signIn} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    console.log(window.currentUser);
    const preloadedState = {currentUser: window.currentUser};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else{
    store = configureStore();
  }
  window.store = store;
  window.signIn = signIn;
  ReactDOM.render(<Root />, document.getElementById('main'));
});
