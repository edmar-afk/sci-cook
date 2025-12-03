import React from "react";
import { motion } from "framer-motion";
import eggdishes from "../../assets/images/ingredients/eggdishes.jpg";
import { cards } from "./useIngredients";

function FirstIngredients() {
  return (
    <div>
      <div className="relative">
        <p className="absolute bottom-8 left-7 bg-gradient-to-r from-pink-700/100 to-pink-500/70 font-bold text-2xl py-6 px-14 text-white">
          Egg Dishes
        </p>

        <img src={eggdishes} className="w-full" alt="" />
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
              <div className="p-8 min-h-[180px] flex flex-col">
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
        These ingredients form the essential building blocks of many egg-based
        dishes. <b>Eggs</b> serve as the main protein source, while seasonings
        like <b>salt</b> and <b>pepper</b> enhance flavor. Cooking{" "}
        <b>oil or butter</b> provides the necessary fat for frying and adds
        richness. <b>Milk</b> contributes creaminess and improves texture,
        especially in scrambled eggs and omelets. <br /> <br />
        Aromatics like <b>onion</b> bring depth of flavor, while <b>tomato</b>{" "}
        adds acidity, color, and freshness. <b>Cheese</b> introduces creaminess
        and a savory, melty texture that complements eggs perfectly. Together,
        these ingredients create a balanced combination of protein, flavor,
        aroma, richness, and texture, making them the core components for a wide
        variety of egg dishes—from simple fried eggs to flavorful omelets,
        scrambles, and breakfast skillets.
      </motion.p>
    </div>
  );
}

export default FirstIngredients;
