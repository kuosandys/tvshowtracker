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
        className="mx-3 px-3 rounded text-black"
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
