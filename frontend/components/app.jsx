import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBar from './nav_bar/nav_bar';
import ListSidebarContainer from './lists/list_sidebar_container';
import TaskViews from './tasks/task_views'
import NotFound from './not_found/not_found'
import ErrorsDisplayContainer from './errors/errors_display_container';
import Splash from './splash/splash';

const App = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <ProtectedRoute path="/list" component={NavBar} />
      <ProtectedRoute path="/list" component={ListSidebarContainer} />
      <Route component={ErrorsDisplayContainer}/>
      

      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute path="/list/:listId" component={TaskViews} />
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;