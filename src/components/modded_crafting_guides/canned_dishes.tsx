import React from "react";

const CannedDishes = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        Canned Dishes
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
              item: "Goulash",
              recipe:
                "2x Potato, 1x Pepper, 1x Meat (Any). Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Pumpkin Soup",
              recipe:
                "2x Pumpkin Slices. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Fish Soup",
              recipe:
                "2x Fish (Any), 1x Potato, 1x Tomato. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Ukha",
              recipe:
                "2x Fish (Any), 1x Potato, 1x Tomato, 1x Alcohol Disinfectant. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Lecsó",
              recipe:
                "2x Pepper, 2x Tomato, 1x Fat. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Tactical Bacon",
              recipe:
                "2x Pork Steak, 1x Fat. Fry in a pan, pot, or cauldron. Fill into an empty can.",
            },
            {
              item: "Mystery Meat",
              recipe:
                "3x Meat (Any), 1x Fat. Fry in a pan, pot, or cauldron. Fill into an empty can.",
            },
            {
              item: "Zucchini Caviar",
              recipe:
                "3x Zucchini, 1x Pepper, 1x Tomato. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Creamy Tomato Soup",
              recipe:
                "6x Tomato, 1x Powdered Milk. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Beef Stew",
              recipe:
                "1x Beef Steak, 1x Pepper, 1x Potato, 2x Tomato. Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Mushroom Stroganoff",
              recipe:
                "1x Powdered Milk, 5x Mushroom (Any). Boil in a pot or cauldron with at least 500ml of water. Fill into an empty can.",
            },
            {
              item: "Apple Marmalade",
              recipe:
                "6x Apple. Boil in a pot or cauldron without water. Fill into an empty can.",
            },
            {
              item: "Plum Marmalade",
              recipe:
                "6x Plum. Boil in a pot or cauldron without water. Fill into an empty can.",
            },
            {
              item: "Pear Marmalade",
              recipe:
                "6x Pear. Boil in a pot or cauldron without water. Fill into an empty can.",
            },
          ].map((row, index) => (
            <tr
              key={index}
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

export default CannedDishes;
