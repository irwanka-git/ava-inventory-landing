"use client"

import {Skeleton} from "@nextui-org/skeleton";

export const SkeletonBasic = ()=>{
    return <>
        <div className="flex flex-col gap-2 w-full py-2">
            <Skeleton className="h-7 w-[100%] rounded-lg"/>
            <Skeleton className="h-7 w-[100%] rounded-lg"/>
            <Skeleton className="h-7 w-[100%] rounded-lg"/>
        </div>
    </>
}

export default SkeletonBasic;