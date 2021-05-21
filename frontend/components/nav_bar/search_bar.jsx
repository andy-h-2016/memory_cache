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
    <form onSubmit={submitSearch}>
      <input name="search-params" type="text" />
    </form>
  )
}


export default SearchBar;