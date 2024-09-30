"use client";

import React from "react";

const Modded_crafting_guide: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-20">
      <div className="w-full px-4 pt-24">
        {" "}
        {/* Adjusted padding-top to 24 */}
        <h2 className="text-4xl font-bold text-center text-[#5789F6] my-6">
          Support Us
        </h2>
        <div className="max-w-xl mx-auto p-6 bg-[#0a0f25] rounded-lg shadow-lg">
          <p className="text-center text-lg mb-4">
            <strong>
              Any donations are greatly appreciated. We thank you and hope you
              enjoy British Survivors Roleplay!
            </strong>
          </p>

          <p className="text-center text-lg mb-4">
            Donations will get you access to:
          </p>

          <ul className="list-none text-center mb-4 space-y-2">
            <li className="text-lg">Queue Priority (€10+)</li>
            <li className="text-lg">Discord Role</li>
            <li className="text-lg">Private Donators Chat Room</li>
            <li className="text-lg">GIFs</li>
          </ul>

          <p className="text-center text-lg mb-4">
            <strong>
              After donating, please open a #support-ticket so we can grant you
              the role. If you donated €10 or more, please provide your Steam64
              ID in the ticket as well (get it from
              <a
                href="https://steamid.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5789F6] ml-1 underline"
              >
                steamid.io
              </a>
              ).
            </strong>
          </p>

          <p className="text-center text-lg mb-6">
            Click the button below to donate via PayPal:
          </p>

          <a
            href="https://paypal.me/BSRPNew"
            className="block w-full py-3 text-center text-white bg-[#5789F6] hover:bg-[#4a6bb2] rounded-md transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </main>
  );
};

export default Modded_crafting_guide;
