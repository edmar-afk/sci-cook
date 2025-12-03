/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import sandwiches from "../../assets/images/ingredients/sandwiches.jpg";
import { cards } from "./useIngredients";

function FirstIngredients() {
  return (
    <div>
      <div className="relative">
        <p className="absolute lobster bottom-8 left-7 bg-gradient-to-r from-pink-700/100 to-pink-500/70 font-bold text-2xl py-6 px-14 text-white">
          Sandwiches
        </p>

        <img src={sandwiches} className="w-full h-96 object-cover" alt="" />
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
                <a className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">
                  {item.subtitle}
                </a>
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
        This set of ingredients creates a classic, flavorful sandwich
        combination. <b>Bread</b> serves as the essential base, while{" "}
        <b>Butter / Margarine</b> adds a smooth, rich spread. Savory layers come
        from <b>Cheese</b> and the protein-packed <b>Ham / Luncheon meat</b>.
        Freshness and crunch are provided by <b>Lettuce, Tomato</b>, and
        everything is tied together with the creamy and seasoned blend of{" "}
        <b>Mayonnaise & Egg, Salt, Pepper</b>, enhancing both texture and taste.
      </motion.p>
    </div>
  );
}

export default FirstIngredients;
