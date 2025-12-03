import React from "react";
import contentbg from "../../assets/images/contentbg.jpg";
function Welcome() {
  return (
    <div className="h-full lg:h-[500px] overflow-hidden relative">
      <img
        src={contentbg}
        className="mx-auto scale-x-[-1] w-full bg-cover"
        draggable={false}
        alt=""
      />
      <p className="lobster absolute border-b-2 border-pink-500 border-dashed bottom-8 sm:bottom-14 left-14 text-2xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-pink-500">
        Welcome to <br/> SciCook
      </p>
    </div>
  );
}

export default Welcome;
