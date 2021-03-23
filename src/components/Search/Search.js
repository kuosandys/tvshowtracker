import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import SearchWrapper from "../SearchWrapper/SearchWrapper";
import SearchDetails from "../SearchDetails/SearchDetails";
import Layout2 from "../Layout/Layout2";
import Layout1 from "../Layout/Layout1";

function Search({ searchQuery, setSearchRequested }) {
  const [searchResults, setSearchResults] = useState([]);

  // Get search results
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        let response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchQuery}`
        );
        let dataObject = await response.json();
        let dataArray = Object.values(dataObject).sort(
          (a, b) => a.score < b.score
        );
        setSearchResults(dataArray);
        setSearchRequested(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchSearchResults();
  }, [searchQuery, setSearchRequested]);

  return (
    <Switch>
      <Route exact path="/search">
        <Layout2>
          <p className="text-center italic">
            Search results for "{searchQuery}"
          </p>
          <SearchWrapper searchResults={searchResults} />
        </Layout2>
      </Route>

      {searchResults.map((searchResult) => {
        return (
          <Route
            exact
            path={`/search/${searchResult.show.id}`}
            key={searchResult.show.id}
          >
            <Layout1 child1={<SearchDetails show={searchResult.show} />} />
          </Route>
        );
      })}
    </Switch>
  );
}

export default Search;
