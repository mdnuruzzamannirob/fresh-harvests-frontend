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
import AuthForm from "../AuthForm";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/features/auth/authSlice";
import Cookies from "js-cookie";

const Sidebar = () => {
  const { token, user } = useAppSelector((state) => state?.auth);

  const [open, setOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

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
        <button className="p-1 lg:hidden">
          <RiMenuFill className="text-base" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <VisuallyHidden>
          <DrawerTitle></DrawerTitle>
        </VisuallyHidden>

        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <Logo />
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <IoCloseOutline className="size-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-4">
            <ul className="space-y-1">{renderMenuItems(sideItems)}</ul>
          </nav>

          {/* User Section */}
          <div className="mt-auto p-4 border-t">
            {user && token ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {/* User Icon */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                    {user.fullName?.[0]?.toUpperCase() || "U"}
                  </div>
                  {/* User Info */}
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {user.fullName || "Name not found"}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={() => {
                    dispatch(logout());
                    Cookies.remove("token");
                    setOpen(false);
                  }}
                  className="mt-2 py-2 px-4 w-full bg-red-500 text-white rounded-sm hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Dialog open={isClose} onOpenChange={setIsClose}>
                <DialogTrigger asChild>
                  <button className="py-2 px-4 border w-full flex items-center justify-center border-gray-50 rounded-sm">
                    Sign in
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <VisuallyHidden>
                    <DialogTitle />
                  </VisuallyHidden>
                  <AuthForm setIsClose={setIsClose} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
