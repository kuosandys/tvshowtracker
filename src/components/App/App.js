// import "./App.css";
import React, { useReducer } from "react";
import { Route, Switch, Link } from "react-router-dom";

import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";

// test data - get from localstorage eventually
const sampleShowIds = [1, 2];

const showsReducer = (state, action) => {
  if (action.type === "add") {
    return [...state, action.show];
  } else if (action.type === "remove") {
    let newState = state.filter((item) => item !== action.show);
    return [...newState];
  }
};

function App() {
  const [trackedShows, setTrackedShows] = useReducer(
    showsReducer,
    sampleShowIds
  );

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
          <ShowsWrapper trackedShows={trackedShows}></ShowsWrapper>
        </Route>
        {trackedShows.map((showId) => {
          return (
            <Route exact path={`/shows/:showId`} key={showId}>
              <ShowDetails />
              <EpisodesWrapper />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
