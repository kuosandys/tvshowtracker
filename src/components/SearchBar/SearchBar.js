import React, { useState } from "react";

function SearchBar(props) {
  const { handleSubmitSearch } = props;
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => handleSubmitSearch(e, searchInput)}
      className="flex items-stretch justify-center"
    >
      <input
        type="text"
        onChange={handleChange}
        className="mx-3 px-3 rounded"
      ></input>
      <button
        type="submit"
        className="bg-blue-400 hover:bg-blue-700 rounded px-3 py-1.5 text-white mx-3"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
