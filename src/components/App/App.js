// import "./App.css";
import React, { useState } from "react";

// import ShowsContext from "../Shows/Shows";
// import { getShowsData } from "../../services/showsData";
import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";

// test data - get from localstorage eventually
const sampleShowIds = [1, 2];

function App() {
  const [trackedShows, setTrackedShows] = useState(sampleShowIds);

  return (
    // <ShowsContext.Provider value={{trackedShows, setTrackedShows}}>
    <div className="App">
      <ShowsWrapper trackedShows={trackedShows}></ShowsWrapper>
    </div>
    // </ShowsContext.Provider>
  );
}

export default App;
