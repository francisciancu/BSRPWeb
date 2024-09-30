import React from "react";

const RaGBaseBuilding = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        RaG BaseBuilding
      </h1>
      <table className="w-full table-auto border-collapse shadow-lg">
        <thead>
          <tr className="bg-[#5789F6] text-white">
            <th className="px-4 py-2 text-left">CRAFTED ITEM</th>
            <th className="px-4 py-2 text-left">LOGS</th>
            <th className="px-4 py-2 text-left">PLANKS</th>
            <th className="px-4 py-2 text-left">NAILS</th>
          </tr>
        </thead>
        <tbody>
          {[
            { item: "Standard Walls", logs: 2, planks: 5, nails: 13 },
            { item: "Half Walls", logs: 1, planks: 3, nails: 8 },
            { item: "Pillars", logs: 1, planks: 2, nails: 5 },
            { item: "Stairs", logs: 1, planks: 5, nails: 8 },
            { item: "Staircase", logs: 1, planks: 8, nails: 30 },
            { item: "Staircase (2nd Style)", logs: 1, planks: 10, nails: 30 },
            { item: "Foundations", logs: 2, planks: 8, nails: 15 },
            { item: "Flooring", logs: 1, planks: 5, nails: 13 },
            { item: "Flat Roof", logs: 1, planks: 5, nails: 13 },
            { item: "Angled Roof", logs: 2, planks: 8, nails: 13 },
            { item: "Roof End Left", logs: 0, planks: 8, nails: 13 },
            { item: "Roof End Right", logs: 0, planks: 8, nails: 13 },
            { item: "Standard Window Frame", logs: 2, planks: 5, nails: 13 },
            { item: "Standard Window", logs: 0, planks: 5, nails: 5 },
            { item: "Small Window Frame", logs: 2, planks: 5, nails: 13 },
            { item: "Small Window", logs: 0, planks: 5, nails: 5 },
            { item: "Door Frame", logs: 2, planks: 5, nails: 10 },
            { item: "Door", logs: 0, planks: 5, nails: 5 },
            { item: "Single Door Frame", logs: 2, planks: 5, nails: 10 },
            { item: "Single Door", logs: 0, planks: 5, nails: 5 },
            {
              item: "Single / Separated Gate Frames",
              logs: 1,
              planks: 5,
              nails: 10,
            },
            {
              item: "Single / Separated Gate Left / Right Doors",
              logs: 0,
              planks: 5,
              nails: 5,
            },
            { item: "Wooden Storage (Stage 1)", logs: 1, planks: 8, nails: 15 },
            { item: "Wooden Storage (Stage 2)", logs: 0, planks: 5, nails: 5 },
            { item: "Wooden Storage (Stage 3)", logs: 0, planks: 5, nails: 5 },
            { item: "Ramp", logs: 1, planks: 5, nails: 8 },
            { item: "Floor Hatch Frame", logs: 2, planks: 5, nails: 10 },
            { item: "Floor Hatch Door", logs: 0, planks: 5, nails: 5 },
            { item: "Floor Hatch Staircase", logs: 0, planks: 10, nails: 5 },
            { item: "Floor Hatch Ladder", logs: 0, planks: 5, nails: 5 },
            { item: "Ladder", logs: 0, planks: 5, nails: 5 },
          ].map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#1b1e29]" : "bg-[#2c2f38]"
              } hover:bg-[#3e4251]`}
            >
              <td className="px-4 py-2">{row.item}</td>
              <td className="px-4 py-2">{row.logs}</td>
              <td className="px-4 py-2">{row.planks}</td>
              <td className="px-4 py-2">{row.nails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaGBaseBuilding;
