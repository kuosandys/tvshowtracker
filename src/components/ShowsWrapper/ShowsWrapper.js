import React from "react";
import ShowCard from "../ShowCard/ShowCard.js";
import TrackShowButton from "../TrackShowButton/TrackShowButton.js";

function ShowsWrapper({ showsData }) {
  return (
    <div className="flex flex-wrap justify-center pt-5">
      {showsData.length === 0 ? (
        <p className="italic">You are not currently tracking any shows.</p>
      ) : (
        showsData.map((show) => {
          return (
            <ShowCard key={show.id} show={show}>
              <TrackShowButton showId={show.id} />
            </ShowCard>
          );
        })
      )}
    </div>
  );
}

export default ShowsWrapper;
