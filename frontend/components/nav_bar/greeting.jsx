import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  const {currentUser, logout} = props;

  const handleLogout = () => logout();

  if (currentUser) {
    return (
      <div className="greeting">
        <p>{`Welcome ${currentUser.username}!`} </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className="session-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log in</Link>
      </div>
    )
  }
}



export default Greeting;