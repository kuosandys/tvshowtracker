import React from "react";

import ShowCard from "../ShowCard/ShowCard";
import TrackShowButton from "../TrackShowButton/TrackShowButton";
import Layout2 from "../Layout/Layout2";

function SearchWrapper({ searchResults }) {
  return (
    <Layout2>
      <div className="flex flex-wrap justify-center">
        {searchResults.map((result) => {
          return (
            <ShowCard key={result.show.id} show={result.show}>
              <TrackShowButton showId={result.show.id} />
            </ShowCard>
          );
        })}
      </div>
    </Layout2>
  );
}

export default SearchWrapper;
