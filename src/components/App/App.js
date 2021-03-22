import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Nav from "../Nav/Nav";
import User from "../User/User";
import SearchBar from "../SearchBar/SearchBar";
import { useSessionState } from "../../helpers/helpers";

function App() {
  const [trackedShows, setTrackedShows] = useSessionState("trackedShows");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRequested, setSearchRequested] = useState(false);

  const handleSubmitSearch = (e, currentSearchInput) => {
    e.preventDefault();
    setSearchQuery(currentSearchInput);
    setSearchRequested(true);
  };

  return (
    <div className="px-10 py-10 font-crimson bg-gray-100 min-h-screen h-full text-xl">
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
