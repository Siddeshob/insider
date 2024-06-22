import React from "react";
import ImageCarousel from "./ImageCarousel";

const ScreenShotes = () => {
  return (
    <div className="relative ml-[390px] m-1 bg-custom-dark text-white rounded-lg">
      <div className="h-[450px] w-[73vw] ">
        <div className="px-6 py-4">ScreenShotes

        </div>
        <hr />
        <div className="">
            <ImageCarousel/>
        </div>
      </div>
    </div>
  );
};

export default ScreenShotes;
