import React from 'react';
import {Route} from 'react-router-dom';
import GreetingsContainer from './greetings_container';
import SearchBar from './search_bar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav>
        <GreetingsContainer />
        <Route component={SearchBar}/>
      </nav>

    )
  }
}

export default NavBar;