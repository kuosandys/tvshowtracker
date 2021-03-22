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
    <div className="px-10 pt-10 font-sans font-extralight bg-gray-100 h-full min-h-screen text-lg">
      <Nav>
        <SearchBar handleSubmitSearch={handleSubmitSearch} />
      </Nav>
      <div className="lg:max-w-screen-lg md:max-w-screen-md mx-auto h-full min-h-screen bg-white">
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
    </div>
  );
}

export default App;
