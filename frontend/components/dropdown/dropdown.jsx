import React from 'react';


<ul className={`dropdown list-actions ${dropdownStatus}`}>
  <li>
    <a onClick={(e) => this.insertChar(e)}>Rename list</a>
  </li>

  <li>
    <a onClick={(e) => this.handleDelete(list, e)}>Delete list</a>
  </li>
</ul>