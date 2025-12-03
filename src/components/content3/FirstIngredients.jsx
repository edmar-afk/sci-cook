import React from "react";
import vegetabledishes from "../../assets/images/ingredients/vegetabledishes.png";
import { cards } from "./useIngredients";

function FirstIngredients() {
  return (
    <div>
      <p className="font-bold text-2xl text-center lg:text-left py-8 px-4">
        Vegetable Dishes
      </p>
      <img src={vegetabledishes} className="w-full" alt="" />
      <div className="px-4 mt-8 flex flex-row items-center justify-evenly gap-4 flex-wrap">
        {cards.map((item, index) => (
          <div
            key={index}
            className="w-[350px] lg:w-[300px] bg-white rounded-xl shadow-md overflow-hidden"
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
          </div>
        ))}
      </div>

      <p className="px-8 mt-8">
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
      </p>
    </div>
  );
}

export default FirstIngredients;
