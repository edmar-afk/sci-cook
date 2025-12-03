import React from "react";
import eggdishes from "../../assets/images/ingredients/eggdishes.jpg";
import { cards } from "./useIngredients";

function FirstIngredients() {
  return (
    <div>
      <p className="font-bold text-2xl text-center lg:text-left py-8 px-4">
        Egg Dishes
      </p>
      <img src={eggdishes} alt="" />
      <div className="px-4 mt-8 flex flex-row items-center justify-evenly gap-4 flex-wrap">
        {cards.map((item, index) => (
          <div
            key={index}
            className="w-[350px] lg:w-[300px] bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div>
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={item.img}
                />
              </div>
              <div className="p-8 min-h-[180px] flex flex-col">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {item.title}
                </div>
                <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {item.subtitle}
                </a>
                <p className="mt-2 text-slate-500">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FirstIngredients;
