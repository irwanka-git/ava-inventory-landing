"use client"

import React, {useEffect, useState} from "react";
import {Image} from "@nextui-org/react";
import {GenerateSideMenu} from "@/lib/route";
import {getCompanyColor, getCompanySelect, getPermissionSession} from "@/lib/session";
import {ItemMenu} from "@/types";
import SideMenuItem from "@/components/layout/SideMenuItem";
import useLocalStorage from "@/hooks/useLocalStorage";
import {cn} from "@/lib/utils";

export const SidebarNav = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [permissionSession, setPermissionSession] = useState<string[]>([]);
    const [completePermissionCek, setCompletePermissionCek] = useState<boolean>(false);
    const [menu, setMenu] = useState<ItemMenu[]>([])
    const [colorSelect, setColorSelect] = useState("bg-primary")
    const [companySelect, setCompanySelect] = useState("")
    const cekPermissionLogin = async () => {
        const statePermission = await getPermissionSession();
        const colorSelect = await  getCompanyColor()
        const comSelect = await getCompanySelect();
        setCompanySelect(comSelect);
        setPermissionSession(statePermission);
        setCompletePermissionCek(true);
        setColorSelect(colorSelect);
    }

    useEffect(() => {

        cekPermissionLogin().then(
            () => {
                setLoading(true)
            }
        );
    }, []);

    useEffect(() => {
        if (completePermissionCek) {
            const sideMenu = GenerateSideMenu(permissionSession);
            setMenu(sideMenu);
            setLoading(true);
        }
    }, [completePermissionCek, permissionSession]);

    const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

    return (
        <div className={cn("fixed z-10 flex min-h-screen h-max text-white flex-col w-52 items-center drop-shadow-sm",colorSelect)}>
            <Image
                sizes={"100vw"}
                className="w-32 mt-8 sm:w-32 object-cover mb-6 shadow drop-shadow-sm"
                src={`/images/${companySelect}.png`}
                alt="Logo"
            />
            <aside className="w-full">
                <nav>
                    <ul className="space-y-2 p-4">
                        {menu.map((item, index) => (
                            <SideMenuItem color={colorSelect} key={`menu-${index}`}
                                          item={item}
                                          pageName={pageName}
                                          setPageName={setPageName}/>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default SidebarNav