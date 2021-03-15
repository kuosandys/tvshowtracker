import React, { useState } from "react";

function SearchBar(props) {
  const { handleSubmitSearch } = props;
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmitSearch(e, searchInput)}>
      <input type="text" onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
