import React from "react";

function PrimaryButton(props) {
  const { children } = props;
  return (
    <button
      className="bg-gray-700 hover:bg-gray-800 text-white rounded-full px-4 py-1.5 mx-3 whitespace-nowrap"
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
