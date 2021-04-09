import React from 'react';
import {ProtectedRoute} from '../util/route_util';

import NavBar from './nav_bar/nav_bar';
import ListSidebarContainer from './lists/list_sidebar_container';
import TaskIndexContainer from './tasks/task_index_container';
import Modal from './modal/modal';

const App = (props) => (
  <div className="app" onClick={props.clearDropdown}>
    <Modal />
    <NavBar />
    <ListSidebarContainer/>
    <ProtectedRoute path="/list/:listId" component={TaskIndexContainer}/>
  </div>
);

export default App;