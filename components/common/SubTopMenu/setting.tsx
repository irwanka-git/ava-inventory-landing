"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {getPermissionSession} from "@/lib/session";
import {useCallback, useState} from "react";
import {cn, useEffectOnce} from "@/lib/utils";
import {isValidPathPermission} from "@/lib/route";


export const TopLinkSetting = ()=>{
    const [permissionSession, setPermissionSession] = useState<string[]>([]);
    const [complete, setComplete] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    const getListPermisssion = useCallback(async() => {
        const statePermission = await getPermissionSession();
        setPermissionSession(statePermission);
        if (pathname.split("/").length >  3) {
            const splitPath = pathname.split("/")
            setCurrentPath("/" + splitPath[1] + "/" + splitPath[2]);
        }else{
            setCurrentPath(pathname);
        }

        setComplete(true);
    }, []);


    const pathname = usePathname();

    useEffectOnce(()=>{
        getListPermisssion();
    })

    return <>
        {complete &&
        <div className="flex flex-row gap-4 w-full pt-4 pb-6  px-2">
            {
                isValidPathPermission("/auth/setting-user", permissionSession) &&
                <Link href={"/auth/setting-user"} className={
                    cn( currentPath ==="/auth/setting-user" ? "text-primary font-bold" : "text-gray-500")
                }> User</Link>
            }
            {
                isValidPathPermission("/auth/setting-permission", permissionSession) &&
                <Link href={"/auth/setting-permission"} className={
                    cn( currentPath ==="/auth/setting-permission" ? "text-primary font-bold" : "text-gray-500")
                }> Hak Akses</Link>
            }
        </div>
        }
    </>
}

export default TopLinkSetting;