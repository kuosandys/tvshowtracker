import React, { useContext } from "react";

import UserContext from "../User/User";
import ShowCard from "../ShowCard/ShowCard.js";

function ShowsWrapper() {
  const showsData = useContext(UserContext);

  return (
    <div>
      {Object.values(showsData).map((show) => {
        return <ShowCard key={show.name} {...show}></ShowCard>;
      })}
    </div>
  );
}

export default ShowsWrapper;
