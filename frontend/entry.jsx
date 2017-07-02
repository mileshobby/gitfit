import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState = {currentUser: window.currentUser};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else{
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root />, document.getElementById('main'));
});
