import React from "react";
import imagequiz from "../../assets/images/quiz2.png";

function Question1() {
  return (
    <div className="mb-24">
      <p className="mb-8 text-lg text-left">
        Give the scientific names of the recipe’s ingredient
      </p>
      <div className="flex flex-col items-center">
        <img src={imagequiz} alt="" className="mx-auto" />
        <p className="mt-2 font-bold text-lg italic text-center">
          Buttered Garlic Egg
        </p>
      </div>
      <p className="mt-8 text-lg text-left">Your Answer:</p>
    </div>
  );
}

export default Question1;
