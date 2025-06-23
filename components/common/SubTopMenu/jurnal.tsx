"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {getPermissionSession} from "@/lib/session";
import {useCallback, useState} from "react";
import {cn, useEffectOnce} from "@/lib/utils";
import {isValidPathPermission} from "@/lib/route";


export const TopLinkJurnal = ()=>{
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
                isValidPathPermission("/auth/jurnal", permissionSession) &&
                <Link href={"/auth/jurnal"} className={
                    cn( currentPath ==="/auth/jurnal" ? "text-primary font-bold" : "text-gray-500")
                }> Jurnal</Link>
            }
            {
                isValidPathPermission("/auth/jurnal-pembuka", permissionSession) &&
                <Link href={"/auth/jurnal-pembuka"} className={
                    cn( currentPath ==="/auth/jurnal-pembuka" ? "text-primary font-bold" : "text-gray-500")
                }> Saldo Awal Tahun</Link>
            }
        </div>
        }
    </>
}

export default TopLinkJurnal;