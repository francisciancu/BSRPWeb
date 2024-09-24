"use client";

import React, { useRef } from "react";
import { config } from "../../../config";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import LinkButton from "../buttons/link-button";
import Image from "next/image";
import DiscordSvg from "@/../public/images/logos/discord-icon-svgrepo-com.svg";
import YoutubeSvg from "@/../public/images/logos/youtube-color-svgrepo-com.svg";
import InstagramSvg from "@/../public/images/logos/instagram-svgrepo-com.svg";
import TwitterSvg from "@/../public/images/logos/twitter-svgrepo-com.svg";

const MainHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[transparent,75%] to-black" />
      <motion.section
        ref={ref}
        className={cn(
          "bg-blend-multiply bg-no-repeat bg-center w-full",
          "flex items-center min-h-[100lvh]",
          "pt-20" // Note: Uses padding because Gutter isn't used for the header in root layout
        )}
        style={{
          // Note: Only has parallax on larger widths due to implementation (cover vs contain)
          backgroundColor: config.hero.background.color,
          backgroundPositionY: y,
          backgroundPositionX: "center",
          backgroundImage: `url(${config.hero.background.image.url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="relative py-8 px-4 mx-auto max-w-screen-2xl text-white lg:py-16 z-1">
          <div className="mb-6 max-w-screen-lg lg:mb-0 flex flex-col items-center text-center">
            <div className="h-[75px] w-[75px]">
              <Image
                src="/images/logos/dayz.png"
                alt="Hero Image"
                width={75}
                height={75}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h1
              className="my-3 text-xl font-extrabold tracking-tight leading-none md:text-1xl lg:text-2xl"
              style={{
                color: config.themeColor,
              }}
            >
              {config.site.title}
            </h1>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
              {config.hero.title}
            </h2>
            <p className="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
              {config.hero.description}
            </p>
            <LinkButton
              href={config.hero.cta.href}
              className="inline-flex items-center py-3 px-5 font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <Image
                src={DiscordSvg}
                alt="Discord Icon"
                className="mr-2 w-5 h-5"
              />
              {config.hero.cta.label}
            </LinkButton>
            <div className="flex item-center space-x-4 mt-4">
              <LinkButton href="https://www.youtube.com/@BritishRoleplayCommunity">
                <Image
                  src={YoutubeSvg}
                  alt="Youtube Icon"
                  className="w-5 h-5"
                />
              </LinkButton>
              <LinkButton href="https://x.com/survivors_rp">
                <Image
                  src={TwitterSvg}
                  alt="Twitter Icon"
                  className="w-5 h-5"
                />
              </LinkButton>
              <LinkButton href="https://www.instagram.com/britishsurvivors/">
                <Image
                  src={InstagramSvg}
                  alt="Instagram Icon"
                  className="w-5 h-5"
                />
              </LinkButton>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MainHero;
