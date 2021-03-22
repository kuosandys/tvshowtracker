import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Nav from "../Nav/Nav";
import User from "../User/User";
import SearchBar from "../SearchBar/SearchBar";
import { useSessionState, arrayDataReducer } from "../../helpers/helpers";

function App() {
  const [trackedShows, setTrackedShows] = useSessionState(
    "trackedShows",
    arrayDataReducer,
    []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRequested, setSearchRequested] = useState(false);

  const handleSubmitSearch = (e, currentSearchInput) => {
    e.preventDefault();
    setSearchQuery(currentSearchInput);
    setSearchRequested(true);
  };

  return (
    <div className="px-10 py-10 font-sans font-extralight bg-gray-100 min-h-screen h-full text-lg">
      <Nav>
        <SearchBar handleSubmitSearch={handleSubmitSearch} />
      </Nav>
      {searchRequested && <Redirect to="/search" />}
      <User trackedShows={trackedShows} handleTrack={setTrackedShows} />
      <Switch>
        <Route path="/search">
          <SearchWrapper
            trackedShows={trackedShows}
            handleTrack={setTrackedShows}
            searchQuery={searchQuery}
            setSearchRequested={setSearchRequested}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
