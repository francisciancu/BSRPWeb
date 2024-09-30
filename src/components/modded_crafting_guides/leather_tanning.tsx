import React from "react";

const LeatherTanning = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        Leather & Tanning
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
                item: "Cleaned Animal Pelt",
                recipe: "1x Any Knife & 1x Any Vanilla Pelt.",
              },
              {
                item: "Rope & Hooks",
                recipe: "4x Bone Hooks & 1x Rope.",
              },
              {
                item: "Un-Finished Drying Rack Frame",
                recipe: "5x Short Sticks & 1x Rope.",
              },
              {
                item: "Drying Frame",
                recipe: "1x Rope & Hook & 1x Un-Finished Drying Rack Frame.",
              },
              {
                item: "Leather Cloak",
                recipe: "50% Leather Sewing Kit & 2x Tanned Leather.",
              },
              {
                item: "Leather Backpack",
                recipe: "50% Leather Sewing Kit & 2x Tanned Leather.",
              },
              {
                item: "Leather Hat",
                recipe: "20% Leather Sewing Kit & 3x Tanned Leather.",
              },
              {
                item: "Leather Jacket",
                recipe: "20% Leather Sewing Kit & 11x Tanned Leather.",
              },
              {
                item: "Leather Vest",
                recipe: "20% Leather Sewing Kit & 10x Tanned Leather.",
              },
              {
                item: "Leather Gloves",
                recipe: "20% Leather Sewing Kit & 4x Tanned Leather.",
              },
              {
                item: "Leather Pants",
                recipe: "20% Leather Sewing Kit & 6x Tanned Leather.",
              },
              {
                item: "Leather Shoes",
                recipe: "20% Leather Sewing Kit & 4x Tanned Leather.",
              },
              {
                item: "Leather Fluid Pouch (Leather Bottle)",
                recipe: "20% Leather Sewing Kit & 4x Tanned Leather.",
              },
              {
                item: "Stitched Chest Holster",
                recipe: "20% Leather Sewing Kit & 4x Tanned Leather.",
              },
              {
                item: "Stitched Pistol Holster",
                recipe: "10% Leather Sewing Kit & 2x Tanned Leather.",
              },
              {
                item: "Stitched Sawed Off Holster",
                recipe: "25% Leather Sewing Kit & 5x Tanned Leather.",
              },
              {
                item: "Leather Full Mask",
                recipe: "20% Leather Sewing Kit & 1x Tanned Leather.",
              },
              {
                item: "Leather Half Mask",
                recipe: "Leather Full Mask & Any Knife.",
              },
              {
                item: "Leather Eye Mask",
                recipe: "Leather Half Mask & Any Knife.",
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

export default LeatherTanning;
