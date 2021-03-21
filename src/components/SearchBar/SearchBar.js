import React, { useState } from "react";

function SearchBar({ handleSubmitSearch }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmitSearch(e, searchInput)}
      className="flex items-stretch justify-center"
    >
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        className="mx-3 px-3 rounded text-gray-900"
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
