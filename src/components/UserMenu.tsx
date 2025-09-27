"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetProfileQuery } from "@/store/features/auth/authApi";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/features/auth/authSlice";
import { skipToken } from "@reduxjs/toolkit/query";

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const token = Cookies.get("token");
  const { data } = useGetProfileQuery(token ? undefined : skipToken);

  const [open, setOpen] = useState(false);

  const user = data?.data || null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "bg-gray-20 text-gray-100 font-rubik font-medium  size-8 rounded-full text-sm leading-none overflow-hidden",
            (!user || !token) && "hidden"
          )}
        >
          {user?.fullName?.charAt(0) || "U"}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-4">
        <div className="flex flex-col mb-2">
          <span className="font-medium">
            {user?.fullName || "Name not found"}
          </span>
          <span className="text-xs text-muted-foreground">
            {user?.email || "johndoe@email.com"}
          </span>
        </div>
        <div className="border-t border-muted my-2"></div>
        <div className="flex flex-col">
          <button
            className={cn(
              "flex items-center gap-2 p-2 rounded hover:bg-gray-20"
            )}
          >
            <User className="size-4" />
            Profile
          </button>
          <button
            onClick={() => {
              dispatch(logout());
              Cookies.remove("token");
            }}
            className={cn(
              "flex items-center gap-2 p-2 rounded-sm text-red-500 hover:bg-red-50 mt-1"
            )}
          >
            <LogOut className="size-4" />
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
