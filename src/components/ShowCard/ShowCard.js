import React from "react";

import AddRemoveShow from "../AddRemoveShow.js";

// Displays show overview info: name, poster, premiered/s, status, country, button to add to watch list
function ShowCard(props) {
  const { name, imgUrl, country, premiered, status } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt="TV show poster" />
      <h3>Country: {country}</h3>
      <h3>{`Premiered: ${premiered.slice(0, 4)}`}</h3>
      <h3>{`Status: ${status}`}</h3>
      {/* <AddRemoveShow
        handleAddRemoveShow={handleAddRemoveShow}
        inWatchList={inWatchList}
      ></AddRemoveShow> */}
    </div>
  );
}

export default ShowCard;
