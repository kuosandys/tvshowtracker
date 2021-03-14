import React from "react";

// import UserContext from "../User/User";

function WatchedButton(props) {
  const { showId, episodeId, watched, setShowsData } = props;
  // const { setUser } = useContext(UserContext);

  function handleClick() {
    const newObj = { showId, episodeId, watched: !watched };
    setShowsData(newObj);
  }

  return (
    <button onClick={handleClick}>{watched ? "watched" : "unwatched"}</button>
  );
}

export default WatchedButton;
