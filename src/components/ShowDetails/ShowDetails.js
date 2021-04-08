import React from "react";

// Display detailed information for a show
function ShowDetails({ show }) {
  return (
    <div>
      <div className="flex">
        <img
          src={show.image?.medium}
          alt="TV show poster"
          className="lg:max-h-80 md:max-h-80 my-auto sm:max-h-24"
        />
        <section className="ml-10 my-auto">
          <h2 className="text-3xl font-medium my-5">{show.name}</h2>
          <h3>
            <span className="text-indigo-500">Network: </span>
            {show.network?.name || "-"}
          </h3>
          <h3>
            <span className="text-indigo-500">Country: </span>
            {show.network?.country?.name || "-"}
          </h3>
          <h3>
            <span className="text-indigo-500">Language: </span>
            {show.language}
          </h3>
          <h3>
            <span className="text-indigo-500">Premiered: </span>
            {show.premiered?.slice(0, 4) || "-"}
          </h3>
          <h3>
            <span className="text-indigo-500">Status: </span>
            {show.status}
          </h3>
          <h3>
            <span className="text-indigo-500">Genres: </span>
            {show.genres?.join(", ")}
          </h3>
        </section>
      </div>
      <section>
        <p
          dangerouslySetInnerHTML={{ __html: show.summary }}
          className="mt-5 leading-relaxed"
        ></p>
      </section>
    </div>
  );
}

export default ShowDetails;
