import React from "react";

const RaGHuntingCabin = () => {
  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-4xl font-bold text-center text-[#5789F6] my-6">
        RaG Hunting Cabin
      </h2>
      <table className="w-full border-collapse mb-8 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#5789F6] text-white">
          <tr>
            <th className="p-4 text-left">ITEM</th>
            <th className="p-4 text-left">RECIPE</th>
          </tr>
        </thead>
        <tbody>
          {[
            { item: "Hunting Cabin Kit", recipe: "10x Planks & 50x Nails." },
            {
              item: "Hunting Cabin (Full)",
              recipe: "20x Logs, 100x Planks, 32x Stones, & 99x Nails.",
            },
          ].map((row, index) => (
            <tr
              key={index}
              id={row.item.replace(/\s+/g, "-").toLowerCase()}
              className={`${
                index % 2 === 0 ? "bg-[#1b1e29]" : "bg-[#2c2f38]"
              } hover:bg-[#3e4251]`}
            >
              <td className="p-4">{row.item}</td>
              <td className="p-4">{row.recipe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaGHuntingCabin;
