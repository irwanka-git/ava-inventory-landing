"use client"

import {Avatar, AvatarIcon} from "@nextui-org/avatar";
import {Dropdown, DropdownTrigger} from "@nextui-org/dropdown";
import {Badge, DropdownItem, DropdownMenu} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {getCompanySelect, getCompanySelectName, getStateLogin, getUserSession} from "@/lib/session";
import {User} from "@/types/users";
import {Link} from "@nextui-org/link";
import {LuHistory, LuStore} from "react-icons/lu";
import {Button} from "@nextui-org/button";
import {AiOutlineHistory, AiOutlineMenu, AiOutlineProduct} from "react-icons/ai";
import {ModalLogsActivity} from "@/components/common/modal-logs-activity";
import {useDeviceDetect} from "@/components/common/useDeviceDetect";
import {cn} from "@/lib/utils";
import SidebarNav from "@/components/layout/SideMenu";
import SidebarNavMobile from "@/components/layout/SideMenuMobile";

export const HeaderNav = ()=>{
    const {deviceType} = useDeviceDetect();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openLogsActivity, setOpenLogsActivity] = useState(false);
    return (
        <>
            <div className={"h-[4.5rem] bg-white drop-shadow-sm static"}>
                <div className={"px-6 h-full flex w-full flex-row justify-between items-center"}>
                    <div className={cn("flex flex-row", deviceType == "desktop" ? "gap-6": "gap-1")}>
                        {
                            deviceType != "desktop" && <Button color={"secondary"} isIconOnly onClick={()=>{setOpenMobileMenu(true)}}>
                                <AiOutlineMenu size={20}/>
                            </Button>
                        }
                        {
                            deviceType == "desktop" && <CompanyNav/>
                        }
                        {
                            deviceType != "desktop" && <Link href={"/auth/company-select"}>
                                <Button color={"secondary"} isIconOnly><LuStore/></Button>
                            </Link>
                        }
                        <div className={"flex flex-row gap-2 items-center"}>
                            <Button isIconOnly={deviceType !="desktop"} onClick={()=>{setOpenLogsActivity(true)}}>
                                {deviceType =="desktop" && "Logs Activity "}<AiOutlineHistory size={20}/>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <UserLoginNav/>
                    </div>
                </div>
                <ModalLogsActivity open={openLogsActivity} setOpen={setOpenLogsActivity}/>
            </div>
            {
                deviceType != "desktop" && <SidebarNavMobile open={openMobileMenu} setOpen={setOpenMobileMenu}/>
            }
        </>
    )
}

const CompanyNav = ()=>{
    const [company, setCompany] = useState<string>("")
    const [loading,setLoading] = useState(true)
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

    return (<>
        {
            !loading &&
            <Link href={"/auth/company-select"}>
                <div className={"flex flex-col"}>
                    <span className={"text-xs"}>Company Name</span>
                    <span className={"text-sm font-bold"}>{company !="" ? company : "Select Company"}</span>
                </div>
            </Link>
        }
    </>)
}

const UserLoginNav = () => {

    const [user, setUser] = useState<User>()
    const cekUserLogin = async () => {
        const stateLogin = await getStateLogin();
        if (stateLogin==="valid") {
            const userLogin = await getUserSession();
            setUser(userLogin)
        }
    }

    useEffect(()=>{
        cekUserLogin();
    },[])
    return <div style={{cursor:"pointer"}}>
        <Dropdown>
            <DropdownTrigger>
                <div className={"flex flex-row items-center gap-3"}>
                    <div className={"flex flex-col text-right"}>
                        <span className={"font-medium text-sm"}>
                            {user?.nama_pengguna || ""}
                        </span>
                        <span className={"text-xs"}>
                            {user?.email || ""}
                        </span>
                    </div>
                    <div>
                        <Avatar size={"sm"} icon={<AvatarIcon/>}
                                isBordered
                                classNames={{
                                    base: "bg-gradient-to-b from-primary to-primary/90",
                                    icon: "text-white/80",
                                }}
                        />
                    </div>
                </div>
            </DropdownTrigger>

            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem className="h-14 gap-2" key={"useras"}>
                    <p className="font-medium text-sm">Signed in as</p>
                    <p className="font-medium text-sm">{user?.role_name!}</p>
                </DropdownItem>
                <DropdownItem color="danger"  key={"logout"}>
                    <Link href={"/logout"}>Log out</Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
}
export default HeaderNav