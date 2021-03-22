import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import Stats from "../Stats/Stats";
import { useSessionState, arrayDataReducer } from "../../helpers/helpers";

function User({ trackedShows, handleTrack }) {
  const [watchedEpisodes, setWatchedEpisodes] = useSessionState(
    "watchedEpisodes",
    arrayDataReducer,
    []
  );
  const [showsData, setShowsData] = useState([]);
  const [watchedEpisodesData, setWatchedEpisodesData] = useState([]);

  useEffect(() => {
    const fetchShowData = async () => {
      let fetchedData = [];

      try {
        await Promise.all(
          trackedShows.map(async (showId) => {
            let response = await fetch(
              `https://api.tvmaze.com/shows/${showId}`
            );
            let data = await response.json();
            fetchedData.push(data);
          })
        );
        setShowsData(fetchedData);
      } catch (error) {
        alert(error);
      }
    };
    fetchShowData();
  }, [trackedShows]);

  useEffect(() => {
    const fetchEpisodesData = async () => {
      let fetchedData = [];

      try {
        await Promise.all(
          watchedEpisodes.map(async (episodeId) => {
            let response = await fetch(
              `https://api.tvmaze.com/episodes/${episodeId}`
            );
            let data = await response.json();
            fetchedData.push(data);
          })
        );
        setWatchedEpisodesData(fetchedData);
      } catch (error) {
        alert(error);
      }
    };
    fetchEpisodesData();
  }, [watchedEpisodes]);

  return (
    <Switch>
      <Route exact path="/shows">
        <Stats
          showsData={showsData}
          watchedEpisodesData={watchedEpisodesData}
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
