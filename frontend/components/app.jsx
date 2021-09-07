import React from 'react';
import {ProtectedRoute} from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';
import ListSidebarContainer from './lists/list_sidebar_container';
import TaskIndex from './tasks/task_index/task_index';
import TaskDetailsContainer from './tasks/task_details/task_details_container';
import Modal from './modal/modal';
import { Switch, Route } from 'react-router';

const App = (props) => {
  return (
    <div className="app" onClick={props.clearDropdown}>
      <Modal />
      <NavBarContainer />
      <ListSidebarContainer/>

      <Switch>
        <ProtectedRoute path="/list/:listId/completed" component={TaskIndex}/>
        <ProtectedRoute path="/list/:listId" component={TaskIndex}/>
      </Switch>

      <Switch>
        <ProtectedRoute path="/list/:listId/completed/:taskId" component={TaskDetailsContainer}/>
        <Route path="/list/:listId/completed"></Route> {/* Render nothing on the side */}
        <ProtectedRoute path="/list/:listId/:taskId" component={TaskDetailsContainer}/>
      </Switch>
    </div>
  )
};

export default App;