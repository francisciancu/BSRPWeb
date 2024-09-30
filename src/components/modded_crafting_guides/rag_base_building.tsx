import React from "react";

const RaGBaseBuilding = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        RaG BaseBuilding
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
                item: "Standard Walls",
                recipe: "2x Logs, 5x Planks, 13x Nails",
              },
              { item: "Half Walls", recipe: "1x Logs, 3x Planks, 8x Nails" },
              { item: "Pillars", recipe: "1x Logs, 2x Planks, 5x Nails" },
              { item: "Stairs", recipe: "1x Logs, 5x Planks, 8x Nails" },
              { item: "Staircase", recipe: "1x Logs, 8x Planks, 30x Nails" },
              {
                item: "Staircase (2nd Style)",
                recipe: "1x Logs, 10x Planks, 30x Nails",
              },
              { item: "Foundations", recipe: "2x Logs, 8x Planks, 15x Nails" },
              { item: "Flooring", recipe: "1x Logs, 5x Planks, 13x Nails" },
              { item: "Flat Roof", recipe: "1x Logs, 5x Planks, 13x Nails" },
              { item: "Angled Roof", recipe: "2x Logs, 8x Planks, 13x Nails" },
              { item: "Roof End Left", recipe: "8x Planks, 13x Nails" },
              { item: "Roof End Right", recipe: "8x Planks, 13x Nails" },
              {
                item: "Standard Window Frame",
                recipe: "2x Logs, 5x Planks, 13x Nails",
              },
              { item: "Standard Window", recipe: "5x Planks, 5x Nails" },
              {
                item: "Small Window Frame",
                recipe: "2x Logs, 5x Planks, 13x Nails",
              },
              { item: "Small Window", recipe: "5x Planks, 5x Nails" },
              { item: "Door Frame", recipe: "2x Logs, 5x Planks, 10x Nails" },
              { item: "Door", recipe: "5x Planks, 5x Nails" },
              {
                item: "Single Door Frame",
                recipe: "2x Logs, 5x Planks, 10x Nails",
              },
              { item: "Single Door", recipe: "5x Planks, 5x Nails" },
              {
                item: "Single / Separated Gate Frames",
                recipe: "1x Logs, 5x Planks, 10x Nails",
              },
              {
                item: "Single / Separated Gate Left / Right Doors",
                recipe: "5x Planks, 5x Nails",
              },
              {
                item: "Wooden Storage (Stage 1)",
                recipe: "1x Logs, 8x Planks, 15x Nails",
              },
              {
                item: "Wooden Storage (Stage 2)",
                recipe: "5x Planks, 5x Nails",
              },
              {
                item: "Wooden Storage (Stage 3)",
                recipe: "5x Planks, 5x Nails",
              },
              { item: "Ramp", recipe: "1x Logs, 5x Planks, 8x Nails" },
              {
                item: "Floor Hatch Frame",
                recipe: "2x Logs, 5x Planks, 10x Nails",
              },
              { item: "Floor Hatch Door", recipe: "5x Planks, 5x Nails" },
              { item: "Floor Hatch Staircase", recipe: "10x Planks, 5x Nails" },
              { item: "Floor Hatch Ladder", recipe: "5x Planks, 5x Nails" },
              { item: "Ladder", recipe: "5x Planks, 5x Nails" },
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

export default RaGBaseBuilding;
