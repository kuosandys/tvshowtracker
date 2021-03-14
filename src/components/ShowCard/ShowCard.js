import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ShowDetails from "../ShowDetails/ShowDetails";

// Displays show overview info: name, poster, premiered/s, status, country, button to add to watch list
function ShowCard(props) {
  const { show } = props;
  let match = useRouteMatch();

  return (
    <Link to={`${match.url}/${show.id}`}>
      <div>
        <h2>{show.name}</h2>
        <img src={show.image.medium} alt="TV show poster" />
        <h3>Country: {show.network.country.code}</h3>
        <h3>{`Premiered: ${show.premiered.slice(0, 4)}`}</h3>
        <h3>{`Status: ${show.status}`}</h3>
      </div>
    </Link>
  );
}

export default ShowCard;
