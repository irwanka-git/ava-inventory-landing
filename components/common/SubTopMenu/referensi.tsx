"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {getPermissionSession} from "@/lib/session";
import {useCallback, useState} from "react";
import {cn, useEffectOnce} from "@/lib/utils";
import {isValidPathPermission} from "@/lib/route";


export const TopLinkReferensi = ()=>{
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
                    isValidPathPermission("/auth/katalog-channel", permissionSession) &&
                    <Link href={"/auth/katalog-channel"} className={
                        cn( currentPath ==="/auth/katalog-channel" ? "text-primary font-bold" : "text-gray-500")
                    }>Marketplace</Link>
                }
                {/*{*/}
                {/*    isValidPathPermission("/auth/referensi-company", permissionSession) &&*/}
                {/*    <Link href={"/auth/referensi-company"} className={*/}
                {/*        cn( currentPath ==="/auth/referensi-company" ? "text-primary font-bold" : "text-gray-500")*/}
                {/*    }> Company</Link>*/}
                {/*}*/}
                {/*{*/}
                {/*    isValidPathPermission("/auth/referensi-supplier", permissionSession) &&*/}
                {/*    <Link href={"/auth/referensi-supplier"} className={*/}
                {/*        cn( currentPath ==="/auth/referensi-supplier" ? "text-primary font-bold" : "text-gray-500")*/}
                {/*    }>Supplier</Link>*/}
                {/*}*/}
                {/*{*/}
                {/*    isValidPathPermission("/auth/referensi-kurs", permissionSession) &&*/}
                {/*    <Link href={"/auth/referensi-kurs"} className={*/}
                {/*        cn( currentPath ==="/auth/referensi-kurs" ? "text-primary font-bold" : "text-gray-500")*/}
                {/*    }>Kurs</Link>*/}
                {/*}*/}
                {
                    isValidPathPermission("/auth/referensi-akun", permissionSession) &&
                    <Link href={"/auth/referensi-akun"} className={
                        cn( currentPath ==="/auth/referensi-akun" ? "text-primary font-bold" : "text-gray-500")
                    }>Akun</Link>
                }
            </div>
        }
    </>
}

export default TopLinkReferensi;