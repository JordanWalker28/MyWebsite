import React from 'react';

function SearchInput({ searchValue, setSearchValue }) {
  return (
    <input
      type="text"
      id="search-input"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}

export default SearchInput;