import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {clearDropdown} from './actions/dropdown_actions';
import {fetchAllLists} from './actions/list_actions';
import {searchTasks} from './actions/task_actions';
import {constructSearchParams} from './util/task_component_util';


document.addEventListener('DOMContentLoaded', () => {

  //setting preloadedState that is loaded into the store
  let store;
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

    store = configureStore(preloadedState);
    store.dispatch(fetchAllLists());
    // store.dispatch(searchTasks(constructSearchParams('all')));
    
  } else {
    store = configureStore();
  }

  //ensure the state's currentUser is used instead of the window's
  delete window.currentUser; 

  window.getState = store.getState;

  //grab the root element from root.html.erb
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});