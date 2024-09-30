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
import React from "react";

const Modded_crafting_guide: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
      <div className="w-full max-w-4xl px-4">
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
