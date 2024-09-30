const SawedOffWeaponry = () => {
  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-4xl font-bold text-center text-[#5789F6] my-6">
        Sawed-off Weaponry
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-8 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#5789F6] text-white">
            <tr>
              <th className="p-4 text-left">CRAFTED ITEM</th>
              <th className="p-4 text-left">RECIPE</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: "Sawed-Off BK-12", recipe: "1x BK-12, 1x Hacksaw" },
              { item: "Sawed-Off BK-18", recipe: "1x BK-18, 1x Hacksaw" },
              { item: "Sawed-Off BK-43", recipe: "1x BK-43, 1x Hacksaw" },
              { item: "Sawed-Off LE-MAS", recipe: "1x LE-MAS, 1x Hacksaw" },
              {
                item: "Sawed-Off Mosin 91/30",
                recipe: "1x Mosin 91/30, 1x Hacksaw",
              },
              { item: "Sawed-Off Revolver", recipe: "1x Revolver, 1x Hacksaw" },
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

export default SawedOffWeaponry;
