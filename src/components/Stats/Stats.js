import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

import { getTopGenres, getWatchTime } from "./helpers";
import { useSessionState, stringDataReducer } from "../../helpers/helpers";
import { WatchedEpisodesContext } from "../ContextProviders/Contexts";
import { UserContext } from "../ContextProviders/UserContextProvider";

function Stats({ showsData, episodesData }) {
  const { watchedEpisodes } = useContext(WatchedEpisodesContext);
  const user = useContext(UserContext);

  // For setting name in local session
  const [name, setName] = useSessionState(
    "username",
    stringDataReducer,
    "Guest"
  );
  const [inputEditable, setInputEditable] = useState(false);

  return (
    <section>
      <div className="flex text-2xl pl-10 justify-center items-center">
        <h1 className="mx-2">
          {showsData.length > 0 || user ? "Welcome back" : "Hello"},
        </h1>
        {user ? (
          <h1>{user.displayName}!</h1>
        ) : (
          <div>
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
        )}
      </div>
      <section className="max-w-screen-sm mx-auto grid grid-cols-2 grid-rows-2 grid-flow-col text-center border-2 border-gray-500 rounded mt-5">
        <div className="flex flex-col border-2 border-gray-500 justify-start py-2">
          <h3>Shows Tracked</h3>
          <span className="text-3xl">{showsData.length}</span>
        </div>
        <div className="flex flex-col border-2 border-gray-500 justify-start py-2">
          <h3>Episodes Watched</h3>
          <span className="text-3xl">
            {watchedEpisodes.length} / {episodesData.length}
          </span>
        </div>
        <div className="flex flex-col border-2 border-gray-500 justify-start py-2">
          <h3>Top Genres</h3>
          <span className="text-lg">{getTopGenres(showsData).join(", ")}</span>
        </div>
        <div className="flex flex-col border-2 border-gray-500 justify-start py-2">
          <h3>Watch Time</h3>
          <span className="text-3xl">
            {getWatchTime(episodesData, watchedEpisodes)} mins
          </span>
        </div>
      </section>
    </section>
  );
}

export default Stats;
