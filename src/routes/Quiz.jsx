import React from "react";
import Header from "../components/home/Header";
import Table from "../components/quiz/Table";
function Quiz() {
  return (
    <div className="mb-44 overflow-x-hidden">
      <Header />
      <div className="mx-0 lg:mx-72 shadow-2xl pb-12">
        <div className="px-4 pt-2 lg:pt-14 ">
          <p className="lobster text-4xl text-pink-600">
            Interactive Practice{" "}
          </p>
         
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
         <Table/>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
