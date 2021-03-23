import React, { useEffect, useState } from "react";

import ShowCard from "../ShowCard/ShowCard";
import TrackShowButton from "../TrackShowButton/TrackShowButton";
import Layout2 from "../Layout/Layout2";

function SearchWrapper({
  trackedShows,
  handleTrack,
  searchQuery,
  setSearchRequested,
}) {
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
        setSearchRequested(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchSearchResults();
  }, [searchQuery, setSearchRequested]);

  return (
    <Layout2>
      <p className="text-center italic">Search results for "{searchQuery}"</p>
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
    </Layout2>
  );
}

export default SearchWrapper;
