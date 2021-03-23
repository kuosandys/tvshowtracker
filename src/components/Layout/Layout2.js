import React from "react";

function Layout2({ children }) {
  return (
    <div className="lg:max-w-screen-lg md:max-w-screen-md mx-auto h-full min-h-screen bg-white pt-10">
      {children}
    </div>
  );
}

export default Layout2;
