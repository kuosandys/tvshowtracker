import React from "react";

// Display detailed information for a show
function ShowDetails({show}) {

    return (
      <div className="max-w-screen-lg mx-auto flex">
        <img
          src={show.image?.medium}
          alt="TV show poster"
          className="max-h-80 my-auto"
        />
        <section className="ml-10">
          <h2 className="text-3xl my-5">{show.name}</h2>
          <h3>
            <span className="font-bold">Country: </span>
            {show.network?.country?.name || "None"}
          </h3>
          <h3>
            <span className="font-bold">Language: </span>
            {show.language}
          </h3>
          <h3>
            <span className="font-bold">Premiered: </span>
            {show.premiered?.slice(0, 4) || "Unknown"}
          </h3>
          <h3>
            <span className="font-bold">Status: </span>
            {show.status}
          </h3>
          <h3>
            <span className="font-bold">Genres: </span>
            {show.genres?.join(", ")}
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: show.summary }}
            className="my-5"
          ></p>
        </section>
      </div>
    );
}

export default ShowDetails;
