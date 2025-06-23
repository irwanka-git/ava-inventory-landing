"use client"

import {Button} from "@nextui-org/button";
import React, {useEffect, useState} from "react";
import {cn, FormatTanggalTransaksi, useEffectOnce} from "@/lib/utils";
import {getDataApi} from "@/action/client";
import {ListItemSelect, Tahun} from "@/types";
import {Select, SelectItem} from "@nextui-org/react";

interface Props {
    callbackFilter: (tahun: string) => void;
}

export const FilterTahun = (props: Props) => {
    const [tahun, setTahun] = useState("")
    const [listTahun, setListTahun] = useState<ListItemSelect[]>([]);
    const getListTahun = async ()=>{
        const response = await getDataApi("/list/get-list-tahun")
        if (response?.status){
            const temparr:ListItemSelect[] = []
            response.data.map((item:Tahun)=>{
                temparr.push({value:item.tahun.toString(), text: item.tahun.toString()})
            })
            setListTahun(temparr)
        }
    }


    useEffectOnce(()=>{
        getListTahun().then()
    });

    useEffect(() => {
        props.callbackFilter(tahun);
    }, [tahun]);

    return <div className={"flex flex-row gap-2 items-center"}>
        <div className={"flex flex-row items-center gap-4"}>
            <div className={"w-72"}>
                <div className="flex flex-row gap-2">
                    <Select label="Tahun" placeholder="Plih Tahun"
                            selectedKeys={[tahun]} onChange={e => setTahun(e.target.value)} >
                        {listTahun.map((item) => (
                            <SelectItem key={item.value}>{item.text}</SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    </div>
}