import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

import App from './app';
import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NotFound from './not_found/not_found'
import ErrorsDisplayContainer from './errors/errors_display_container';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      
      <Switch>
        <ProtectedRoute path="/list" component={App} />
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route component={NotFound} />
      </Switch>

      <Route component={ErrorsDisplayContainer}/>

    </HashRouter>
  </Provider>
);

export default Root;