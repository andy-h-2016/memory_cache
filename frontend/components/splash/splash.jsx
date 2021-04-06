import React from 'react';
import {Link} from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main className="splash-page">
      
        <nav>
          <p>Memory Palace</p>
          <div className="session-links">
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log in</Link>
          </div>
        </nav>

        <div className='splash-header-container'>
          <h1 className="splash-header">The smart to-do app for busy people.</h1>
        </div>
      </main>
    )
  }
}

export default Splash;