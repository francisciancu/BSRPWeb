"use client";

import BoxedDishes from "@/components/modded_crafting_guides/boxed_dishes";
import BuildingFortifications from "@/components/modded_crafting_guides/building_fortifications";
import BurlapRifleWinding from "@/components/modded_crafting_guides/burlap_rifle_winding";
import CannabisPlus from "@/components/modded_crafting_guides/cannabis_plus";
import CannedDishes from "@/components/modded_crafting_guides/canned_dishes";
import CookZ from "@/components/modded_crafting_guides/cook_z";
import EnhancedFlags from "@/components/modded_crafting_guides/enhanced_flags";
import EvenMoreDoors from "@/components/modded_crafting_guides/even_more_doors";
import LeatherTanning from "@/components/modded_crafting_guides/leather_tanning";
import MAMobileBase from "@/components/modded_crafting_guides/ma_mobile_base";
import RaGBaseBuilding from "@/components/modded_crafting_guides/rag_base_building";
import RaGHuntingCabin from "@/components/modded_crafting_guides/rag_hunting_cabin";
import RaGSmallCabin from "@/components/modded_crafting_guides/rag_small_cabin";
import Sausages from "@/components/modded_crafting_guides/sausages";
import SawedOffWeaponry from "@/components/modded_crafting_guides/sawed_off_weaponry";
import React, { useState } from "react";
import { Search, X } from "lucide-react";

