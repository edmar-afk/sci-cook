import React from "react";
import Header from "../components/home/Header";
import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FirstIngredients from "../components/content2/FirstIngredients";

function Content2() {

  return (
    <div className="mb-44 overflow-x-hidden">
      <Header />

      <div className="mx-0 lg:mx-72 shadow-2xl pb-12">
        
        <FirstIngredients/>
      </div>
    </div>
  );
}

export default Content2;
