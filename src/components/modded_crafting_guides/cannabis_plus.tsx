import React from "react";

const CannabisPlus = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        CannabisPlus
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-8 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#5789F6] text-white">
              <th className="px-4 py-2 text-left">CRAFTED ITEM</th>
              <th className="px-4 py-2 text-left">RECIPE</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                item: "Cannabis Baggy",
                recipe: "2x Cannabis Bud (Any), 1x Empty Bag.",
              },
              {
                item: "Cannabis Brick",
                recipe: "16x Cannabis Bag (Same kind), 1x Duct Tape.",
              },
              {
                item: "Joint",
                recipe: "1x Rolling Paper (Any), 1x Cannabis Bud (Any).",
              },
              {
                item: "Cigarette",
                recipe: "1x Rolling Paper (Any), 1x Tobacco Leaf.",
              },
              {
                item: "Pack of Joints",
                recipe: "1x Joint + Empty Cigarette Pack.",
              },
              {
                item: "Pack of Cigarettes",
                recipe: "1x Cigarette + Empty Cigarette Pack.",
              },
              {
                item: "Drying Post",
                recipe: "1x Wooden Log, 1x Rope.",
              },
              {
                item: "Cannabis Workbench",
                recipe:
                  "10x Planks, 20x Nails. (Do not use, not needed to make any of the above items on this server!)",
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

export default CannabisPlus;
