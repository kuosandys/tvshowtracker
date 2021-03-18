import React from "react"

function Stats({showsData, watchedEpisodesData}) {
  return (
    <div>
      <h1>Watch Stats</h1>
      <h2><span>Number of Shows</span>{showsData.length}</h2>
      <h2><span>Number of Episodes</span>{watchedEpisodesData.length}</h2>
      <h2><span>Minutes Watched</span>{watchedEpisodesData.reduce((prev, current) => prev + current.runtime, 0)}</h2>
      <h2><span>Top Genres</span></h2>
    </div>
  )
}

export default Stats