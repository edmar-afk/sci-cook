/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import salad_dressing from "../../assets/images/ingredients/salad_dressing.jpg";
import { cards } from "./useIngredients";

function FirstIngredients() {
  return (
    <div>
      {" "}
      <div className="relative">
        <p className="absolute bottom-8 left-7 bg-gradient-to-r from-pink-700/100 to-pink-500/70 font-bold text-2xl py-6 px-14 text-white">
          Salads & Dressings
        </p>

        <img src={salad_dressing} className="w-full" alt="" />
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
        This selection highlights fresh fruits and vegetables perfect for salads
        and light dishes. <b>Apple, Banana, Pineapple, Melon</b> provide sweet
        and refreshing flavors, while <b>Lettuce, Cucumber, Carrot, Cabbage</b>{" "}
        add crispness and nutrients. <b>Mayonnaise</b> offers a creamy touch,
        and <b>Vinegar</b> brings a tangy acidity to balance flavors. Essential
        seasonings like <b>Oil, Sugar, Salt, Pepper</b> help enhance and
        harmonize the taste of the dish.
      </motion.p>
    </div>
  );
}

export default FirstIngredients;
