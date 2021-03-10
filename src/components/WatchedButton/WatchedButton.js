import React, { useContext } from "react";

import UserContext from "../User/User";

function WatchedButton(props) {
  const { showId, episodeId, watched } = props;
  const { setUser } = useContext(UserContext);

  function handleClick() {
    const newObj = {
      [showId]: {
        episodes: {
          [episodeId]: {
            watched: !watched,
          },
        },
      },
    };
    setUser(newObj);
  }

  return (
    <button onClick={handleClick}>{watched ? "watched" : "unwatched"}</button>
  );
}

export default WatchedButton;
