"use client"

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {ItemMenu} from "@/types";
import SideMenuItemDropdown from "@/components/layout/SideMenuItemDropdown";
import {Jurnal, KatalogMenu, LaporanMenu, ReferensiMenu, SettingMenu} from "@/lib/route";

export interface ISideMenuItemProps {
    item: ItemMenu;
    pageName: string;
    color: string;
    setPageName: (val: string) => void;
}

export const SideMenuItem = (props:ISideMenuItemProps) => {
    const pathname = usePathname();

    const isActive = (item:ItemMenu) => {

        if (item.route === pathname) return true;
        const pathSplit=pathname.split("/");
        let path = pathname;
        if (pathSplit.length > 3){
            path = "/" + pathSplit[1] + "/" + pathSplit[2];
        }

        switch(props.item.name) {
            case "referensi":
                if (ReferensiMenu.includes(path)){
                    return true;
                }
                break;
            case "katalog":
                if (KatalogMenu.includes(path)){
                    return true;
                }
                break;
            case "jurnal":
                if (Jurnal.includes(path)){
                    return true;
                }
                break;
            case "laporan":
                if (LaporanMenu.includes(path)){
                    return true;
                }
                break;
            case "setting":
                if (SettingMenu.includes(path)){
                    return true;
                }
                break;
            default:
        }

        if (item.route === path) return true;
    };

    const isItemActive = isActive(props.item);

    const handleClick = () => {
        const updatedPageName =
            props.pageName !== props.item.label.toLowerCase() ? props.item.label.toLowerCase() : "";
        return props.setPageName(updatedPageName);
    };

    return (
        <li>
            <Link href={props.item.route}
                  onClick={handleClick}
                  className={`text-sm flex ${props.color=="bg-pink-500" ? "text-gray-700" : ""} ${isItemActive ? `bg-gradient-to-b ${props.color=="bg-pink-500" ? "from-pink-800 to-pink-900 text-white": "from-yellow-400 to-yellow-300"} text-primary` : ""} relative gap-2 flex-row items-center w-full cursor-pointer px-3 py-2 rounded-md hover:text-primary hover:bg-gradient-to-b ${props.color=="bg-pink-500" ? "hover:from-pink-800 hover:to-pink-900 hover:text-white ": "hover:from-yellow-400 hover:to-yellow-300 "} `}>
                {props.item.icon} {props.item.label}
                {props.item.children.length > 0 && (
                    <svg
                        className={`absolute right-2 top-1/2 -translate-y-1/2 fill-current ${
                            props.pageName === props.item.label.toLowerCase() ?  "rotate-0" : "-rotate-90"
                        }`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                        />
                    </svg>
                )}
            </Link>
            {props.item.children.length > 0 && (
                <div
                    className={`translate animate-appearance-in transform overflow-hidden ${
                        props.pageName !== props.item.label.toLowerCase() && "hidden"
                    }`}
                >
                    <SideMenuItemDropdown item={props.item.children} />
                </div>
            )}
        </li>
    )
}

export default SideMenuItem