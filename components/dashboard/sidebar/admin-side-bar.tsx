import { Separator } from "@/components/ui/separator";
import React from "react";
import NavigationItem from "./navigation-item";

const AdminSidebar = () => {
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full  bg-[#E3E5E8] py-3">
      <div className="flex justify-center items-center gap-x-1">
        <h1 className="font-extrabold text-xl pt-1 text-heroColor">Dashboard</h1>
      </div>
      <Separator className="h-[2px] bg-zinc-400 w-40 rounded-md mx-auto" />
      <NavigationItem />
    </div>
  );
};

export default AdminSidebar;
