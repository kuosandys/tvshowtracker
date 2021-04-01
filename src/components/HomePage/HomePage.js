import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout2 from "../StyleComponents/Layout2";

import PrimaryButton from "../StyleComponents/PrimaryButton";
import { TrackedShowsContext } from "../ContextProviders/TrackedShowsContextProvider";

function HomePage() {
  const { setTrackedShows } = useContext(TrackedShowsContext);
  const handleTryItOut = () => {
    // Just some selected TV shows to try it out
    let data = [431, 172, 1825, 169, 210, 170];
    setTrackedShows(data);
  };

  return (
    <Layout2>
      <div className="w-full h-full bg-no-repeat bg-center bg-cover bg-tv-image flex flex-col items-center justify-center">
        <div className="bg-black  bg-opacity-80 rounded py-16 px-20 text-white flex flex-col items-center">
          <h1 className="text-4xl my-4 font-bold">What are you watching?</h1>
          <ul className="my-4 list-disc list-inside pl-10">
            <li>Browse our extensive catalog of TV shows</li>
            <li>Track the shows you're watching</li>
            <li>View episode details & mark the episodes you've seen</li>
            <li>See your stats</li>
          </ul>
          <div className="my-4">
            <Link to="/sign-up">
              <PrimaryButton>Sign Me Up!</PrimaryButton>
            </Link>
            <PrimaryButton onClick={handleTryItOut}>Try it Out</PrimaryButton>
          </div>
        </div>
      </div>
    </Layout2>
  );
}

export default HomePage;
