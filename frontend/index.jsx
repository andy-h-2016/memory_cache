import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './app';


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  let store = configureStore(preloadedState);
  window.getState = store.getState;
  let root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});