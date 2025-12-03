import React, { useState } from "react";
import Header from "../components/home/Header";
import Welcome from "../components/contents/Welcome";
import Introduction from "./Introduction";
import FirstIngredients from "../components/contents/FirstIngredients";
import Hr from "../components/Hr";
import SadModal from "../components/SadModal";
import CongratsModal from "../components/CongratsModal";
import happinessIcon from "../assets/images/icons/happiness.png";
import depressionIcon from "../assets/images/icons/depression.png";

function Contents() {
  const [isSadModalOpen, setIsSadModalOpen] = useState(false);
  const [isCongratsOpen, setIsCongratsOpen] = useState(false);

  const handleSadModalOpen = () => setIsSadModalOpen(true);
  const handleSadModalClose = () => setIsSadModalOpen(false);

  const handleCongratsOpen = () => setIsCongratsOpen(true);

  return (
    <div className="mb-44 overflow-x-hidden">
      {" "}
      <Header />{" "}
      <div className="mx-0 lg:mx-72 shadow-2xl pb-12">
        {" "}
        <Welcome />{" "}
        <div className="mx-0 lg:mx-24">
          {" "}
          <Introduction /> <Hr /> <FirstIngredients />{" "}
        </div>{" "}
        <div className="flex flex-col items-center justify-center mt-24">
          {" "}
          <p>Have you learn anything so far?</p>{" "}
          <div className="mt-4 flex flex-row items-center gap-4">
            {" "}
            <p
              className="bg-green-600 text-white px-12 py-2 rounded-lg flex flex-row items-center gap-2 justify-start cursor-pointer"
              onClick={handleCongratsOpen}
            >
              {" "}
              <img src={happinessIcon} className="w-6" alt="Happiness Icon" />
              Yes{" "}
            </p>
            <p
              className="bg-red-600 text-white px-12 py-2 rounded-lg flex flex-row items-center gap-2 justify-start cursor-pointer"
              onClick={handleSadModalOpen}
            >
              <img src={depressionIcon} className="w-6" alt="Depression Icon" />
              No
            </p>
          </div>
        </div>
      </div>
      <SadModal open={isSadModalOpen} handleClose={handleSadModalClose} />
      <CongratsModal
        open={isCongratsOpen}
        handleClose={() => setIsCongratsOpen(false)}
      />
    </div>
  );
}

export default Contents;
