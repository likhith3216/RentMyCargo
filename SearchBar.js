import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm); 
    }
  };

  return (
    <div className="search-container">
      <h1>Hello, What Do You Want?</h1>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search vehicles..." 
          value={searchTerm} 
          onChange={handleInputChange} 
        />
        <button type="button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;