import React, { useReducer, useEffect } from "react";

// dummy data - set local storage when adding tv shows eventually
// const sampleEpisodeIds = [
//   { show: 1, episodes: [1, 2] },
//   { show: 2, episodes: [28, 29] },
// ];
// localStorage.setItem("userData", JSON.stringify(sampleEpisodeIds));

// Get/Set state with reducer function, using local storage
export const useLocalEpisodesState = (reducer, showId) => {
  const [watchedEpisodes, setWatchedEpisodes] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("userData"))?.find(
      (item) => item?.show === showId
    )?.episodes
  );

  // Store to local storage
  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("userData"));
    let selectedShow = localData?.find((item) => item?.show === showId);
    if (selectedShow) {
      selectedShow["episodes"] = watchedEpisodes;
      let newData = localData.filter((item) => item.show !== showId);
      newData.push(selectedShow);
      localStorage.setItem("userData", JSON.stringify(newData));
    }
  }, [showId, watchedEpisodes]);

  return [watchedEpisodes, setWatchedEpisodes];
};

export const useLocalShowsState = (reducer) => {
  const [trackedShows, setTrackedShows] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("userData"))?.map((item) => item?.show) ||
      []
  );

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("userData"));
    let newData;
    if (localData) {
      newData = localData.filter((item) => trackedShows.includes(item.show));
      // if adding a show
      if (trackedShows.length > newData.length) {
        let showToAdd = trackedShows.find(
          (show) => !localData.map((items) => items.show).includes(show)
        );
        let newShow = { show: showToAdd, episodes: [] };
        newData = [...newData, newShow];
      }
    } else {
      newData = trackedShows.map((show) => {
        return { show: show, episodes: [] };
      });
    }
    localStorage.setItem("userData", JSON.stringify(newData));
  }, [trackedShows]);

  return [trackedShows, setTrackedShows];
};
