import React, { useState, useRef } from "react";

function SearchBar({ handleSubmitSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (e) => {
    handleSubmitSearch(e, searchInput);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onFormSubmit} className="flex items-stretch justify-center">
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        className="mx-3 px-3 rounded text-gray-900"
        ref={inputRef}
      ></input>
      <button
        type="submit"
        className="bg-indigo-300 hover:bg-indigo-400 rounded px-3 py-1.5 mx-3"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
