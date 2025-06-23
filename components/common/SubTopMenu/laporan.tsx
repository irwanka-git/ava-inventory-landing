"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {getPermissionSession} from "@/lib/session";
import {useCallback, useState} from "react";
import {cn, useEffectOnce} from "@/lib/utils";
import {isValidPathPermission} from "@/lib/route";
import {useIsDesktop} from "@/components/common/useDeviceDetect";


export const TopLaporanLink = ()=>{
    const isDesktop = useIsDesktop();

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
            <div className="flex flex-row gap-4 w-full pt-4 pb-6 px-2">
                {
                    isValidPathPermission("/auth/laporan-laba", permissionSession) &&
                    <Link href={"/auth/laporan-laba"} className={
                        cn( currentPath ==="/auth/laporan-laba" ? "text-primary font-bold" : "text-gray-500")
                    }> Laba/Rugi</Link>
                }
                {
                    isValidPathPermission("/auth/laporan-stok", permissionSession) &&
                    <Link href={"/auth/laporan-stok"} className={
                        cn( currentPath ==="/auth/laporan-stok" ? "text-primary font-bold" : "text-gray-500")
                    }> Stock</Link>
                }
                {
                    isValidPathPermission("/auth/laporan-purchasing", permissionSession) &&
                    <Link href={"/auth/laporan-purchasing"} className={
                        cn( currentPath ==="/auth/laporan-purchasing" ? "text-primary font-bold" : "text-gray-500")
                    }> Purchasing</Link>
                }
                {
                    isValidPathPermission("/auth/laporan-penjualan", permissionSession) &&
                    <Link href={"/auth/laporan-penjualan"} className={
                        cn( currentPath ==="/auth/laporan-penjualan" ? "text-primary font-bold" : "text-gray-500")
                    }> Penjualan</Link>
                }
                {
                    isValidPathPermission("/auth/laporan-rekap", permissionSession) &&
                    <Link href={"/auth/laporan-rekap"} className={
                        cn( currentPath ==="/auth/laporan-rekap" ? "text-primary font-bold" : "text-gray-500")
                    }> Rekap</Link>
                }
            </div>
        }
    </>
}

export default TopLaporanLink;