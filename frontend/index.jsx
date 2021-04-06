import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './app';


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {id: window.currentUser.id}
    };
  }
  let store = configureStore(preloadedState);
  window.getState = store.getState;
  let root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});