import React from 'react';
import {NavLink} from 'react-router-dom';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.openRenameListForm = this.openRenameListForm.bind(this);
    this.openCreateListForm = this.openCreateListForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLists();
  }

  openRenameListForm(listId, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.clearDropdown();
    this.props.openModal('renameListForm', listId)
  }

  openCreateListForm(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.openModal('createListForm')
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
    
    //HELPER CONSTRUCTOR FOR USER GENERATED LISTS

    //ITERATE (MAP) THROUGH EACH LIST IN THE PROPS
    const listLinks = this.props.lists.map(list => {
      let dropdownStatus = this.props.dropdown === list.id ? "" : "hidden" 

      //RETURN VALUE FOR THE MAP ITERATOR
      return (
        <li className="list-link-container" key={list.id}>

          {/* THE ACTUAL LINK */}
          <NavLink 
            className="list-link" 
            to={`/list/${list.id}`} 
            activeClassName='selected'><p>{list.title}</p></NavLink>

            {/* DROPDOWN MENU ATTACHED TO EACH LIST LINK */}
            <i className="far fa-caret-square-down list-button down-arrow-button" onClick={(e) => this.handleDropdown(list.id, e)}></i>
            <ul className={`dropdown list-actions ${dropdownStatus}`}>
              <li>
                <a onClick={(e) => this.openRenameListForm(list.id, e)}>Rename list</a>
              </li>

              <li>
                <a onClick={(e) => this.handleDelete(list, e)}>Delete list</a>
              </li>
            </ul>
        </li>
      );
    });

    //ACTUAL RETURN OF RENDER METHOD
    return (
      <div className="lists-sidebar">
        <div className="logo">PLACE LOGO HERE</div>

        <section className="all-lists">
          <ul className="lists-index standard-lists">
            <li className="list-link lists-header" key="lists-header">All Tasks</li>
            <li className="list-link lists-header" key="lists-header">Inbox</li>
            <li className="list-link lists-header" key="lists-header">Today</li>
            <li className="list-link lists-header" key="lists-header">Tomorrow</li>
            <li className="list-link lists-header" key="lists-header">This Week</li>
          </ul>

          <ul className="lists-index user-generated-lists">
            <li className="list-link-container" key="lists-header">
              <a className="list-link lists-header">Lists</a>
              <i className="far fa-plus-square list-button plus-button" onClick={this.openCreateListForm}></i>
              <i className="far fa-caret-square-down list-button down-arrow-button" onClick={(e) => preventDefault()}></i>
            </li>

            {listLinks}

          </ul>
        </section>

      </div>
    );
  };
} 

export default ListSidebar;