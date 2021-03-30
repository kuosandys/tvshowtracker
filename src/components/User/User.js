import React, { useEffect, useState, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import Layout1 from "../StyleComponents/Layout1";
import Loading from "../StyleComponents/Loading";
import Stats from "../Stats/Stats";

import {
  fetchAllEpisodesData,
  fetchAllShowsData,
} from "../../helpers/fetchHelpers";
import { TrackedShowsContext } from "../ContextProviders/TrackedShowsContextProvider";
import { UserContext } from "../ContextProviders/UserContextProvider";

function User() {
  const { trackedShows } = useContext(TrackedShowsContext);
  const user = useContext(UserContext);

  const [showsData, setShowsData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      <Route exact path="/">
        {user && <Redirect to="/shows" />}
      </Route>
      <Route exact path="/shows">
        {!user && <Redirect to="/" />}
        {isLoading && <Loading />}
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
                />
              }
            />
          </Route>
        );
      })}
    </Switch>
  );
}

export default User;
