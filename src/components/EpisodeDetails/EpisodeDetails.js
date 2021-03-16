import React from "react";

function EpisodeDetails(props) {
  const { episode } = props;
  return (
    <div className="grid grid-cols-3 my-3">
      <section>
        <img src={episode.image.medium} alt={episode.name} />
        <h4>{`Aired ${episode.airdate} at ${episode.airtime}`}</h4>
      </section>

      <p
        dangerouslySetInnerHTML={{ __html: episode.summary }}
        className="col-span-2 pl-5"
      ></p>
    </div>
  );
}

export default EpisodeDetails;
