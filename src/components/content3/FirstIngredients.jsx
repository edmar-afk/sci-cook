import React from "react";
import { motion } from "framer-motion";
import { cards } from "./useIngredients";
import ReactPlayer from "react-player";

function FirstIngredients() {


  const speakText = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utter.voice =
      voices.find((v) => v.lang === "en-US" && v.name.includes("Google")) ||
      voices[0];
    utter.rate = 0.8;
    utter.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  return (
    <div>
      <div className="relative">
        <p className="z-50 absolute lobster bottom-8 left-7 bg-gradient-to-r from-pink-700/100 to-pink-500/70 font-bold text-2xl py-6 px-14 text-white">
          Vegetable Dishes
        </p>

        <div className="w-full h-[35rem] overflow-hidden rounded-xl relative">
          <ReactPlayer
            className="absolute top-0 left-0"
            src="https://www.youtube.com/watch?v=Qb5Amsjdw5Q"
            controls
            width="100%"
            height="100%"
            playing={true}
          />
        </div>
      </div>

      <div className="px-4 mt-8 flex flex-row items-center justify-evenly gap-4 flex-wrap">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className="w-[350px] lg:w-[300px] bg-white rounded-xl shadow-md overflow-hidden"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover" src={item.img} />
              </div>

              <div className="p-8 min-h-[205px] flex flex-col">
                <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold">
                  {item.title}
                </div>

                <button
                  onClick={() => speakText(item.subtitle)}
                  className="block mt-1 text-lg leading-tight font-bold text-black hover:underline text-left"
                >
                  <i className="italic cursor-pointer">{item.subtitle}</i>
                </button>

                <p className="mt-2 text-slate-500">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="px-8 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        This recipe features a variety of nutritious and flavorful ingredients.{" "}
        <b>Carrot</b> is a sweet, crunchy root vegetable rich in beta-carotene,
        while <b>Cabbage</b> provides fiber and essential vitamins.{" "}
        <b>Pechay/Bok Choy</b> adds leafy greens high in vitamins, complemented
        by aromatic <b>Onion, Garlic, Tomato</b> for depth of flavor.{" "}
        <b>Milk</b> contributes creaminess and nutrients, and{" "}
        <b>Cooking oil, Salt, Pepper</b> serve as essential seasonings. The
        combination of <b>Cauliflower, Broccoli</b> brings fiber and vitamin C,
        while <b>Bell pepper, Sitaw/String beans</b> enhance stir-fry dishes.{" "}
        <b>Soy sauce</b> adds savory flavor, and <b>Water</b> acts as the
        cooking medium, bringing all elements together harmoniously.
      </motion.p>
    </div>
  );
}

export default FirstIngredients;
