import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Search from "../Search/Search";
import Nav from "../Nav/Nav";
import User from "../User/User";
import SearchBar from "../SearchBar/SearchBar";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

import { TrackedShowsContextProvider } from "../ContextProviders/TrackedShowsContextProvider";
import { UserContextProvider } from "../ContextProviders/UserContextProvider";
import { WatchedEpisodesContextProvider } from "../ContextProviders/WatchedEpisodesContextProvider";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRequested, setSearchRequested] = useState(false);

  const handleSubmitSearch = (e, currentSearchInput) => {
    e.preventDefault();
    setSearchQuery(currentSearchInput);
    setSearchRequested(true);
  };

  return (
    <UserContextProvider>
      <div className="px-10 pt-10 font-sans font-extralight bg-gray-100 h-full min-h-screen text-lg">
        <Nav>
          <SearchBar handleSubmitSearch={handleSubmitSearch} />
        </Nav>
        <TrackedShowsContextProvider>
          <WatchedEpisodesContextProvider>
            {searchRequested && <Redirect to="/search" />}
            <User />
            <Switch>
              <Route path="/search">
                <Search
                  searchQuery={searchQuery}
                  setSearchRequested={setSearchRequested}
                />
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/sign-in">
                <SignIn />
              </Route>
            </Switch>
          </WatchedEpisodesContextProvider>
        </TrackedShowsContextProvider>
      </div>
    </UserContextProvider>
  );
}

export default App;
