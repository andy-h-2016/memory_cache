import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {clearDropdown} from './actions/dropdown_actions';
import {fetchAllLists} from './actions/list_actions';


document.addEventListener('DOMContentLoaded', () => {

  //setting preloadedState that is loaded into the store
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        lists: {},
        tasks: {},
      },
      session: {id: window.currentUser.id},
      ui: {
        dropdown: null,
        modal: {
          modalType: null,
          props: null
        }
      }
    };
  }

  //ensure the state's currentUser is used instead of the window's
  delete window.currentUser; 

  let store = configureStore(preloadedState);
  store.dispatch(fetchAllLists());
  window.getState = store.getState;

  //grab the root element from root.html.erb
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});