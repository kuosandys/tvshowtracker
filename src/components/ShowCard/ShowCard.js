import React from "react";

import ShowCardLink from "../ShowCardLink/ShowCardLink";

// Displays show overview info: name, poster, premiered/s, status, country, button to add to watch list
function ShowCard(props) {
  const { show, children } = props;

  return (
    <div className="flex flex-col items-stretch overflow-hidden h-96 w-56 text-white m-4 rounded border-2 border-gray-200">
      <ShowCardLink show={show}>
        <img
          src={show.image?.medium}
          alt={show.name}
          className="h-72 w-56 mx-auto bg-gray-300 text-lg text-center italic text-white align"
        />
      </ShowCardLink>
      <h2 className="text-xl italic m-2 text-center truncate">{show.name}</h2>
      <section className="self-stretch flex justify-between items-center text-sm mx-4">
        <div className="flex items-center">
          <img
            src={`https://www.countryflags.io/${show.network?.country?.code.toLowerCase()}/flat/32.png`}
            alt={show.network?.country?.code || ""}
            className="mr-2"
          />
          <h3>{`${show.premiered?.slice(0, 4) || "-"}`}</h3>
        </div>
        {children}
      </section>
    </div>
  );
}

export default ShowCard;
