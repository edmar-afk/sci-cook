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
      </p>
    </div>
  );
}

export default FirstIngredients;
