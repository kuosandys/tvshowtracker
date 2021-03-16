import React from "react";

import ShowCardLink from "../ShowCardLink/ShowCardLink";

// Displays show overview info: name, poster, premiered/s, status, country, button to add to watch list
function ShowCard(props) {
  const { show, children } = props;

  return (
    <div className="border-box flex flex-col items-stretch overflow-hidden h-96 w-52 bg-white">
      <ShowCardLink show={show}>
        <img
          src={show.image?.medium}
          alt={show.name}
          className="h-72 w-52 mx-auto bg-gray-300 text-lg text-center italic text-white align"
        />
      </ShowCardLink>
      <h2 className="text-lg font-bold m-2 text-center truncate">
        {show.name}
      </h2>
      <section className="self-stretch flex justify-between items-baseline text-sm mx-4">
        <h3>
          <span>{show.network?.country?.code || ""}</span>
          <span>{`${show.premiered?.slice(0, 4) || "Date Unknown"}`}</span>
        </h3>
        {children}
      </section>
    </div>
  );
}

export default ShowCard;
