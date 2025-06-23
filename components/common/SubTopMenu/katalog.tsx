"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {getPermissionSession} from "@/lib/session";
import {useCallback, useState} from "react";
import {cn, useEffectOnce} from "@/lib/utils";
import {isValidPathPermission} from "@/lib/route";


export const TopKatalogLink = ()=>{
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
                isValidPathPermission("/auth/katalog-product", permissionSession) &&
                <Link href={"/auth/katalog-product"} className={
                    cn( currentPath ==="/auth/katalog-product" ? "text-primary font-bold" : "text-gray-500")
                }> Product & Varian</Link>
            }
            {
                isValidPathPermission("/auth/katalog-kategori", permissionSession) &&
                <Link href={"/auth/katalog-kategori"} className={
                    cn( currentPath ==="/auth/katalog-kategori" ? "text-primary font-bold" : "text-gray-500")
                }> Kategori</Link>
            }
            {/*{*/}
            {/*    isValidPathPermission("/auth/katalog-channel", permissionSession) &&*/}
            {/*    <Link href={"/auth/katalog-channel"} className={*/}
            {/*        cn( currentPath ==="/auth/katalog-channel" ? "text-primary font-bold" : "text-gray-500")*/}
            {/*    }> Kanal (Marketplace)</Link>*/}
            {/*}*/}
        </div>
        }
    </>
}

export default TopKatalogLink;