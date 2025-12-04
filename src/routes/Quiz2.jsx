import React from "react";
import Header from "../components/home/Header";
import Question1 from "../components/quiz2/Question1";
function Quiz2() {
  return (
    <div className="mb-44 overflow-x-hidden">
      <Header />
      <div className="mx-0 lg:mx-72 shadow-2xl pb-12">
        <div className="px-4 pt-2 lg:pt-14 ">
          <p className="lobster text-4xl text-pink-600 uppercase">
            Application 
          </p>
        </div>
        <div className="mt-4 mx-2 lg:mx-14">
          <Question1 />
        </div>
      </div>
    </div>
  );
}

export default Quiz2;
