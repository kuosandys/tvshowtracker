import React from "react";

function Layout1({ child1, child2 }) {
  return (
    <div>
      <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto pt-10 pb-5 flex flex-col bg-gray-900 text-white">
        {child1}
      </div>
      <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto bg-white">
        {child2}
      </div>
    </div>
  );
}

export default Layout1;
