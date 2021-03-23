import React from "react";

// Display detailed information for a show
function ShowDetails({ show }) {
  return (
    <div>
      <div className="ml-10 flex">
        <img
          src={show.image?.medium}
          alt="TV show poster"
          className="max-h-80 my-auto"
        />
        <section className="ml-10 my-auto">
          <h2 className="text-3xl font-medium my-5">{show.name}</h2>
          <h3>
            <span className="text-indigo-200">Country: </span>
            {show.network?.country?.name || "None"}
          </h3>
          <h3>
            <span className="text-indigo-200">Language: </span>
            {show.language}
          </h3>
          <h3>
            <span className="text-indigo-200">Premiered: </span>
            {show.premiered?.slice(0, 4) || "Unknown"}
          </h3>
          <h3>
            <span className="text-indigo-200">Status: </span>
            {show.status}
          </h3>
          <h3>
            <span className="text-indigo-200">Genres: </span>
            {show.genres?.join(", ")}
          </h3>
        </section>
      </div>
      <section>
        <p
          dangerouslySetInnerHTML={{ __html: show.summary }}
          className="my-5 mx-10 leading-relaxed"
        ></p>
      </section>
    </div>
  );
}

export default ShowDetails;
