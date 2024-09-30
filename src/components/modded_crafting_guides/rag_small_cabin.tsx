import React from "react";

const RaGSmallCabin = () => {
  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-4xl font-bold text-center text-[#5789F6] my-6">
        RaG Small Cabin
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-8 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#5789F6] text-white">
            <tr>
              <th className="p-4 text-left">ITEM</th>
              <th className="p-4 text-left">RECIPE</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "Cabin Kit", recipe: "10x Planks & 50x Nails." },
              {
                item: "Cabin Foundation",
                recipe:
                  "20x Logs, 32x Planks, 0x Stones, 0x Nails, 0x Metal Plate.",
              },
              {
                item: "Cabin Back Wall",
                recipe: "20x Logs, 0x Planks, 30x Nails.",
              },
              {
                item: "Cabin Front Wall",
                recipe: "20x Logs, 0x Planks, 30x Nails.",
              },
              {
                item: "Cabin Right Wall",
                recipe: "20x Logs, 0x Planks, 30x Nails.",
              },
              {
                item: "Cabin Left Wall",
                recipe: "20x Logs, 20x Planks, 30x Nails.",
              },
              { item: "Cabin Door", recipe: "10x Planks, 20x Nails." },
              {
                item: "Cabin Roof",
                recipe: "20x Logs, 20x Planks, 40x Nails.",
              },
              {
                item: "Cabin Shutter Front",
                recipe: "20x Planks, 10x Nails.",
              },
              {
                item: "Cabin Shutter Back",
                recipe: "20x Planks, 10x Nails.",
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
    </div>
  );
};

export default RaGSmallCabin;
