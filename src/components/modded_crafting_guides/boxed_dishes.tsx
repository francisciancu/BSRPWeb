import React from "react";

const BoxedDishes = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        Boxed Dishes
      </h1>
      <table className="w-full table-auto border-collapse shadow-lg">
        <thead>
          <tr className="bg-[#5789F6] text-white">
            <th className="px-4 py-2 text-left">CRAFTED ITEM</th>
            <th className="px-4 py-2 text-left">RECIPE</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              item: "Fried Potatoes",
              recipe:
                "4x Potato, 1x Fat. Fry in a pan. Fill into an empty box.",
            },
            {
              item: "Stir Fry",
              recipe:
                "1x Potato, 1x Tomato, 1x Zucchini, 1x Pepper, 1x Fat. Fry in a pan. Fill into an empty box.",
            },
            {
              item: "Fish and Chips",
              recipe:
                "2x Potato, 1x Fish Fillet (Any), 1x Fat. Fry in a pan. Fill into an empty box.",
            },
            {
              item: "Rice Pudding",
              recipe:
                "1x Rice, 1x Powdered Milk, 2x Fruit (Any). Boil in a pot or cauldron with at least 500ml of water. Fill into an empty box.",
            },
            {
              item: "Mushroom Risotto",
              recipe:
                "1x Rice, 2x Mushroom (Any). Boil in a pot or cauldron with at least 500ml of water. Fill into an empty box.",
            },
            {
              item: "Pilaf",
              recipe:
                "1x Rice, 2x Pepper, 2x Tomato. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty box.",
            },
            {
              item: "Stuffed Peppers",
              recipe:
                "3x Pepper, 2x Meat (Any). Bake in a pot or cauldron with at least 500ml of water. Fill into an empty box.",
            },
            {
              item: "Gagh",
              recipe:
                "8x Worm. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty box.",
            },
            {
              item: "Haggis w/ Mashed Potatoes",
              recipe:
                "1x Guts, 2x Potato. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty box.",
            },
            {
              item: "PommDöener",
              recipe:
                "1x Beef Steak, 2x Potato, 1x Fat. Fry in a pan. Fill into an empty box.",
            },
            {
              item: "Bangers & Mash",
              recipe:
                "1x Sausage (Any), 2x Potato. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty box.",
            },
            {
              item: "Currywurst",
              recipe:
                "1x Sausage (Any), 1x Fat, 1x Potato, 1x Tomato. Fry in a pan. Fill into an empty box.",
            },
          ].map((row, index) => (
            <tr
              key={index}
              id={row.item.replace(/\s+/g, "-").toLowerCase()}
              className={`${
                index % 2 === 0 ? "bg-[#1b1e29]" : "bg-[#2c2f38]"
              } hover:bg-[#3e4251]`}
            >
              <td className="px-4 py-2">{row.item}</td>
              <td className="px-4 py-2">{row.recipe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoxedDishes;