const items = [
  // SawedOffWeaponry
  { name: "Sawed-Off BK-12", component: "SawedOffWeaponry" },
  { name: "Sawed-Off BK-18", component: "SawedOffWeaponry" },
  { name: "Sawed-Off BK-43", component: "SawedOffWeaponry" },
  { name: "Sawed-Off Blaze", component: "SawedOffWeaponry" },
  { name: "Sawed-Off LE-MAS", component: "SawedOffWeaponry" },
  { name: "Sawed-Off Mosin 91/30", component: "SawedOffWeaponry" },
  { name: "Sawed-Off Revolver", component: "SawedOffWeaponry" },

  // RaGBaseBuilding
  { name: "Standard Walls", component: "RaGBaseBuilding" },
  { name: "Half Walls", component: "RaGBaseBuilding" },
  { name: "Pillars", component: "RaGBaseBuilding" },
  { name: "Stairs", component: "RaGBaseBuilding" },
  { name: "Staircase", component: "RaGBaseBuilding" },
  { name: "Staircase (2nd Style)", component: "RaGBaseBuilding" },
  { name: "Foundations", component: "RaGBaseBuilding" },
  { name: "Flooring", component: "RaGBaseBuilding" },
  { name: "Flat Roof", component: "RaGBaseBuilding" },
  { name: "Angled Roof", component: "RaGBaseBuilding" },
  { name: "Roof End Left", component: "RaGBaseBuilding" },
  { name: "Roof End Right", component: "RaGBaseBuilding" },
  { name: "Standard Window Frame", component: "RaGBaseBuilding" },
  { name: "Standard Window", component: "RaGBaseBuilding" },
  { name: "Small Window Frame", component: "RaGBaseBuilding" },
  { name: "Small Window", component: "RaGBaseBuilding" },
  { name: "Door Frame", component: "RaGBaseBuilding" },
  { name: "Door", component: "RaGBaseBuilding" },
  { name: "Single Door Frame", component: "RaGBaseBuilding" },
  { name: "Single Door", component: "RaGBaseBuilding" },
  { name: "Single/Separated Gate Frames", component: "RaGBaseBuilding" },
  {
    name: "Single/Separated Gate Left/Right Doors",
    component: "RaGBaseBuilding",
  },
  { name: "Wooden Storage (Stage 1)", component: "RaGBaseBuilding" },
  { name: "Wooden Storage (Stage 2)", component: "RaGBaseBuilding" },
  { name: "Wooden Storage (Stage 3)", component: "RaGBaseBuilding" },
  { name: "Ramp", component: "RaGBaseBuilding" },
  { name: "Floor Hatch Frame", component: "RaGBaseBuilding" },
  { name: "Floor Hatch Door", component: "RaGBaseBuilding" },
  { name: "Floor Hatch Staircase", component: "RaGBaseBuilding" },
  { name: "Floor Hatch Ladder", component: "RaGBaseBuilding" },
  { name: "Ladder", component: "RaGBaseBuilding" },

  // RaGHuntingCabin
  { name: "Hunting Cabin Kit", component: "RaGHuntingCabin" },
  { name: "Hunting Cabin (Full)", component: "RaGHuntingCabin" },

  // RaGSmallCabin
  { name: "Cabin Kit", component: "RaGSmallCabin" },
  { name: "Cabin Foundation", component: "RaGSmallCabin" },
  { name: "Cabin Back Wall", component: "RaGSmallCabin" },
  { name: "Cabin Front Wall", component: "RaGSmallCabin" },
  { name: "Cabin Right Wall", component: "RaGSmallCabin" },
  { name: "Cabin Left Wall", component: "RaGSmallCabin" },
  { name: "Cabin Door", component: "RaGSmallCabin" },
  { name: "Cabin Roof", component: "RaGSmallCabin" },
  { name: "Cabin Shutter Front", component: "RaGSmallCabin" },
  { name: "Cabin Shutter Back", component: "RaGSmallCabin" },

  // MAMobileBase
  { name: "Small Mobile Base Kit", component: "MAMobileBase" },
  { name: "Mobile Base Kit", component: "MAMobileBase" },
  { name: "Small Mobile Base", component: "MAMobileBase" },
  { name: "Mobile Base", component: "MAMobileBase" },

  // EnhancedFlags
  { name: "Flag Courier Backpack", component: "EnhancedFlags" },
  { name: "Flag Backpack", component: "EnhancedFlags" },

  // BurlapRifleWinding
  { name: "Burlap Rifle Winding", component: "BurlapRifleWinding" },
  { name: "Grassy Rifle Wrap", component: "BurlapRifleWinding" },

  // CookZ
  { name: "Disinfect Rags", component: "CookZ" },
  { name: "Empty Can (10x)", component: "CookZ" },
  { name: "Empty Box", component: "CookZ" },

  // BoxedDishes
  { name: "Fried Potatoes", component: "BoxedDishes" },
  { name: "Stir Fry", component: "BoxedDishes" },
  { name: "Fish and Chips", component: "BoxedDishes" },
  { name: "Rice Pudding", component: "BoxedDishes" },
  { name: "Mushroom Risotto", component: "BoxedDishes" },
  { name: "Pilaf", component: "BoxedDishes" },
  { name: "Stuffed Peppers", component: "BoxedDishes" },
  { name: "Gagh", component: "BoxedDishes" },
  { name: "Haggis w/ Mashed Potatoes", component: "BoxedDishes" },
  { name: "Pommdöener", component: "BoxedDishes" },
  { name: "Bangers & Mash", component: "BoxedDishes" },
  { name: "Currywurst", component: "BoxedDishes" },

  // CannedDishes
  { name: "Goulash", component: "CannedDishes" },
  { name: "Pumpkin Soup", component: "CannedDishes" },
  { name: "Fish Soup", component: "CannedDishes" },
  { name: "Ukha", component: "CannedDishes" },
  { name: "Lecsó", component: "CannedDishes" },
  { name: "Tactical Bacon", component: "CannedDishes" },
  { name: "Mystery Meat", component: "CannedDishes" },
  { name: "Zucchini Caviar", component: "CannedDishes" },
  { name: "Creamy Tomato Soup", component: "CannedDishes" },
  { name: "Beef Stew", component: "CannedDishes" },
  { name: "Mushroom Stroganoff", component: "CannedDishes" },
  { name: "Apple Marmalade", component: "CannedDishes" },
  { name: "Plum Marmalade", component: "CannedDishes" },
  { name: "Pear Marmalade", component: "CannedDishes" },

  // Sausages
  { name: "Beef Sausages", component: "Sausages" },
  { name: "Chicken Sausages", component: "Sausages" },
  { name: "Pig Sausages", component: "Sausages" },
  { name: "Goat Sausages", component: "Sausages" },
  { name: "Bear Sausages", component: "Sausages" },
  { name: "Sheep Sausages", component: "Sausages" },
  { name: "Boar Sausages", component: "Sausages" },
  { name: "Deer Sausages", component: "Sausages" },
  { name: "Hare Sausages", component: "Sausages" },
  { name: "Wolf Sausages", component: "Sausages" },
  { name: "Human Sausages", component: "Sausages" },

  // LeatherTanning
  { name: "Cleaned Animal Pelt", component: "LeatherTanning" },
  { name: "Rope & Hooks", component: "LeatherTanning" },
  { name: "Un-Finished Drying Rack Frame", component: "LeatherTanning" },
  { name: "Drying Frame", component: "LeatherTanning" },
  { name: "Leather Cloak", component: "LeatherTanning" },
  { name: "Leather Backpack", component: "LeatherTanning" },
  { name: "Leather Hat", component: "LeatherTanning" },
  { name: "Leather Jacket", component: "LeatherTanning" },
  { name: "Leather Vest", component: "LeatherTanning" },
  { name: "Leather Gloves", component: "LeatherTanning" },
  { name: "Leather Pants", component: "LeatherTanning" },
  { name: "Leather Shoes", component: "LeatherTanning" },
  { name: "Leather Fluid Pouch (Leather Bottle)", component: "LeatherTanning" },
  { name: "Stitched Chest Holster", component: "LeatherTanning" },
  { name: "Stitched Pistol Holster", component: "LeatherTanning" },
  { name: "Stitched Sawed Off Holster", component: "LeatherTanning" },
  { name: "Leather Full Mask", component: "LeatherTanning" },
  { name: "Leather Half Mask", component: "LeatherTanning" },
  { name: "Leather Eye Mask", component: "LeatherTanning" },

  // EvenMoreDoors
  { name: "Single Door Kit", component: "EvenMoreDoors" },
  { name: "Single Door Frame", component: "EvenMoreDoors" },
  { name: "Single Door Brace", component: "EvenMoreDoors" },
  { name: "Single Door Wood Panel", component: "EvenMoreDoors" },
  { name: "Single Door Wood", component: "EvenMoreDoors" },
  { name: "Single Door Metal Panel", component: "EvenMoreDoors" },
  { name: "Single Door Metal", component: "EvenMoreDoors" },
  { name: "Double Door Kit", component: "EvenMoreDoors" },
  { name: "Double Door Frame", component: "EvenMoreDoors" },
  { name: "Double Door Brace", component: "EvenMoreDoors" },
  { name: "Double Door Wood Panel", component: "EvenMoreDoors" },
  { name: "Double Door Wood", component: "EvenMoreDoors" },
  { name: "Double Door Metal Panel", component: "EvenMoreDoors" },
  { name: "Double Door Metal", component: "EvenMoreDoors" },

  // BuildingFortifications

  { name: "Small Window Barricade Kit", component: "BuildingFortifications" },
  { name: "Small Window Barricade Base", component: "BuildingFortifications" },
  {
    name: "Small Window Partial Barricade",
    component: "BuildingFortifications",
  },
  { name: "Small Window Full Barricade", component: "BuildingFortifications" },
  { name: "Small Window Plate Cover", component: "BuildingFortifications" },
  { name: "Small Window Prop Stick", component: "BuildingFortifications" },
  { name: "Medium Window Barricade Kit", component: "BuildingFortifications" },
  { name: "Medium Window Barricade Base", component: "BuildingFortifications" },
  {
    name: "Medium Window Partial Wood Barricade",
    component: "BuildingFortifications",
  },
  {
    name: "Medium Window Full Wood Barricade",
    component: "BuildingFortifications",
  },
  {
    name: "Medium Window Partial Metal Barricade",
    component: "BuildingFortifications",
  },
  {
    name: "Medium Window Full Metal Barricade",
    component: "BuildingFortifications",
  },
  { name: "Burlap Curtain", component: "BuildingFortifications" },
  { name: "Door Barricade Kit", component: "BuildingFortifications" },
  { name: "Door Base", component: "BuildingFortifications" },
  { name: "Door Upper Frames", component: "BuildingFortifications" },
  { name: "Door Lower Frames", component: "BuildingFortifications" },
  { name: "Outer Upper Planks Vertical", component: "BuildingFortifications" },
  { name: "Outer Lower Planks Vertical", component: "BuildingFortifications" },
  {
    name: "Outer Upper Planks Horizontal",
    component: "BuildingFortifications",
  },
  {
    name: "Outer Lower Planks Horizontal",
    component: "BuildingFortifications",
  },
  { name: "Outer Upper Plate", component: "BuildingFortifications" },
  { name: "Outer Lower Plate", component: "BuildingFortifications" },
  { name: "Inner Upper Planks", component: "BuildingFortifications" },
  { name: "Inner Lower Planks", component: "BuildingFortifications" },
  { name: "Inner Upper Plate", component: "BuildingFortifications" },
  { name: "Inner Lower Plate", component: "BuildingFortifications" },
  { name: "Barricade Holders", component: "BuildingFortifications" },
  { name: "Centre Barricade Holder", component: "BuildingFortifications" },
  { name: "Hinge", component: "BuildingFortifications" },

  // CannabisPlus

  { name: "Cannabis Baggy", component: "CannabisPlus" },
  { name: "Cannabis Brick", component: "CannabisPlus" },
  { name: "Joint", component: "CannabisPlus" },
  { name: "Cigarette", component: "CannabisPlus" },
  { name: "Pack of Joints", component: "CannabisPlus" },
  { name: "Pack of Cigarettes", component: "CannabisPlus" },
  { name: "Drying Post", component: "CannabisPlus" },
  { name: "Cannabis Workbench", component: "CannabisPlus" },
];

