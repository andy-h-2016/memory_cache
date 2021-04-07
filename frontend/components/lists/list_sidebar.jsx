import React from 'react';
import {NavLink} from 'react-router-dom';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllLists();
  }

  render() {
    let listLinks = this.props.lists.map(list => {
      return (
        <li className="list-link" key={list.id}>
          <NavLink to={`/list/${list.id}`}
            activeStyle={{fontWeight: 'bold'}}>{list.title}</NavLink>
        </li>
      );
    });

    return (
      <div className="lists-sidebar">
        <div className="logo">PLACE LOGO HERE</div>
        <ul className="lists-index">
          {listLinks}
        </ul>
      </div>
    );
  };
} 

export default ListSidebar;