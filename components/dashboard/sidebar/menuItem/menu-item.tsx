"use client";
import { MenuItemProps } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = ({ href, icon, title }: MenuItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? "flex gap-x-4 w-full pl-5 py-2  group bg-white rounded-md text-heroColor" : "flex gap-x-4 hover:bg-white w-full pl-5 py-2 rounded-md hover:text-herodarkColor"}
    >
      <div className="self-start pt-1 text-xl">{icon}</div>
      <p className="text-lg capitalize">{title}</p>
    </Link>
  );
};

export default MenuItem;
