// import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Nav from "../Nav/Nav";
import User from "../User/User"
import { useLocalState } from "../../helpers/helpers";

// const showsReducer = (state, action) => {
//   if (action.type === "add") {
//     return [...state, action.show];
//   } else if (action.type === "remove") {
//     let newState = state.filter((item) => item !== action.show);
//     return [...newState];
//   }
// };

function App() {
  const [trackedShows, setTrackedShows] = useLocalState("trackedShows");

  return (
    <div className="px-10 pt-20 font-sans bg-gray-100 min-h-screen h-full">
      <Nav />
      <User trackedShows={trackedShows} handleTrack={setTrackedShows}/>
      <Switch>
        <Route path="/explore">
          <SearchWrapper
            trackedShows={trackedShows}
            handleTrack={setTrackedShows}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
