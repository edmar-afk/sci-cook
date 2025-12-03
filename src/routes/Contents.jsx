import React from "react";
import Header from "../components/home/Header";
import Welcome from "../components/contents/Welcome";
import Introduction from "./Introduction";
import FirstIngredients from "../components/contents/FirstIngredients";
import Hr from "../components/Hr";

function Contents() {
  return (
    <div className="mb-44">
      <Header />
      <div className="mx-0 lg:mx-72 shadow-2xl pb-12">
        <Welcome />
        <Introduction/>
        <Hr/>
        <FirstIngredients/>
      </div>
    </div>
  );
}

export default Contents;
