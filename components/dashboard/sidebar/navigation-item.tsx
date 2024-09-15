import React from "react";
import { GrCatalogOption } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoHomeOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import MenuItem from "./menuItem/menu-item";

const NavigationItem = () => {
  const adminSidebarItems = [
    {
      title: "Overview",
      icon: <IoHomeOutline />,
      href: "/dashboard",
    },
    {
      title: "Inventory",
      icon: <GrCatalogOption />,
      href: "/dashboard/inventory",
    },
    {
      title: "Transactions",
      icon: <MdAttachMoney />,
      href: "/dashboard/transactions",
    },
    {
      title: "Settings",
      icon: <IoSettingsOutline />,
      href: "/dashboard/settings",
    },
  ];

  return (
    <ScrollArea className="flex-1 w-full">
      <div className="flex flex-col gap-y-4 px-2">
        {adminSidebarItems.map((navItem) => {
          return (
            <MenuItem
              href={navItem.href}
              icon={navItem.icon}
              title={navItem.title}
              key={navItem.title}
            />
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default NavigationItem;
