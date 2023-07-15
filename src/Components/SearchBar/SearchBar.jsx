import { useState } from "react";

export const SearchBar = ({ onSearch, searchQuery, setSearchQuery }) => {

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <input  
      type="text"
      value={searchQuery}
      onChange={handleSearchInput}
      placeholder="Search items"
    />
  )
}