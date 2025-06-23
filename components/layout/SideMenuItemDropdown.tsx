"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ItemSubMenu} from "@/types";

export interface ISideMenuItemDropdownProps {
    item: ItemSubMenu[];
}

const SideMenuItemDropdown = (props:ISideMenuItemDropdownProps) => {
    let pathname = usePathname();
    const pathSplit = pathname.split("/");
    if (pathSplit.length > 3) {
        pathname = "/" + pathSplit[1] + "/" + pathSplit[2];
    }

    return (
        <>
            <ul className="py-2 flex flex-col gap-0">
                {props.item.map((item: ItemSubMenu, index: number) => (
                    <li key={index}>
                        <Link
                            href={item.route}
                            className={`text-sm relative flex items-center rounded-md pl-10 pr-2 py-2 duration-300 ease-in-out hover:text-primary hover:bg-yellow-300 ${
                                pathname === item.route ? "text-yellow-200" : "text-white "
                            }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SideMenuItemDropdown;
