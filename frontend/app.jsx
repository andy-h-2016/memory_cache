import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Link} from 'react-router-dom';
import SignupFormContainer from './components/session/signup_form_container';
import LoginFormContainer from './components/session/login_form_container';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import NavBar from './components/nav_bar/nav_bar';

const App = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <h1>Placeholder: Memory Palace</h1>
      <NavBar />
      {/* <Route path="/" component={NavBar}/>
      <Route path="/" component={ListIndex}/>
      <Route path="/list/:listId" component={TaskIndex}/>
      <Route path="/list/:listId/:taskId" component={TaskDetails}/> */}
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
    </HashRouter>
  </Provider>
);

export default App;