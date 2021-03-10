import React, { useContext } from "react";

import UserContext from "../User/User";

// Display detailed information for a show
function ShowDetails(props) {
  const { user } = useContext(UserContext);
  const showData = user[1];

  const {
    name,
    imgUrl,
    country,
    premiered,
    status,
    genres,
    summary,
    language,
  } = showData;

  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt="TV show poster" />
      <h3>{`Country: ${country}`}</h3>
      <h3>{`Language: ${language}`}</h3>
      <h3>{`Premiered: ${premiered.slice(0, 4)}`}</h3>
      <h3>{`Status: ${status}`}</h3>
      <h3>{`Genres: ${genres.join(", ")}`}</h3>
      <p>{summary}</p>
    </div>
  );
}

export default ShowDetails;
