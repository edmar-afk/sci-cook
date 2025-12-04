import React from "react";
import imagequiz from "../../assets/images/quiz2.png";

function Question1() {
  return (
    <div className="mb-24">
      <p className="mt-24 mb-3 text-lg text-center">
        Give the ingredients of this recipe with its scientific name and explain
        the use briefly.
      </p>
      <div className="flex flex-col items-center">
        <img src={imagequiz} alt="" className="mx-auto" />
        <p className="mt-2 font-bold text-lg italic text-center">
          Buttered Garlic Egg
        </p>
      </div>
    </div>
  );
}

export default Question1;
