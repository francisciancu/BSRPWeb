import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HeaderProps, defaultNavigation } from "./animated-header";
import { MenuIcon, XIcon, ChevronDown, ChevronUp } from "lucide-react";
import LinkButton from "../buttons/link-button";
import Image from "next/image";
import { config } from "../../../config";

const MobileNav = ({
  items = defaultNavigation.items,
  className,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to control "Guides" dropdown

  items = items.filter((item) => item.enabled);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle the dropdown on click
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
      <div>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(className)}
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
      </div>

      <DrawerContent hideBar className={cn("bg-background dark:bg-slate-950")}>
        <ScrollArea className="h-screen">
          <div className="container">
            <div className="px-2 mx-auto">
              <DrawerClose
                asChild
                className={cn(
                  "absolute top-2 right-2 cursor-pointer duration-300"
                )}
              >
                <XIcon
                  className="h-7 w-7 hover:text-primary hover:scale-125"
                  onClick={() => setIsOpen(false)}
                />
              </DrawerClose>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center py-4">
              <Image
                src={config.logoURL}
                alt="Logo"
                width={100}
                height={100}
                onDragStart={(e) => e.preventDefault()}
                loading="lazy"
              />
            </div>
            <div
              className={cn(
                "flex flex-col gap-4 flex-grow h-max",
                "p-4 border-t border-muted"
              )}
            >
              {items.map((item, index) => {
                if (item.label === "Guides") {
                  return (
                    <div key={index} className="w-full text-center">
                      <button
                        onClick={toggleDropdown}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-11 px-8"
                      >
                        <span>{item.label}</span>
                        {isDropdownOpen ? (
                          <ChevronUp className="ml-2 h-5 w-5" />
                        ) : (
                          <ChevronDown className="ml-2 h-5 w-5" />
                        )}
                      </button>
                      {isDropdownOpen && (
                        <div className="flex flex-col mt-2">
                          <LinkButton
                            href="/crafting_guide/recipe1"
                            variant="ghost"
                            size="lg"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-11 px-8 w-full"
                            onClick={handleLinkClick}
                          >
                            Vanilla
                          </LinkButton>
                          <LinkButton
                            href="/crafting_guide/recipe2"
                            variant="ghost"
                            size="lg"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-11 px-8 w-full"
                            onClick={handleLinkClick}
                          >
                            Modded
                          </LinkButton>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <LinkButton
                    key={index}
                    href={item.href}
                    variant="ghost"
                    size="lg"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-11 px-8 text-center w-full"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </LinkButton>
                );
              })}
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
