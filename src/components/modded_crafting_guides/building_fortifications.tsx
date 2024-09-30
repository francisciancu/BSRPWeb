import React from "react";

const BuildingFortifications = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        Building Fortifications
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
              item: "Small Window Barricade Kit",
              recipe: "2x Short Sticks & 1x Rope.",
            },
            {
              item: "Small Window Barricade Base",
              recipe: "2x Planks & 8x Nails.",
            },
            {
              item: "Small Window Partial Barricade",
              recipe: "3x Planks & 10x Nails.",
            },
            {
              item: "Small Window Full Barricade",
              recipe: "2x Planks & 8x Nails.",
            },
            {
              item: "Small Window Plate Cover",
              recipe: "1x Metal Plate & 10x Nails.",
            },
            {
              item: "Small Window Prop Stick",
              recipe: "1x Long Stick, 2x Nails & 1x Pliers.",
            },
            {
              item: "Medium Window Barricade Kit",
              recipe: "2x Short Sticks & 1x Rope.",
            },
            {
              item: "Medium Window Barricade Base",
              recipe: "6x Planks & 8x Nails.",
            },
            {
              item: "Medium Window Partial Wood Barricade",
              recipe: "6x Planks & 8x Nails.",
            },
            {
              item: "Medium Window Full Wood Barricade",
              recipe: "6x Planks & 8x Nails.",
            },
            {
              item: "Medium Window Partial Metal Barricade",
              recipe: "2x Metal Plate & 8x Nails.",
            },
            {
              item: "Medium Window Full Metal Barricade",
              recipe: "2x Metal Plate & 8x Nails.",
            },
            {
              item: "Burlap Curtain",
              recipe: "5x Burlap Strips & 1x Sewing Kit.",
            },
            {
              item: "Door Barricade Kit",
              recipe: "2x Short Sticks & 1x Rope.",
            },
            {
              item: "Door Base",
              recipe: "2x Wooden Logs & 1x Pickaxe or Shovel.",
            },
            {
              item: "Door Upper Frames",
              recipe: "5x Short Sticks & 4x Nails.",
            },
            {
              item: "Door Lower Frames",
              recipe: "5x Short Sticks & 4x Nails.",
            },
            {
              item: "Outer Upper Planks Vertical",
              recipe: "5x Plank & 8x Nails.",
            },
            {
              item: "Outer Lower Planks Vertical",
              recipe: "5x Plank & 8x Nails.",
            },
            {
              item: "Outer Upper Planks Horizontal",
              recipe: "5x Plank & 8x Nails.",
            },
            {
              item: "Outer Lower Planks Horizontal",
              recipe: "5x Plank & 8x Nails.",
            },
            { item: "Outer Upper Plate", recipe: "1x Metal Plate & 6x Nails." },
            { item: "Outer Lower Plate", recipe: "1x Metal Plate & 6x Nails." },
            { item: "Inner Upper Planks", recipe: "5x Plank & 5x Nails." },
            { item: "Inner Lower Planks", recipe: "5x Plank & 5x Nails." },
            { item: "Inner Upper Plate", recipe: "1x Metal Plate & 5x Nails." },
            { item: "Inner Lower Plate", recipe: "1x Metal Plate & 5x Nails." },
            { item: "Barricade Holders", recipe: "1x Plank & 4x Nails." },
            { item: "Centre Barricade Holder", recipe: "1x Plank & 2x Nails." },
            { item: "Hinge", recipe: "1x Metal Wire & 1x Pliers." },
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

export default BuildingFortifications;
