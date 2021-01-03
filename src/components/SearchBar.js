import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');
  
  // onInputChange is not needed because setTerm in called in onChange on input
  // const onInputChange = event => {
  //   setTerm(event.target.value);
  // };

  const onSubmit = event => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div>
          <label>Video Search</label>
          <input 
            type="text" 
            value={term}
            placeholder="Search text here"
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );

};

export default SearchBar;