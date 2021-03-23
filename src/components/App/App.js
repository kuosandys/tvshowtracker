import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Search from "../Search/Search";
import Nav from "../Nav/Nav";
import User from "../User/User";
import SearchBar from "../SearchBar/SearchBar";
import { useSessionState, arrayDataReducer } from "../../helpers/helpers";
import { TrackedShowsContext } from "../Contexts/Contexts";

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
      <TrackedShowsContext.Provider value={{ trackedShows, setTrackedShows }}>
        {searchRequested && <Redirect to="/search" />}
        <User />
        <Switch>
          <Route path="/search">
            <Search
              searchQuery={searchQuery}
              setSearchRequested={setSearchRequested}
            />
          </Route>
        </Switch>
      </TrackedShowsContext.Provider>
    </div>
  );
}

export default App;
