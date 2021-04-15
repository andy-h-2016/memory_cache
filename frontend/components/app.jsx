import React from 'react';
import {ProtectedRoute} from '../util/route_util';

import NavBar from './nav_bar/nav_bar';
import ListSidebarContainer from './lists/list_sidebar_container';
import TaskIndexContainer from './tasks/task_index_container';
import TaskDetailsContainer from './tasks/task_details_container';
import Modal from './modal/modal';
import { Switch, Route } from 'react-router';

const App = (props) => (
  <div className="app" onClick={props.clearDropdown}>
    <Modal />
    <NavBar />
    <ListSidebarContainer/>

    <Switch>
      <ProtectedRoute path="/list/:listId/completed" component={TaskIndexContainer}/>
      <ProtectedRoute path="/list/:listId" component={TaskIndexContainer}/>
    </Switch>

    <Switch>
      <ProtectedRoute path="/list/:listId/completed/:taskId" component={TaskDetailsContainer}/>
      <Route path="/list/:listId/completed"></Route> {/* Render nothing on the side */}
      <ProtectedRoute path="/list/:listId/:taskId" component={TaskDetailsContainer}/>
    </Switch>
  </div>
);

export default App;