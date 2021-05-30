import React from 'react';
import {Route} from 'react-router-dom';
import SearchBar from './search_bar';

const Greeting = (props) => {
  const {currentUser, logout} = props;

  const handleLogout = () => logout();

    return (
      <div className="greeting">
        <Route component={SearchBar}/>
        <span>{`Welcome ${currentUser.username}!`} </span>
        <button id="logout-button" className="modal-button cancel-button" onClick={handleLogout}>Log Out</button>
      </div>
    )
}

export default Greeting;