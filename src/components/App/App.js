// import "./App.css";
import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";

// test data - get from localstorage eventually
const sampleShowIds = [1, 2];

function App() {
  const [trackedShows, setTrackedShows] = useState(sampleShowIds);

  return (
    // <ShowsContext.Provider value={{trackedShows, setTrackedShows}}>
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
          <ShowsWrapper trackedShows={trackedShows}></ShowsWrapper>
        </Route>
        {trackedShows.map((showId) => {
          return (
            <Route exact path={`/shows/:showId`} key={showId}>
              <ShowDetails showId={showId} />
              <EpisodesWrapper showId={showId} />
            </Route>
          );
        })}
      </Switch>
    </div>
    // </ShowsContext.Provider>
  );
}

export default App;
