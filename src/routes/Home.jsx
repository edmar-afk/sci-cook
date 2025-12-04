import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Reference from "./Reference";
import Reflection from "./Reflection";
import Key from "./Key";

export default function Home() {
  const [openReference, setOpenReference] = useState(false);
  const [openReflection, setOpenReflection] = useState(false);
  const [openKeys, setOpenKeys] = useState(false);

  return (
    <div className="bg-gradient-to-br from-pink-900 via-purple-900 to-pink-800 text-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink-500 opacity-20 floating"></div>
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-purple-500 opacity-20 floating-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-pink-500 opacity-20 floating-slower"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-pink-300 opacity-20 floating"></div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight lobster">
                Development of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Qr code
                </span>{" "}
                Based Chart
              </h1>

              <p className="text-lg md:text-xl text-pink-200 mb-8 max-w-lg mx-auto md:mx-0 ">
                Instructional Material Integrating Scientific Names and
                Termiologies in Grade 8 Cookery
              </p>

              <div className="flex flex-row items-stretch gap-3 md:mx-0 mb-10 w-full">
                <div className="flex flex-row mx-auto lg:mx-0 items-center flex-wrap gap-4">
                  <p
                    onClick={() => setOpenReflection(true)}
                    className="uppercase text-sm lg:text-lg font-semibold cursor-pointer text-pink-300 hover:text-white duration-300 hover:underline"
                  >
                    Reflection
                  </p>
                  |
                  <p
                    onClick={() => setOpenKeys(true)}
                    className="uppercase text-sm lg:text-lg font-semibold cursor-pointer text-pink-300 hover:text-white duration-300 hover:underline"
                  >
                    Key Takeaways
                  </p>
                  |
                  <p
                    onClick={() => setOpenReference(true)}
                    className="uppercase text-sm lg:text-lg font-semibold cursor-pointer text-pink-300 hover:text-white duration-300 hover:underline"
                  >
                    Reference
                  </p>
                </div>
              </div>

              <Link
                to={"/contents"}
                className="w-fit p-4 rounded-full mx-auto md:mx-0 bg-pink-600 border-2 border-dashed cursor-pointer hover:scale-110 duration-300"
              >
                <ArrowForwardIcon />
              </Link>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
                <img
                  src={logo}
                  alt="Illustration"
                  className="relative z-10 mx-auto rounded-full w-52 lg:w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 border-t border-white/10">
        <div className="flex flex-row justify-evenly items-center flex-wrap gap-3">
          <div className="text-sm text-pink-300">Thesis Project of 2025</div>
        </div>
      </footer>

      <Reference open={openReference} onClose={() => setOpenReference(false)} />
      <Key open={openKeys} onClose={() => setOpenKeys(false)} />
      <Reflection
        open={openReflection}
        onClose={() => setOpenReflection(false)}
      />
    </div>
  );
}
