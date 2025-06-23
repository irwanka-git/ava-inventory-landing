"use client"

import {Skeleton} from "@nextui-org/skeleton";

export const SkeletonForm = ()=>{
    return <>
        <div className="flex flex-col gap-2 w-full">
            <Skeleton className="h-8 mt-4 w-64 rounded-lg mb-4"/>
            <Skeleton className="h-7 w-[100%] rounded-lg"/>
            <Skeleton className="h-7 w-[100%] rounded-lg"/>
            <Skeleton className="h-7 w-[100%] rounded-lg"/>
        </div>
    </>
}

export default SkeletonForm;