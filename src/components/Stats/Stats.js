import React from "react";

import { useSessionState, stringDataReducer } from "../../helpers/helpers";

function Stats({ showsData, watchedEpisodesData }) {
  const [name, setName] = useSessionState(
    "username",
    stringDataReducer,
    "Guest"
  );

  // Gets the user's top 3 genres
  const getTopGenres = () => {
    let showGenres = showsData
      .map((show) => show.genres)
      .reduce((prev, current) => prev.concat(current), []);
    let genreObject = {};
    for (let genre of showGenres) {
      genreObject[genre] = genreObject.hasOwnProperty(genre)
        ? (genreObject[genre] += 1)
        : 1;
    }
    let genreArray = [...Object.entries(genreObject)];
    let top3 = genreArray
      .sort((a, b) => b[1] - a[1])
      .map((x) => x[0])
      .slice(0, 3);
    return top3;
  };
  return (
    <div>
      <h1>
        Hello, <input onChange={(e) => setName(e.target.value)} value={name} />!
      </h1>
      <h2>
        <span>Shows Tracked: </span>
        {showsData.length}
      </h2>
      <h2>
        <span>Episodes Watched: </span>
        {watchedEpisodesData.length}
      </h2>
      <h2>
        <span>Watch Time: </span>
        {watchedEpisodesData.reduce(
          (prev, current) => prev + current.runtime,
          0
        )}
        mins
      </h2>
      <h2>
        <span>Top Genres: {getTopGenres().join(", ")}</span>
      </h2>
    </div>
  );
}

export default Stats;
