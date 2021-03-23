import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import Stats from "../Stats/Stats";
import { useSessionState, arrayDataReducer } from "../../helpers/helpers";

// Get all episodes data for an array of show id's
const fetchAllEpisodesData = async (showIds) => {
  let fetchedData = [];

  try {
    await Promise.all(
      showIds.map(async (showId) => {
        // Episodes data returned from TVmaze API does not have show name or timezone
        // We add it as an extra field to each episode
        let showResponse = await fetch(`http://api.tvmaze.com/shows/${showId}`);
        let showData = await showResponse.json();
        let showName = showData.name;
        let timezone = showData.network?.country?.timezone;

        // Get episodes data
        let episodesResponse = await fetch(
          `https://api.tvmaze.com/shows/${showId}/episodes?specials=1`
        );
        let episodesData = await episodesResponse.json();

        episodesData.forEach((episodeData) => {
          return { ...episodeData, show: showName, timezone: timezone };
        });

        fetchedData = [...fetchedData, ...episodesData];
      })
    );
    return fetchedData;
  } catch (error) {
    alert(error);
  }
};

function User({ trackedShows, handleTrack }) {
  const [watchedEpisodes, setWatchedEpisodes] = useSessionState(
    "watchedEpisodes",
    arrayDataReducer,
    []
  );
  const [showsData, setShowsData] = useState([]);
  // const [watchedEpisodesData, setWatchedEpisodesData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Get all episodes data for tracked shows
  useEffect(() => {
    const getAllEpisodesData = async () => {
      let allEpisodesData = await fetchAllEpisodesData(trackedShows);
      setEpisodesData(allEpisodesData);
      setIsLoaded(true);
    };
    getAllEpisodesData();
  }, [trackedShows]);

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

  return (
    <Switch>
      <Route exact path="/shows">
        {isLoaded && (
          <Stats
            showsData={showsData}
            watchedEpisodes={watchedEpisodes}
            episodesData={episodesData}
          />
        )}
        {isLoaded && (
          <ShowsWrapper
            trackedShows={trackedShows}
            handleTrack={handleTrack}
            showsData={showsData}
          />
        )}
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
