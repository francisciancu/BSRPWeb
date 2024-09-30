import React from "react";

const EvenMoreDoors = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        EvenMoreDoors
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-8 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#5789F6] text-white">
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Recipe</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                item: "Single Wooden Door",
                recipe: `
                SINGLE DOOR KIT: 2x Short Sticks & 1x Rope. 
                SINGLE DOOR FRAME: 1x Single Door Kit, 2x Wooden Logs & 1x Pickaxe, Shovel or Hoe. 
                SINGLE DOOR BRACE: 1x Single Door Frame, 4x Wooden Planks, 25x Nails & 1x Hatchet or Hammer. 
                SINGLE DOOR WOOD PANEL: 1x Single Door Brace, 10x Wooden Planks, 50x Nails & 1x Hatchet or Hammer. 
                SINGLE DOOR WOOD: 1x Single Door Wood Panel, 1x Metal Wire & 1x Pliers.`,
              },
              {
                item: "Single Metal Door",
                recipe: `
                SINGLE DOOR KIT: 2x Short Sticks & 1x Rope. 
                SINGLE DOOR FRAME: 1x Single Door Kit, 2x Wooden Logs & 1x Pickaxe, Shovel or Hoe. 
                SINGLE DOOR BRACE: 1x Single Door Frame, 4x Wooden Planks, 25x Nails & 1x Hatchet or Hammer. 
                SINGLE DOOR METAL PANEL: 1x Single Door Brace, 2x Metal Plates, 50x Nails & 1x Hatchet or Hammer. 
                SINGLE DOOR METAL: 1x Single Door Metal Panel, 1x Metal Wire & 1x Pliers.`,
              },
              {
                item: "Double Wooden Door",
                recipe: `
                DOUBLE DOOR KIT: 2x Short Sticks & 1x Rope. 
                DOUBLE DOOR FRAME: 1x Double Door Kit, 2x Wooden Logs & 1x Pickaxe, Shovel or Hoe. 
                DOUBLE DOOR BRACE: 1x Double Door Frame, 8x Wooden Planks, 50x Nails & 1x Hatchet or Hammer. 
                DOUBLE DOOR WOOD PANEL: 1x Double Door Brace, 10x Wooden Planks, 50x Nails & 1x Hatchet or Hammer. 
                DOUBLE DOOR WOOD: 1x Double Door Wood Panel, 1x Metal Wire & 1x Pliers.`,
              },
              {
                item: "Double Metal Door",
                recipe: `
                DOUBLE DOOR KIT: 2x Short Sticks & 1x Rope. 
                DOUBLE DOOR FRAME: 1x Double Door Kit, 2x Wooden Logs & 1x Pickaxe, Shovel or Hoe. 
                DOUBLE DOOR BRACE: 1x Double Door Frame, 8x Wooden Planks, 50x Nails & 1x Hatchet or Hammer. 
                DOUBLE DOOR METAL PANEL: 1x Double Door Brace, 4x Metal Plates, 50x Nails & 1x Hatchet or Hammer. 
                DOUBLE DOOR METAL: 1x Double Door Metal Panel, 1x Metal Wire & 1x Pliers.`,
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
                <td className="px-4 py-2 whitespace-pre-line">{row.recipe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvenMoreDoors;
