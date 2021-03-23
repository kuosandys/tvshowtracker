import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import Stats from "../Stats/Stats";
import { fetchAllEpisodesData, fetchAllShowsData } from "./helpers";
import { useSessionState, arrayDataReducer } from "../../helpers/helpers";

function User({ trackedShows, handleTrack }) {
  const [watchedEpisodes, setWatchedEpisodes] = useSessionState(
    "watchedEpisodes",
    arrayDataReducer,
    []
  );
  const [showsData, setShowsData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);

  // Get all episodes data
  useEffect(() => {
    const getAllEpisodesData = async () => {
      let allEpisodesData = await fetchAllEpisodesData(trackedShows);
      setEpisodesData(allEpisodesData);
    };
    getAllEpisodesData();
  }, [trackedShows]);

  // Get all shows data
  useEffect(() => {
    const getShowsData = async () => {
      let allShowsData = await fetchAllShowsData(trackedShows);
      setShowsData(allShowsData);
    };
    getShowsData();
  }, [trackedShows]);

  return (
    <Switch>
      <Route exact path="/shows">
        <Stats
          showsData={showsData}
          watchedEpisodes={watchedEpisodes}
          episodesData={episodesData}
        />

        <ShowsWrapper
          trackedShows={trackedShows}
          handleTrack={handleTrack}
          showsData={showsData}
        />
      </Route>
      {showsData.map((showData) => {
        return (
          <Route exact path={`/shows/${showData.id}`} key={showData.id}>
            <ShowDetails show={showData} />
            <EpisodesWrapper
              showId={showData.id}
              timezone={showData.network?.country?.timezone}
              episodesData={episodesData.filter(
                (episode) => episode.show === showData.name
              )}
              watchedEpisodes={watchedEpisodes}
              setWatchedEpisodes={setWatchedEpisodes}
            />
          </Route>
        );
      })}
    </Switch>
  );
}

export default User;
