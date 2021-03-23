import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

import { useSessionState, stringDataReducer } from "../../helpers/helpers";

function Stats({ showsData, watchedEpisodes, episodesData }) {
  const [name, setName] = useSessionState(
    "username",
    stringDataReducer,
    "Guest"
  );
  const [inputEditable, setInputEditable] = useState(false);

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
    <section className="lg:max-w-screen-lg md:max-w-screen-md mx-auto py-10 bg-gray-900 text-white">
      <div className="flex text-2xl pl-10 justify-center items-center">
        <h1 className="mx-2">
          {showsData.length > 0 ? "Welcome back" : "Hello"},
        </h1>
        {inputEditable ? (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="bg-transparent ml-2 w-32 overflow-x-scroll"
          />
        ) : (
          <h1 className="font-medium">{name}</h1>
        )}
        <button
          onClick={() => setInputEditable((prevState) => !prevState)}
          className="mx-2 px-2 text-sm text-indigo-300"
        >
          {inputEditable ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faPen} />
          )}
        </button>
      </div>
      <section className="max-w-screen-sm mx-auto grid grid-cols-2 grid-rows-2 grid-flow-col text-center border-2 border-gray-500 rounded mt-5">
        <div className="flex flex-col border-2 border-gray-500 p-2">
          <h3>Shows Tracked</h3>
          <span className="text-3xl">{showsData.length}</span>
        </div>
        <div className="flex flex-col border-2 border-gray-500 p-2">
          <h3>Episodes Watched</h3>
          <span className="text-3xl">
            {watchedEpisodes.length} / {episodesData.length}
          </span>
        </div>
        <div className="flex flex-col border-2 border-gray-500 p-2">
          <h3>Top Genres</h3>
          <span className="text-2xl">{getTopGenres().join(", ")}</span>
        </div>
        <div className="flex flex-col border-2 border-gray-500 p-2">
          <h3>Watch Time</h3>
          <span className="text-2xl">
            {episodesData
              .filter((episode) => watchedEpisodes.includes(episode.id))
              .map((episode) => episode.runtime)
              .reduce((prev, current) => prev + current.runtime, 0)}{" "}
            mins
          </span>
        </div>
      </section>
    </section>
  );
}

export default Stats;