const Modded_crafting_guide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<
    { name: string; component: string }[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredItems([]);
      return;
    }

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      setFilteredItems([{ name: "No item with that name", component: "" }]);
    } else {
      setFilteredItems(filtered);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredItems([]);
  };

  const handleSuggestionClick = (item: { name: string }) => {
    const itemId = item.name.replace(/\s+/g, "-").toLowerCase();
    const element = document.getElementById(itemId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });

      element.classList.add("flash");
      setTimeout(() => {
        element.classList.remove("flash");
      }, 3000);
    }

    setFilteredItems([]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
      <div className="w-full max-w-4xl px-4">
        <div className="relative mt-6">
          <input
            type="text"
            placeholder="Search for an item..."
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full p-4 pl-12 pr-12 rounded-full bg-[#1b1e29] text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={24}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              <X size={24} />
            </button>
          )}

          {filteredItems.length > 0 && (
            <ul className="absolute left-0 right-0 mt-2 rounded-xl bg-[#2b2f3c] shadow-lg max-h-60 overflow-y-auto z-10">
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  className={`px-4 py-3 hover:bg-[#3e4251] flex justify-between ${
                    item.name === "No item with that name"
                      ? "text-gray-500 cursor-default"
                      : "text-white cursor-pointer"
                  }`}
                  onClick={() => handleSuggestionClick(item)}
                >
                  <span>{item.name}</span>
                  {item.component && (
                    <span className="text-sm text-gray-400">
                      {item.component}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <SawedOffWeaponry />
        <RaGBaseBuilding />
        <RaGHuntingCabin />
        <RaGSmallCabin />
        <MAMobileBase />
        <EnhancedFlags />
        <BurlapRifleWinding />
        <CookZ />
        <BoxedDishes />
        <CannedDishes />
        <Sausages />
        <LeatherTanning />
        <EvenMoreDoors />
        <BuildingFortifications />
        <CannabisPlus />
      </div>
    </main>
  );
};

export default Modded_crafting_guide;
