"use client"

import React  from "react";
import {Card, CardBody, DatePicker} from "@nextui-org/react";
import {MonthPicker} from "@/components/common/month-picker";


interface Props {
    callbackFilter: (awal: string, akhir:string) => void;
}


export const FilterPeriodeBulan = (props: Props) => {
    return <>
        <Card>
            <CardBody className={"h-20"}>
                <div className={"flex flex-row gap-3 items-center"}>
                    <MonthPicker label={"Periode"} placeholder={"Pilih Bulan"} defaultYear={2025}
                                 onMonthSelected={(awal:string, akhir:string)=>{
                                     props.callbackFilter(awal, akhir);
                                 }}/>
                </div>
            </CardBody>
        </Card>
    </>
}