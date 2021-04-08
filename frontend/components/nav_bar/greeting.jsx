import React from 'react';

const Greeting = (props) => {
  const {currentUser, logout} = props;

  const handleLogout = () => logout();

    return (
      <div className="greeting">
        <span>{`Welcome ${currentUser.username}!`} </span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
}

export default Greeting;