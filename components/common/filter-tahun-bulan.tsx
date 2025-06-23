"use client"

import {Button} from "@nextui-org/button";
import React, {useEffect, useState} from "react";
import {cn, FormatTanggalTransaksi, useEffectOnce} from "@/lib/utils";
import {getDataApi} from "@/action/client";
import {ListItemSelect, Tahun} from "@/types";
import {Select, SelectItem} from "@nextui-org/react";

interface Props {
    callbackFilter: (tahun: string, bulan:string) => void;
}

export const FilterTahunBulan = (props: Props) => {
    const [tahun, setTahun] = useState("")
    const [bulan, setBulan] = useState("")
    const [listTahun, setListTahun] = useState<ListItemSelect[]>([]);
    const [listBulan, setListBulan] = useState<ListItemSelect[]>([]);
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

    const generateListBulan = async ()=>{
        const months: string[] = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        const temparr:ListItemSelect[] = []
        temparr.push({value:"00", text:"Semua Bulan"})
        months.map((item, index)=>{
            temparr.push({value:(index + 1).toString().padStart(2, "0"), text:item})
        })
        setListBulan(temparr)
    }
    useEffectOnce(()=>{
        getListTahun().then(generateListBulan)
    });

    useEffect(() => {
        props.callbackFilter(tahun, bulan);
    }, [tahun, bulan]);

    return <div className={"flex flex-row gap-2 items-center justify-end"}>
        <div className={"flex flex-row items-center gap-4"}>
            <div className={"w-72"}>
                <div className="flex flex-row gap-2">
                    <Select label="Tahun" placeholder="Plih Tahun"
                            selectedKeys={[tahun]} onChange={e => setTahun(e.target.value)} >
                        {listTahun.map((item) => (
                            <SelectItem key={item.value}>{item.text}</SelectItem>
                        ))}
                    </Select>
                    <Select  label="Bulan" placeholder="Plih Bulan"
                             selectedKeys={[bulan]} onChange={e => setBulan(e.target.value)}>
                        {listBulan.map((item) => (
                            <SelectItem key={item.value}>{item.text}</SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    </div>
}