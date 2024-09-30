import React from "react";

const EnhancedFlags = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        Enhanced Flags
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
              item: "Flag Courier Backpack",
              recipe: "1x Flag (All Vanilla Flags Only), 1x Rope.",
            },
            {
              item: "Flag Backpack",
              recipe: "1x Flag Courier Backpack, 3x Short Stick.",
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

export default EnhancedFlags;
