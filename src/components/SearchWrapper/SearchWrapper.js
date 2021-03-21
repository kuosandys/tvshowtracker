import React, { useEffect, useState } from "react";

import ShowCard from "../ShowCard/ShowCard";
import TrackShowButton from "../TrackShowButton/TrackShowButton";

function SearchWrapper({ trackedShows, handleTrack, searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        let response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchQuery}`
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
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="max-w-screen-lg mx-auto">
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
