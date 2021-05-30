import React from 'react';
import {constructSearchParams, parseInput} from '../../util/task_component_util';

const SearchBar = ({match, location, history}) => {

  const submitSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const searchTerm = e.target[0].value;
    history.push(`/list/${searchTerm}`);
  }


  return (
    <form className="searchbar" onSubmit={submitSearch}>
      <input className="search-params" name="search-params" type="text" />
      <i className="fas fa-search"></i>
    </form>
  )
}


export default SearchBar;