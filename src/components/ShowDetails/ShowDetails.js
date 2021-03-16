import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Display detailed information for a show
function ShowDetails() {
  const { showId } = useParams();

  const [show, setShow] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchShowData = async () => {
      let response = await fetch(`http://api.tvmaze.com/shows/${showId}`);
      let data = await response.json();
      setShow(data);
      setIsLoaded(true);
    };
    fetchShowData();
  }, [showId]);

  if (isLoaded) {
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
            {show.network?.country?.name}
          </h3>
          <h3>
            <span className="font-bold">Language: </span>
            {show.language}
          </h3>
          <h3>
            <span className="font-bold">Premiered: </span>
            {show.premiered?.slice(0, 4)}
          </h3>
          <h3>
            <span className="font-bold">Status: </span>
            {show.status}
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: show.summary }}
            className="my-5"
          ></p>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }
}

export default ShowDetails;
