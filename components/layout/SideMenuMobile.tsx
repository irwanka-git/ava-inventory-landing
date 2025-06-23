"use client"

import React, {useEffect, useState} from "react";
import {Image} from "@nextui-org/react";
import {GenerateSideMenu} from "@/lib/route";
import {getCompanyColor, getCompanySelect, getCompanySelectName, getPermissionSession} from "@/lib/session";
import {ItemMenu} from "@/types";
import SideMenuItem from "@/components/layout/SideMenuItem";
import useLocalStorage from "@/hooks/useLocalStorage";
import {cn} from "@/lib/utils";
interface props {
    open:boolean,
    setOpen:(status:boolean)=>void,
}
export const SidebarNavMobile = (prop:props) => {

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
        setColorSelect(colorSelect);
        setPermissionSession(statePermission);
        setCompletePermissionCek(true);

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

    const [company, setCompany] = useState<string>("")
    const cekCompanySelect = async () => {
        const companySelect = await getCompanySelect();
        if (companySelect!="") {
            const companySelectName = await getCompanySelectName();
            setCompany(companySelectName)
        }
        setLoading(false)
    }

    useEffect(()=>{
        setLoading(true);
        cekCompanySelect();
    },[])

    return prop.open ?  <div className="relative z-99999">
        <div onClick={()=>{prop.setOpen(false)}} className={" cursor-pointer fixed left-0 top-0 w-[100%] min-h-screen h-max bg-neutral-900 opacity-50"}></div>
        <div
            className={cn("fixed z-99999 pt-8 left-0 top-0 flex min-h-screen h-max text-white flex-col w-52 items-center  drop-shadow-sm", colorSelect)}>
            <span className={"text-xl font-extrabold mb-4"}>{company}</span>
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
    </div> : <></>
}

export default SidebarNavMobile