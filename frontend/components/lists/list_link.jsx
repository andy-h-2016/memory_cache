import React from 'react';
import {NavLink} from 'react-router-dom';

export const CustomListLink = (props) => {

  return (
     <li className="list-link-container" key={list.id}>

          {/* THE ACTUAL LINK */}
          <NavLink 
            className="list-link" 
            to={`/list/${list.id}`} 
            activeClassName='selected'>{list.title}</NavLink>

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
  )
}