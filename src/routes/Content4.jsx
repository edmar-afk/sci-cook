import React, { useState } from "react";
import Header from "../components/home/Header";
import FirstIngredients from "../components/content4/FirstIngredients";
import SadModal from "../components/SadModal";
import CongratsModal from "../components/CongratsModal";
import happinessIcon from "../assets/images/icons/happiness.png";
import depressionIcon from "../assets/images/icons/depression.png";
import { Link } from "react-router-dom";
function Content4() {
  const [isSadModalOpen, setSadModalOpen] = useState(false);
  const [isCongratsOpen, setCongratsOpen] = useState(false);

  const handleSadModalOpen = () => setSadModalOpen(true);
  const handleSadModalClose = () => setSadModalOpen(false);

  const handleCongratsOpen = () => setCongratsOpen(true);
  const handleCongratsClose = () => setCongratsOpen(false);

  return (
    <div className="mb-44 overflow-x-hidden">
      <Header />

      <div className="mx-0 lg:mx-72 shadow-2xl pb-12">
        <FirstIngredients />

        <div className="flex flex-col items-center justify-center mt-24">
          {/* <p>Have you learn anything so far?</p> */}

          <div className="mt-4 flex flex-row items-center gap-4">
            <Link
              to={"/content5"}
              className="bg-green-600 text-white px-12 py-2 rounded-lg flex flex-row items-center gap-2 cursor-pointer"
            >
              Next
            </Link>

            <Link
              to={"/content3"}
              className="bg-gray-600 text-white px-12 py-2 rounded-lg flex flex-row items-center gap-2 cursor-pointer"
            >
              Back
            </Link>
          </div>
        </div>
      </div>

      <SadModal open={isSadModalOpen} handleClose={handleSadModalClose} />

      <CongratsModal open={isCongratsOpen} handleClose={handleCongratsClose} />
    </div>
  );
}

export default Content4;
