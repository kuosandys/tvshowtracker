import React from "react";

function Layout2({ children }) {
  return (
    <div className="w-full min-h-full bg-white pt-10 flex flex-col items-stretch">
      {children}
    </div>
  );
}

export default Layout2;
