// Gets the user's top 3 genres
export const getTopGenres = (showsData) => {
  let showGenres = showsData
    .map((show) => show.genres)
    .reduce((prev, current) => prev.concat(current), []);
  let genreObject = {};
  for (let genre of showGenres) {
    genreObject[genre] = genreObject.hasOwnProperty(genre)
      ? (genreObject[genre] += 1)
      : 1;
  }
  let genreArray = [...Object.entries(genreObject)];
  let top3 = genreArray
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0])
    .slice(0, 3);
  return top3;
};

// Get user's watch time
export const getWatchTime = (episodesData, watchedEpisodes) => {
  let watchTime = episodesData
    .filter((episode) => watchedEpisodes.includes(episode.id))
    .map((episode) => episode.runtime)
    .reduce((prev, current) => prev + current, 0);
  return watchTime;
};
