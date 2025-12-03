import React from "react";
import { motion } from "framer-motion";
import learningImg from "../assets/images/learning.png";
import Header from "../components/home/Header";
import { Link } from "react-router-dom";

function InteractiveExercise() {
  return (
    <div className="mb-44 overflow-x-hidden">
      <Header />
      <div className="mx-0 lg:mx-72 shadow-2xl pb-12">
        <motion.img
          src={learningImg}
          className="w-[30rem] mx-auto pt-2 lg:pt-24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        />

        <motion.p
          className="text-center text-3xl font-semibold px-12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          You reached Finish Line!
        </motion.p>

        <motion.p
          className="text-center text-lg font-extralight italic px-6 mt-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Are you ready to take on another challenge?
        </motion.p>

        <div className="flex justify-center mt-4 mb-44">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/quiz"
              className="bg-pink-600 rounded-full text-white py-2 px-12 flex items-center w-fit"
            >
              Take me there
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveExercise;
