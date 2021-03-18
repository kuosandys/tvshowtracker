import React, {useEffect, useState} from "react"
import {Switch, Route} from "react-router-dom"

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper"
import ShowDetails from "../ShowDetails/ShowDetails"
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper"
import {useLocalState} from "../../helpers/helpers"

function User(props) {
  const {trackedShows, handleTrack} = props;
  const [watchedEpisodes, setWatchedEpisodes] = useLocalState("watchedEpisodes");
  const [showsData, setShowsData] = useState([]);
  const [watchedEpisodesData, setWatchedEpisodesData] = useState([])

  useEffect(() => {
    const fetchShowData = async () => {
      let fetchedData = [];

      try {
        await Promise.all(
          trackedShows.map(async (showId) => {
            let response = await fetch(`http://api.tvmaze.com/shows/${showId}`);
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
            let response = await fetch(`http://api.tvmaze.com/episodes/${episodeId}`);
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
        <ShowsWrapper trackedShows={trackedShows} handleTrack={handleTrack} showsData={showsData} />
      </Route>
      {trackedShows.map((showId) => {
          return (
            <Route exact path={`/shows/:showId`} key={showId}>
              <ShowDetails />
              <EpisodesWrapper watchedEpisodes={watchedEpisodes} setWatchedEpisodes={setWatchedEpisodes}/>
            </Route>
          );
        })}
    </Switch>
  )
}

export default User