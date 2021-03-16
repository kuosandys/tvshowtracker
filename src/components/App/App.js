// import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Nav from "../Nav/Nav";
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
    <div className="pt-20 font-sans bg-gray-100 min-h-screen h-full">
      <Nav />
      <Switch>
        <Route exact path="/shows">
          <ShowsWrapper trackedShows={trackedShows} handleTrack={handleTrack} />
        </Route>
        {trackedShows.map((showId) => {
          return (
            <Route exact path={`/shows/:showId`} key={showId}>
              <ShowDetails />
              <EpisodesWrapper />
            </Route>
          );
        })}
        <Route path="/explore">
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
