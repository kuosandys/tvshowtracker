import React from "react";

function PrimaryButton(props) {
  const { children } = props;
  return (
    <button
      className="bg-indigo-300 font-bold hover:bg-indigo-400 rounded px-3 py-1.5 mx-3 whitespace-nowrap"
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
