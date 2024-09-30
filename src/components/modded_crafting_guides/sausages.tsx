import React from "react";

const Sausages = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        Sausages
      </h1>
      <div className="overflow-x-auto">
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
                item: "Beef Sausages",
                recipe:
                  "1x Guts, 1x Beef Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Chicken Sausages",
                recipe:
                  "1x Guts, 3x Chicken Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Pig Sausages",
                recipe:
                  "1x Guts, 2x Pork Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Goat Sausages",
                recipe:
                  "1x Guts, 2x Chevon Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Bear Sausages",
                recipe:
                  "1x Guts, 1x Bear Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Sheep Sausages",
                recipe:
                  "1x Guts, 2x Mutton Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Boar Sausages",
                recipe:
                  "1x Guts, 2x Boar Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Deer Sausages",
                recipe:
                  "1x Guts, 2x Venison Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Hare Sausages",
                recipe:
                  "1x Guts, 2x Hare Leg. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Wolf Sausages",
                recipe:
                  "1x Guts, 2x Wolf Steak. Put it all in a pot or cauldron without water.",
              },
              {
                item: "Human Sausages",
                recipe:
                  "1x Guts, 2x Human Steak. Put it all in a pot or cauldron without water.",
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
    </div>
  );
};

export default Sausages;
