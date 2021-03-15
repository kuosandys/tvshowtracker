import React from "react";

// Displays show overview info: name, poster, premiered/s, status, country, button to add to watch list
function ShowCard(props) {
  const { show, children } = props;

  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show.image?.medium} alt="TV show poster" />
      <h3>Country: {show.network?.country?.code || "Unknown"}</h3>
      <h3>{`Premiered: ${show.premiered?.slice(0, 4) || "Unknown"}`}</h3>
      <h3>{`Status: ${show.status}`}</h3>
      {children}
    </div>
  );
}

export default ShowCard;
