"use client"

import {Skeleton} from "@nextui-org/skeleton";

export const SkeletonPage = ()=>{
    return <>
        <div className="flex flex-col gap-2 w-full">
            <Skeleton className="h-5 w-64 rounded-lg"/>
            <div className="w-full flex flex-row justify-between mb-6">
                <div className={"flex flex-row gap-2"}>
                    <Skeleton className="h-8 mt-4 w-20 rounded-lg"/>
                    <Skeleton className="h-8 mt-4 w-20 rounded-lg"/>
                </div>
                <Skeleton className="h-8 mt-4 w-32 rounded-lg"/>
            </div>
            <Skeleton className="h-32 w-[100%] rounded-lg"/>
            <Skeleton className="h-7 w-[100%] rounded-lg"/>
            <Skeleton className="h-7 w-[80%] rounded-lg"/>
            <Skeleton className="h-7 w-[70%] rounded-lg"/>
        </div>
    </>
}

export default SkeletonPage;