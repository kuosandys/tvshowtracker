import React, { useEffect, useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import Layout1 from "../Layout/Layout1";
import Stats from "../Stats/Stats";
import {
  fetchAllEpisodesData,
  fetchAllShowsData,
} from "../../helpers/fetchHelpers";
import { useSessionState, arrayDataReducer } from "../../helpers/helpers";
import {
  TrackedShowsContext,
  WatchedEpisodesContext,
} from "../Contexts/Contexts";

function User() {
  const { trackedShows } = useContext(TrackedShowsContext);
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
    <WatchedEpisodesContext.Provider
      value={{ watchedEpisodes, setWatchedEpisodes }}
    >
      <Switch>
        <Route exact path="/shows">
          <Layout1
            child1={<Stats showsData={showsData} episodesData={episodesData} />}
            child2={<ShowsWrapper showsData={showsData} />}
          />
        </Route>

        {showsData.map((showData) => {
          return (
            <Route exact path={`/shows/${showData.id}`} key={showData.id}>
              <Layout1
                child1={<ShowDetails show={showData} />}
                child2={
                  <EpisodesWrapper
                    showId={showData.id}
                    timezone={showData.network?.country?.timezone}
                    episodesData={episodesData.filter(
                      (episode) => episode.show === showData.name
                    )}
                    watchedEpisodes={watchedEpisodes}
                    setWatchedEpisodes={setWatchedEpisodes}
                  />
                }
              />
            </Route>
          );
        })}
      </Switch>
    </WatchedEpisodesContext.Provider>
  );
}

export default User;
