import React from "react";
import ShowCard from "../ShowCard/ShowCard.js";
import TrackShowButton from "../TrackShowButton/TrackShowButton.js";

function ShowsWrapper(props) {
  const { trackedShows, handleTrack, showsData } = props;

  return (
    <div className="flex flex-wrap justify-center max-w-screen-lg mx-auto pt-10">
      {showsData.map((show) => {
        return (
          <ShowCard key={show.id} show={show}>
            <TrackShowButton
              showId={show.id}
              trackedShows={trackedShows}
              handleTrack={handleTrack}
            />
          </ShowCard>
        );
      })}
    </div>
  );
}

export default ShowsWrapper;
