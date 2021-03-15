import React, { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ShowCard from "../ShowCard/ShowCard";

function SearchWrapper() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSubmitSearch = async (e, searchInput) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchInput}`
      );
      let dataObject = await response.json();
      let dataArray = Object.values(dataObject).sort(
        (a, b) => a.score < b.score
      );
      setSearchResults(dataArray);
      setIsLoaded(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <SearchBar handleSubmitSearch={handleSubmitSearch}></SearchBar>
      {isLoaded &&
        searchResults.map((result) => {
          return <ShowCard key={result.show.id} show={result.show}></ShowCard>;
        })}
    </div>
  );
}

export default SearchWrapper;
