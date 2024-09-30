import React from "react";

const MAMobileBase = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#5789F6] mb-8">
        MA Mobile Base
      </h1>
      <p className="text-center font-semibold mb-4">
        <strong>
          (Be careful not to use more than 1 Tarp during crafting, or it will
          take the whole stack!)
        </strong>
      </p>
      <table className="w-full table-auto border-collapse shadow-lg">
        <thead>
          <tr className="bg-[#5789F6] text-white">
            <th className="px-4 py-2 text-left">ITEM</th>
            <th className="px-4 py-2 text-left">RECIPE</th>
          </tr>
        </thead>
        <tbody>
          {[
            { item: "Small Mobile Base Kit", recipe: "1x Tarp, 10x Planks." },
            { item: "Mobile Base Kit", recipe: "1x Tarp, 20x Planks." },
            {
              item: "Small Mobile Base",
              recipe:
                "1x Small Blueprint, 1x Blueprint, 1x Hammer (Any), 40x Nails.",
            },
            {
              item: "Mobile Base",
              recipe: "1x Mobile Base Kit, 1x Hammer (Any), 60x Nails.",
            },
          ].map((row, index) => (
            <tr
              key={index}
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

export default MAMobileBase;
