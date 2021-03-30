import React from "react";

function Loading() {
  return (
    <div className="absolute top-0 h-full w-full bg-gray-100 flex justify-center items-center">
      <span className="h-12 w-12 animate-spin bg-white"> </span>
    </div>
  );
}

export default Loading;
