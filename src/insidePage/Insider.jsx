import React from "react";
import Sidebar from "./Sidebar";
import ScreenShotes from "./ScreenShotes";
import Description from "./Description";
import RatingsAndReviews from "./RatingsAndReviews";

const Insider = () => {
  return (
    <div className="flex bg-custom-bg-bg-dark">
      <Sidebar />
      <div>
        <ScreenShotes />
        <Description />
        <RatingsAndReviews/>
      </div>
    </div>
  );
};

export default Insider;
