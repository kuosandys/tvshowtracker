import React from "react";

function Layout1({ child1, child2 }) {
  return (
    <div className="lg:w-4/6 md:w-5/6 sm:w-full pt-10">
      <div className="w-full pt-14 pb-10 px-14 flex flex-col bg-gray-900 text-white">
        {child1}
      </div>
      <div className="w-full bg-white">{child2}</div>
    </div>
  );
}

export default Layout1;
