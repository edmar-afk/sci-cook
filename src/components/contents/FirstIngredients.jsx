/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import egg from "../../assets/images/ingredients/egg.png";
import carrot from "../../assets/images/ingredients/carrot.png";
import tomato from "../../assets/images/ingredients/tomato.png";
import eggIcon from "../../assets/images/icons/egg.png";
import carrotIcon from "../../assets/images/icons/carrot.png";
import tomatoIcon from "../../assets/images/icons/tomato.png";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

export default function FirstIngredients() {
  const images = [
    { src: egg, alt: "Egg" },
    { src: carrot, alt: "Carrot" },
    { src: tomato, alt: "Tomato" },
  ];

  const cardsData = [
    {
      icon: eggIcon,
      title: "Egg (Gallus gallus domesticus)",
      desc: "A fruit-vegetable widely used for its tangy flavor and juiciness. Common in salads, sauces, sautéed dishes, and garnishes. Contains vitamins A and C.",
    },
    {
      icon: carrotIcon,
      title: "Carrot (Daucus carota)",
      desc: "A root vegetable that is naturally sweet and crunchy. Often used in salads, stir-fried, sautéed, or cooked in soups. Rich in beta-carotene (Vitamin A) and dietary fiber.",
    },
    {
      icon: tomatoIcon,
      title: "Tomato (Solanum lycopersicum)",
      desc: "A fruit-vegetable widely used for its tangy flavor and juiciness. Common in salads, sauces, sautéed dishes, and garnishes. Contains vitamins A and C.",
    },
  ];

  const speakScientificName = (title) => {
    const match = title.match(/\(([^)]+)\)/);
    if (!match) return;
    const sciName = match[1];

    const utter = new SpeechSynthesisUtterance(sciName);
    utter.lang = "en-US";
    window.speechSynthesis.speak(utter);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="px-4"
      >
        <p className="font-bold text-2xl">Can you name these ingredients?</p>
        <p className="font-thin text-md">
          Have you used them before in cooking?
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center mt-8 gap-4 mx-0 lg:mx-8">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={img.alt}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-40 h-full lg:h-40 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="flex flex-col items-start flex-wrap justify-start mt-8">
        {cardsData.map((card, index) => {
          const initialAnimation =
            index % 2 === 0
              ? { x: -100, opacity: 0, scale: 1 }
              : index % 3 === 0
              ? { x: 0, opacity: 0, scale: 0 }
              : { x: 100, opacity: 0, scale: 1 };

          return (
            <motion.div
              key={index}
              initial={initialAnimation}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative items-center px-5 mx-auto w-full mb-4"
            >
              <div className="p-6 border-l-4 border-pink-500 rounded-r-xl bg-pink-100">
                <div className="flex flex-row items-start">
                  <div className="flex-shrink-0">
                    <img src={card.icon} className="w-12" alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-pink-600">
                      <p className="font-bold text-lg flex items-center gap-2">
                        {card.title}
                        <RecordVoiceOverIcon
                          fontSize="small"
                          className="text-blue-600 cursor-pointer"
                          onClick={() => speakScientificName(card.title)}
                        />
                      </p>
                      <p className="text-pink-500 mt-2">
                        <b>Description:</b> {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
