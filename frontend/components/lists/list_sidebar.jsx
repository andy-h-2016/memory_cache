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

  handleRename(listId, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.clearDropdown();
    this.props.openModal('renameListForm', listId)
  }

  handleDelete(list, e) { 
    e.preventDefault();
    e.stopPropagation();
    this.props.clearDropdown();
    this.props.deleteList(list);
  }

  handleDropdown(dropdown, e) {
    e.stopPropagation();

    if (this.props.dropdown === dropdown) {
      //if dropdown is already open, close it.
      this.props.clearDropdown();
    } else {
      //after the below operation, this.props.dropdown will = dropdown
      this.props.activateDropdown(dropdown);
    }
  }
  

  render() {
    
    let listLinks = this.props.lists.map(list => {
      let dropdownStatus = this.props.dropdown === list.id ? "" : "hidden" 

      return (
        <li className="list-link-container" key={list.id}>
          <NavLink className="list-link" to={`/list/${list.id}`}
            activeClassName='selected'>{list.title}</NavLink>

            <i className="far fa-caret-square-down" onClick={(e) => this.handleDropdown(list.id, e)}></i>
            <ul className={`dropdown list-actions ${dropdownStatus}`}>
              <li>
                <a onClick={(e) => this.handleRename(list.id, e)}>Rename list</a>
              </li>

              <li>
                <a onClick={(e) => this.handleDelete(list, e)}>Delete list</a>
              </li>
            </ul>
        </li>
      );
    });

    return (
      <div className="lists-sidebar">
        <div className="logo">PLACE LOGO HERE</div>

        <section className="all-lists">
          <ul className="lists-index standard-lists">
            <li className="list-link-container lists-header" key="list-header">All Tasks</li>
          </ul>

          <ul className="lists-index user-generated-lists">
            <li className="list-link-container lists-header" key="list-header">Lists</li>
            {listLinks}
          </ul>
        </section>

      </div>
    );
  };
} 

export default ListSidebar;