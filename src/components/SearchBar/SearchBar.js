import React, { useState, useRef } from "react";

import PrimaryButton from "../StyleComponents/PrimaryButton";

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
      <PrimaryButton type="submit">Search</PrimaryButton>
    </form>
  );
}

export default SearchBar;
