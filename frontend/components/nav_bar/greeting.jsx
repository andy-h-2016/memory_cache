import React from 'react';

const Greeting = (props) => {
  const {currentUser, logout} = props;

  const handleLogout = () => logout();

    return (
      <div className="greeting">
        <p>{`Welcome ${currentUser.username}!`} </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
}

export default Greeting;