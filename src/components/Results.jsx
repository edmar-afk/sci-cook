import React from "react";
import Confetti from "react-confetti";
import { useLocation, useNavigate } from "react-router-dom";

function Results({ open, handleClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (!open) return null;

  const handleProceed = () => {
    if (location.pathname === "/contents") {
      navigate("/content2");
    } else if (location.pathname === "/content2") {
      navigate("/content3");
    } else if (location.pathname === "/content3") {
      navigate("/content4");
    } else if (location.pathname === "/content4") {
      navigate("/content5");
    } else if (location.pathname === "/content5") {
      navigate("/content6");
    } else if (location.pathname === "/content6") {
      navigate("/content7");
    }
    window.scrollTo(0, 0);
    handleClose();
  };

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-xs z-50">
      {" "}
      <h1 className="text-white text-5xl text-center mb-5 lobster">
        Congratulations!{" "}
      </h1>{" "}
      <p className="px-4 lg:px-96 text-white text-center">
        Great Start! You’ve successfully grasped the basics—this is the
        foundation for everything else! Keep up the curiosity and keep building
        on what you’ve learned. You're off to a fantastic start!{" "}
      </p>{" "}
      <button
        onClick={handleProceed}
        className="mt-4 bg-pink-200 py-2 px-8 rounded-full text-pink-800"
      >
        Proceed to Next{" "}
      </button>{" "}
      <Confetti width={window.innerWidth} height={window.innerHeight} />{" "}
    </div>
  );
}

export default Results;
