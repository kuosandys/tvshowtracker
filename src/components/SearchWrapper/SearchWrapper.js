import React, { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ShowCard from "../ShowCard/ShowCard";
import TrackShowButton from "../TrackShowButton/TrackShowButton";

function SearchWrapper(props) {
  const { trackedShows, handleTrack } = props;
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
    <div className="max-w-screen-lg mx-auto">
      <SearchBar handleSubmitSearch={handleSubmitSearch}></SearchBar>
      <div className="flex flex-wrap justify-center">
        {isLoaded &&
          searchResults.map((result) => {
            return (
              <ShowCard key={result.show.id} show={result.show}>
                <TrackShowButton
                  showId={result.show.id}
                  trackedShows={trackedShows}
                  handleTrack={handleTrack}
                />
              </ShowCard>
            );
          })}
      </div>
    </div>
  );
}

export default SearchWrapper;
