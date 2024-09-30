"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { config } from "../../../config";
import { NavItem } from "@/lib/types";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { cn } from "@/lib/utils";

export const defaultNavigation = {
  items: config.navigation?.items ?? [
    { label: "About", href: "/#about", enabled: true },
    { label: "Server", href: "/#servers", enabled: true },
    {
      label: "Leaderboard",
      href: "#leaderboard",
      enabled: config.cftools.leaderboard.enabled,
    },
    { label: "Guides", href: "#", enabled: true },
    { label: "Contact", href: "/#contact", enabled: false },
  ],
} satisfies { items: NavItem[] };

function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious();
      let diff = typeof previous === "number" ? current - previous : current;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export type HeaderProps = {
  items?: NavItem[];
  className?: string;
  useGutter?: boolean;
};

export default function Header({
  className,
  items = defaultNavigation.items,
  useGutter = false,
}: HeaderProps) {
  items = items.filter((item) => item.enabled);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  let { scrollYBoundedProgress } = useBoundedScroll(80);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={cn("z-50 flex-1 overflow-y-scroll", className)}>
      <motion.header
        style={{
          height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [80, 50]),
          backgroundColor: useMotionTemplate`rgb(2 6 23 / ${useTransform(
            scrollYBoundedProgressDelayed,
            [0, 1],
            [1, 0.1]
          )})`,
          borderBottomColor: config.themeColor,
          borderBottomWidth: useTransform(
            scrollYBoundedProgressDelayed,
            [0, 1],
            [3, 1]
          ),
        }}
        className={`fixed inset-x-0 flex h-20 shadow backdrop-blur-md duration-300`}
      >
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8">
          <motion.div
            style={{
              scale: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0.9]
              ),
            }}
            className="flex origin-left items-center text-xl font-semibold uppercase duration-300"
          >
            <Link href="/" onDragStart={(e) => e.preventDefault()}>
              <Image
                src={config.logoURL}
                alt="Logo"
                width={80}
                height={80}
                priority
                onDragStart={(e) => e.preventDefault()}
              />
            </Link>
          </motion.div>
          <motion.nav
            style={{
              opacity: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0]
              ),
            }}
            className="hidden sm:flex space-x-4 text-sm font-medium text-slate-400 duration-300"
          >
            {items.map((item, index) => {
              if (item.label === "Guides") {
                return (
                  <div key={index} className="relative" ref={dropdownRef}>
                    <button
                      onClick={toggleDropdown}
                      className="font-bold hover:text-primary duration-300 flex items-center"
                    >
                      {item.label}
                      {isDropdownOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    {isDropdownOpen && (
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10 flex flex-col items-center"
                        style={{ backgroundColor: "rgba(2, 6, 23, 1)" }}
                      >
                        <Link
                          href="/vanilla_crafting_guide"
                          className="block px-4 py-2 text-[#94a3b8] hover:text-[#5688f4] duration-300"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Vanilla
                        </Link>
                        <Link
                          href="/modded_crafting_guide"
                          className="block px-4 py-2 text-[#94a3b8] hover:text-[#5688f4] duration-300"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Modded
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="font-bold hover:text-primary duration-300"
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>
          <motion.div
            className="block sm:hidden duration-300"
            style={{
              scale: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0.9]
              ),
            }}
          >
            <MobileNav items={items} className="bg-none border-none" />
          </motion.div>
        </div>
      </motion.header>
      {/* Gutter */}
      {useGutter && <div className="h-20 w-full" />}
    </div>
  );
}

let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
