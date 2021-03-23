// Get unique seasons in ascending order
export const getSeasons = (episodesData) => {
  return [
    ...new Set(
      episodesData.reduce(
        (previous, current) => previous.concat(current.season),
        []
      )
    ),
  ].sort((a, b) => a - b);
};
