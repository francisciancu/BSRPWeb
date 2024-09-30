import React from "react";

const CookZ = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        CookZ
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
                item: "Disinfect Rags",
                recipe:
                  "Boil rags in a pot or cauldron with at least 500ml of water (use more to keep it boiling) to disinfect.",
              },
              {
                item: "Empty Can (10x)",
                recipe: "1x Metal Sheet, 1x Hacksaw.",
              },
              {
                item: "Empty Box",
                recipe:
                  "Combine 2x pieces of paper or cut some bark off a tree and combine with an axe or knife.",
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

export default CookZ;
