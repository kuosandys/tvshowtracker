// import "./App.css";
import React, { useReducer } from "react";

import UserContext from "../User/User";
import ShowsWrapper from "../ShowsWrapper/ShowsWrapper";
import EpisodesWrapper from "../EpisodesWrapper/EpisodesWrapper";
import ShowDetails from "../ShowDetails/ShowDetails";

// dummy data
const userData = {
  1: {
    name: "Under the Dome",
    status: "Ended",
    premiered: "2013-06-24",
    country: "US",
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    summary: "summary",
    genres: ["Drama", "Sci-fi", "Thriller"],
    language: "English",
    episodes: {
      1: {
        name: "Pilot",
        season: "1",
        number: "1",
        // specials as well
        type: "regular",
        // When saving, convert to users' current timezone
        airdate: "2013-06-24",
        airtime: "21:00",
        imageUrl:
          "https://static.tvmaze.com/uploads/images/medium_landscape/298/745721.jpg",
        summary: "summary",
        // boolean for user watched/not
        watched: true,
      },
      2: {
        name: "2Pilot",
        season: "1",
        number: "1",
        // specials as well
        type: "regular",
        // When saving, convert to users' current timezone
        airdate: "2013-06-24",
        airtime: "21:00",
        imageUrl:
          "https://static.tvmaze.com/uploads/images/medium_landscape/298/745721.jpg",
        summary: "summary",
        // boolean for user watched/not
        watched: true,
      },
    },
  },
  2: {
    name: "Person of Interest",
    status: "Ended",
    premiered: "2013-06-24",
    country: "US",
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    episodes: {
      1: {
        name: "Pilot",
        season: "1",
        episode: "1",
        // specials as well
        type: "regular",
        // When saving, convert to users' current timezone
        airdate: "2013-06-24",
        airtime: "21:00",
        imageUrl:
          "https://static.tvmaze.com/uploads/images/medium_landscape/298/745721.jpg",
        summary: "summary",
        // boolean for user watched/not
        watched: true,
      },
    },
  },
};

function reducer(state, item) {
  return { ...state, item };
}

function App() {
  const [user, setUser] = useReducer(reducer, userData);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        {/* <ShowsWrapper></ShowsWrapper> */}
        <ShowDetails></ShowDetails>
        <EpisodesWrapper></EpisodesWrapper>
      </div>
    </UserContext.Provider>
  );
}

export default App;
