import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout2 from "../StyleComponents/Layout2";

import PrimaryButton from "../StyleComponents/PrimaryButton";
import { TrackedShowsContext } from "../ContextProviders/TrackedShowsContextProvider";
import Loading from "../StyleComponents/Loading";

function HomePage() {
  const { setTrackedShows } = useContext(TrackedShowsContext);
  const [isLoading, setIsLoading] = useState(true);
  const handleTryItOut = () => {
    // Just some selected TV shows to try it out
    let data = [431, 172, 1825, 169, 210, 170];
    setTrackedShows(data);
  };

  // Loading effect for UI while waiting for API calls to resolve
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-tv-image">
        <div className="bg-white bg-opacity-80 w-full h-full flex flex-col items-center justify-center">
          <div className="bg-indigo-200 bg-opacity-80 rounded h-4/6 w-4/6 text-gray-800 flex flex-col items-center justify-center">
            <h1 className="text-4xl my-4 text-indigo-700 italic">
              What are you watching?
            </h1>
            <ul className="my-4 list-disc list-inside pl-10">
              <li className="mb-2">Browse our extensive catalog of TV shows</li>
              <li className="mb-2">Track the shows you're watching</li>
              <li className="mb-2">
                View episode details & mark the episodes you've seen
              </li>
              <li>See your stats!</li>
            </ul>
            <div className="my-4">
              <Link to="/sign-up">
                <PrimaryButton>Sign Me Up</PrimaryButton>
              </Link>
              <PrimaryButton onClick={handleTryItOut}>Try It Out</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
