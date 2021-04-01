import React, { useEffect, useState, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import Layout1 from "../StyleComponents/Layout1";
import Loading from "../StyleComponents/Loading";
import Stats from "../Stats/Stats";
import HomePage from "../HomePage/HomePage";

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

  // Loading effect for UI while waiting for API calls to resolve
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
        {/* If user logged in, or there is data for tracked shows, redirect Home page to Shows page*/}
        {(user || trackedShows?.length > 0) && <Redirect to="/shows" />}
        <HomePage />
      </Route>

      <Route exact path="/shows">
        {/* If there is no user logged in and no tracked shows, redirect Shows page to Home page*/}
        {!user && trackedShows?.length === 0 && <Redirect to="/" />}
        {isLoading && <Loading />}
        <Layout1
          child1={<Stats showsData={showsData} episodesData={episodesData} />}
          child2={<ShowsWrapper showsData={showsData} />}
        />
      </Route>

      {/* Map routes for each Show */}
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
