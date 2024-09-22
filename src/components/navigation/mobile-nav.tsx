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
import { MenuIcon, XIcon } from "lucide-react";
import LinkButton from "../buttons/link-button";
import Image from "next/image";
import { config } from "../../../config";

const MobileNav = ({
  items = defaultNavigation.items,
  className,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false); // Add drawer state

  items = items.filter((item) => item.enabled);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the drawer when a link is clicked
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
                  onClick={() => setIsOpen(false)} // Close drawer on click
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
              {items.map((item, index) => (
                <LinkButton
                  key={index}
                  href={item.href}
                  variant="ghost"
                  size="lg"
                  className="w-fit mx-auto"
                  onClick={handleLinkClick} // Close drawer when link is clicked
                >
                  {item.label}
                </LinkButton>
              ))}
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
