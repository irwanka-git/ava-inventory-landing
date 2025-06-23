"use client"

import {Skeleton} from "@nextui-org/skeleton";
import {Card, CardBody} from "@nextui-org/react";

export const SkeletonCounter = ()=>{
    return <>
        <Card>
            <CardBody className={"h-20 flex gap-4 flex-row items-center"}>
                <Skeleton className="h-10 w-10 rounded-full"/>
                <div className={"flex flex-col gap-2"}>
                    <Skeleton className="h-4 w-36 rounded-lg"/>
                    <Skeleton className="h-3 w-20 rounded-lg"/>
                </div>
            </CardBody>
        </Card>
    </>
}

export default SkeletonCounter;