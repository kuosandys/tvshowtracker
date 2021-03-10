import React from "react";

function AddRemoveShow(props) {
  const { handleAddRemoveShow, inWatchList } = props;

  return (
    <button onClick={handleAddRemoveShow}>
      {inWatchList ? `Remove Show` : `Add Show`}
    </button>
  );
}

export default AddRemoveShow;
