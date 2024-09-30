import React from "react";

const BurlapRifleWinding = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        Burlap Rifle Winding
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
              item: "Burlap Rifle Winding",
              recipe: "1x Netting, 2x Burlap Strips.",
            },
            {
              item: "Grassy Rifle Winding",
              recipe: "1x Burlap Rifle Winding, 1x Plant Material.",
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

export default BurlapRifleWinding;
