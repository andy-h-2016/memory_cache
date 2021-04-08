import React from 'react';
import {NavLink} from 'react-router-dom';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleRename = this.handleRename.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLists();
  }

  handleRename(list, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.clearDropdown();
    this.props.renameList({id: list.id, title:'New title'})
  }

  handleDelete(list, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.clearDropdown();
    this.props.deleteList(list);
  }

  handleDropdown(dropdown, e) {
    e.stopPropagation();
    this.props.activateDropdown(dropdown);
  }
  

  render() {
    
    let listLinks = this.props.lists.map(list => {
      let dropdownStatus = this.props.dropdown === list.id ? "" : "hidden" 

      return (
        
        <li className="list-link" key={list.id}>
          <NavLink to={`/list/${list.id}`}
            activeClassName='selected'>{list.title}</NavLink>

            <i className="far fa-caret-square-down" onClick={(e) => this.handleDropdown(list.id, e)}>
              <ul className={`dropdown list-actions ${dropdownStatus}`}>
                <li>
                  <a onClick={(e) => this.handleRename(list, e)}>Rename list</a>
                </li>

                <li>
                  <a onClick={(e) => this.handleDelete(list, e)}>Delete list</a>
                </li>
              </ul>
            </i>

          

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