import React, { useEffect, useState } from "react";
import ShowCard from "../ShowCard/ShowCard.js";
import TrackShowButton from "../TrackShowButton/TrackShowButton.js";

function ShowsWrapper(props) {
  const { trackedShows, handleTrack } = props;
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShowData = async () => {
      let showsData = [];

      await Promise.all(
        trackedShows.map(async (showId) => {
          let response = await fetch(`http://api.tvmaze.com/shows/${showId}`);
          let data = await response.json();
          showsData.push(data);
        })
      );
      setShows(showsData);
    };
    fetchShowData();
  }, [trackedShows]);

  return (
    <div>
      {shows.map((show) => {
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
