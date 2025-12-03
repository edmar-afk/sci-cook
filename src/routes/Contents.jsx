import React from "react";
import Header from "../components/home/Header";
import Welcome from "../components/contents/Welcome";

function Contents() {
  return (
    <div>
      <Header />
      <div className="mx-0 lg:mx-72 shadow-2xl">
        <Welcome />
        
      </div>
    </div>
  );
}

export default Contents;
