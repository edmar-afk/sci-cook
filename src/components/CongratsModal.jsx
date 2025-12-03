import React from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
function CongratsModal() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-xs z-50">
      {" "}
      <h1 className="text-white text-5xl text-center mb-5 lobster">
        Congratulations!{" "}
      </h1>
      <p className="px-4 lg:px-96 text-white text-center">
        Great Start! You’ve successfully grasped the basics—this is the
        foundation for everything else! Keep up the curiosity and keep building
        on what you’ve learned. You're off to a fantastic start!
      </p>
      <Link to={"/content2"} className="mt-4 bg-pink-200 py-2 px-8 rounded-full text-pink-800">Proceed to Next</Link>
      <Confetti width={window.innerWidth} height={window.innerHeight} />{" "}
    </div>
  );
}

export default CongratsModal;
