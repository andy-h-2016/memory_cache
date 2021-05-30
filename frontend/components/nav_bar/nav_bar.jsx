import React from 'react';
import {Route} from 'react-router-dom';
import SearchBar from './search_bar';

const NavBar = ({currentUser, logout}) => {

  return (
  <div className="nav">
    <Route component={SearchBar}/>
    <button id="logout-button" className="modal-button cancel-button" onClick={logout}>Log Out</button>
  </div>
  )
}

export default NavBar;