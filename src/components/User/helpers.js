// Get all episodes data for an array of show id's
export const fetchAllEpisodesData = async (showIds) => {
  let fetchedData = [];

  try {
    await Promise.all(
      showIds.map(async (showId) => {
        // Episodes data returned from TVmaze API does not have show name or timezone
        // We add it as an extra field to each episode
        let showResponse = await fetch(`http://api.tvmaze.com/shows/${showId}`);
        let showData = await showResponse.json();
        let showName = showData.name;
        let timezone = showData.network?.country?.timezone;

        // Get episodes data
        let episodesResponse = await fetch(
          `https://api.tvmaze.com/shows/${showId}/episodes?specials=1`
        );
        let episodesData = await episodesResponse.json();

        episodesData = episodesData.map((episodeData) => {
          return { ...episodeData, show: showName, timezone: timezone };
        });
        fetchedData = [...fetchedData, ...episodesData];
      })
    );
    return fetchedData;
  } catch (error) {
    alert(error);
  }
};

export const fetchAllShowsData = async (showIds) => {
  let fetchedData = [];

  try {
    await Promise.all(
      showIds.map(async (showId) => {
        let response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        let data = await response.json();
        fetchedData.push(data);
      })
    );
    return fetchedData;
  } catch (error) {
    alert(error);
  }
};
