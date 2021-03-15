// import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import TrackShowButton from "../TrackShowButton/TrackShowButton";
import { useLocalShowsState } from "../../helpers/helpers";

const showsReducer = (state, action) => {
  if (action.type === "add") {
    return [...state, action.show];
  } else if (action.type === "remove") {
    let newState = state.filter((item) => item !== action.show);
    return [...newState];
  }
};

function App() {
  const [trackedShows, setTrackedShows] = useLocalShowsState(showsReducer);

  const handleTrack = (showId) => {
    setTrackedShows({
      type: trackedShows.includes(showId) ? "remove" : "add",
      show: +showId,
    });
  };

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shows">Shows</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/shows">
          <ShowsWrapper
            trackedShows={trackedShows}
            handleTrack={handleTrack}
          ></ShowsWrapper>
        </Route>
        {trackedShows.map((showId) => {
          return (
            <Route exact path={`/shows/:showId`} key={showId}>
              <ShowDetails />
              <EpisodesWrapper />
            </Route>
          );
        })}
        <Route exact path="/">
          <SearchWrapper
            trackedShows={trackedShows}
            handleTrack={handleTrack}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
