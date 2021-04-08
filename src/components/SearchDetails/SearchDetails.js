import React, { useEffect, useState } from "react";
import ShowDetails from "../ShowDetails/ShowDetails";
import TrackShowButton from "../TrackShowButton/TrackShowButton";
import { fetchAllEpisodesData } from "../../helpers/fetchHelpers";
import { getSeasons } from "../../helpers/dataHelpers";

function SearchDetails({ show }) {
  const [episodesData, setEpisodesData] = useState([]);

  // Get all episodes data
  useEffect(() => {
    const getAllEpisodesData = async () => {
      let allEpisodesData = await fetchAllEpisodesData([show.id]);
      setEpisodesData(allEpisodesData);
    };
    getAllEpisodesData();
  }, [show]);

  return (
    <section className="relative">
      <div className="mx-0 mb-10 py-2 px-5 grid grid-cols-4 border-2 border-white items-baseline rounded">
        <p>
          <span className="mx-3">Seasons: </span>
          {getSeasons(episodesData).length}
        </p>
        <p>
          <span className="mx-3">Episodes:</span>
          {episodesData.length}
        </p>
        <p>
          <span className="mx-3">Rating:</span> {show.rating?.average}
        </p>
        <p>
          <span className="mx-3">Tracking? </span>
          <TrackShowButton showId={show.id} />
        </p>
      </div>
      <ShowDetails show={show} />
    </section>
  );
}

export default SearchDetails;
