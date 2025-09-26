"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import Logo from "../Logo";
import { IoCloseOutline } from "react-icons/io5";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { TSideItems } from "@/types";
import { sideItems } from "@/constants/sideItems";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path: string | null) => {
    if (path) {
      router.push(path);
      setOpen(false);
    }
  };

  const toggleSubmenu = (itemName: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const renderMenuItems = (items: TSideItems[], level = 0) => {
    return items.map((item, index) => (
      <li key={index} className="flex flex-col gap-1">
        <button
          onClick={() => {
            if (item.children) {
              toggleSubmenu(item.name);
            } else {
              handleNavigation(item.path);
            }
          }}
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-sm px-3 py-2 text-sm transition-colors",
            pathname?.includes(item.path as string)
              ? "bg-[#EBEBEB]"
              : openSubmenus[item.name]
              ? "bg-[#EBEBEB]"
              : "text-muted-foreground hover:bg-black/5 hover:text-inherit"
          )}
        >
          {item.name}
          {item.children && (
            <IoIosArrowDown
              className={openSubmenus[item.name] ? "rotate-180" : "rotate-0"}
            />
          )}
        </button>

        {/* Submenu Items */}
        {item.children && openSubmenus[item.name] && (
          <ul
            className={cn(
              "space-y-1 border-l border-black/10 pl-2 dark:border-white/10"
            )}
          >
            {renderMenuItems(item.children, level + 1)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button>
          <RiMenuFill className="text-base" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <VisuallyHidden>
          <DrawerTitle></DrawerTitle>
        </VisuallyHidden>
        <div className="flex items-center justify-between border-b p-4">
          <Logo />

          <button aria-label="Close menu" onClick={() => setOpen(false)}>
            <IoCloseOutline className="size-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className=" p-4">
          <ul className="space-y-1">{renderMenuItems(sideItems)}</ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
