const SawedOffWeaponry = () => {
  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-4xl font-bold text-center text-[#5789F6] my-6">
        Sawed-off Weaponry
      </h2>
      <table className="w-full border-collapse mb-8 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#5789F6] text-white">
          <tr>
            <th className="p-4 text-left">CRAFTED ITEM</th>
            <th className="p-4 text-left">APPROPRIATE WEAPON</th>
            <th className="p-4 text-left">HACKSAW</th>
          </tr>
        </thead>
        <tbody>
          {[
            { item: "Sawed-Off BK-12", weapon: 1, hacksaw: 1 },
            { item: "Sawed-Off BK-18", weapon: 1, hacksaw: 1 },
            { item: "Sawed-Off BK-43", weapon: 1, hacksaw: 1 },
            { item: "Sawed-Off LE-MAS", weapon: 1, hacksaw: 1 },
            { item: "Sawed-Off Mosin 91/30", weapon: 1, hacksaw: 1 },
            { item: "Sawed-Off Revolver", weapon: 1, hacksaw: 1 },
          ].map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#1b1e29]" : "bg-[#2c2f38]"
              } hover:bg-[#3e4251]`}
            >
              <td className="p-4">{row.item}</td>
              <td className="p-4">{row.weapon}</td>
              <td className="p-4">{row.hacksaw}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SawedOffWeaponry;
