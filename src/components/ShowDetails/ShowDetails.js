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
      <div>
        <h2>{show.name}</h2>
        <img src={show.image.medium} alt="TV show poster" />
        <h3>{`Country: ${show.network.country.code}`}</h3>
        <h3>{`Language: ${show.language}`}</h3>
        <h3>{`Premiered: ${show.premiered.slice(0, 4)}`}</h3>
        <h3>{`Status: ${show.status}`}</h3>
        <p>{show.summary}</p>
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
