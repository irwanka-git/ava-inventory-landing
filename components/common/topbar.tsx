"use client"

import {SubMenuLink} from "@/types";
import Link from "next/link";

interface PropsTop {
    pathname: string;
    listMenu: SubMenuLink[];
}

export const TopBarLink = (props:PropsTop)=>{
    return <>
        <div className="flex flex-row gap-2 w-full py-4">
            <Link href={"/auth/setting-perm"}> Setting Perm</Link>
            <Link href={"/auth/setting-perm"}> Setting Perm2</Link>
            <Link href={"/auth/setting-perm"}> Setting Perm3</Link>
        </div>
    </>
}

export default TopBarLink;