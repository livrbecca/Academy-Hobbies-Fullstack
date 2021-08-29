import React from 'react'

const SearchBar = ( {
        setSearchTerm,
        searchTerm}) => {
    return (
       <div>
      <input
        className="searchInput"
        type="text"
        value={searchTerm}
        placeholder="search by name or notes"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    )
}

export default SearchBar
