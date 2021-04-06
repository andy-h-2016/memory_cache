import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from './util/route_util';

import SignupFormContainer from './components/session/signup_form_container';
import LoginFormContainer from './components/session/login_form_container';
import NavBar from './components/nav_bar/nav_bar';
import ListSidebar from './components/lists/list_sidebar';
import TaskViews from './components/tasks/task_views'
import NotFound from './components/not_found/not_found'
import ErrorsDisplayContainer from './components/errors/errors_display_container';

const App = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={NavBar} />
      <Route path="/" component={ListSidebar} />
      <Route component={ErrorsDisplayContainer}/>

      <Switch>
        <Route path="/list" component={TaskViews} />
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;