import React, { useState, useEffect } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("nascar");

  const onInputChange = (evt) => {
    setTerm(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setTerm(term);
    onTermSubmit(term);
  };

  useEffect(() => {
    onTermSubmit(term);
    setTerm(term);
  }, []);

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>YouTube Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
      <h4>Search Results For: &nbsp;&nbsp;&nbsp;"{term}"</h4>
    </div>
  );
};

export default SearchBar;
