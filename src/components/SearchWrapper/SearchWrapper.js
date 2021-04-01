import React from "react";

import ShowCard from "../ShowCard/ShowCard";
import TrackShowButton from "../TrackShowButton/TrackShowButton";

function SearchWrapper({ searchResults }) {
  return (
    <div className="flex flex-wrap justify-center">
      {searchResults.map((result) => {
        return (
          <ShowCard key={result.show.id} show={result.show}>
            <TrackShowButton showId={result.show.id} />
          </ShowCard>
        );
      })}
    </div>
  );
}

export default SearchWrapper;
