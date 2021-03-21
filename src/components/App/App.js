import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Nav from "../Nav/Nav";
import User from "../User/User";
import SearchBar from "../SearchBar/SearchBar";
import { useLocalState } from "../../helpers/helpers";

function App() {
  const [trackedShows, setTrackedShows] = useLocalState("trackedShows");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRequested, setSearchRequested] = useState(false);

  const handleSubmitSearch = (e, currentSearchInput) => {
    e.preventDefault();
    setSearchQuery(currentSearchInput);
    setSearchRequested(true);
  };

  return (
    <div className="px-10 pt-20 font-sans bg-gray-900 min-h-screen h-full">
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
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
