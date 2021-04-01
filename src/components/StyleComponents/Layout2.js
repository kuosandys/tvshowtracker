import React from "react";

function Layout2({ children }) {
  return (
    <div className="w-full h-full min-h-screen bg-white pt-20 flex flex-col items-stretch">
      {children}
    </div>
  );
}

export default Layout2;
