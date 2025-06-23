"use client"

import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {useEffect, useRef, useState} from "react";
import {FaCalendarAlt} from "react-icons/fa";
import {Select, SelectItem} from "@nextui-org/select";
import {KeyLabel, Tahun} from "@/types";
import {getSessionListTahun} from "@/lib/session";


interface Props {
    onYearSeleted: (tahun:string)=> void;
    defaultYear?:  number;
    label: string;
    placeholder:string;
}

export const YearPicker = (props:Props)=>{
    const [valueText, setValueText] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectYear, setSelectYear] = useState<string[]>(props.defaultYear ? [props.defaultYear.toString()] : []);
    const [listTahun, setListTahun] = useState<KeyLabel[]>([])
    const getListTahun = async ()=>{
        const cekTahun = await getSessionListTahun();
        const listTmp:KeyLabel[]  = []
        cekTahun.map((item)=>{
            listTmp.push({key:item.tahun.toString(), label:item.tahun.toString()})
        })
        setListTahun(listTmp);
    }
    useEffect(() => {
        getListTahun();
    }, []);

    useEffect(() => {
        if (listTahun.length > 0 ){
            setSelectYear(props.defaultYear ? [props.defaultYear.toString()] : []);
        }
    }, [listTahun]);

    useEffect(() => {
        if (selectYear.length > 0){
            props.onYearSeleted(`${selectYear[0]}`)
        }
    }, [selectYear]);

    return (
        <div className={"flex flex-row w-56 border-neutral-200 border-1 rounded-lg bg-neutral-100"}>
            <>
                <Select
                    selectedKeys={selectYear}
                    onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
                        if (e.target.value==="") {
                            setSelectYear([]);
                        }else{
                            setSelectYear([e.target.value.toString()]);
                            setIsOpen(false);
                        }
                    }}

                    label={selectYear.length===0 ? "Pilih Periode/Tahun" :"Tahun"}
                >
                    {
                        listTahun.map((item)=>(
                            <SelectItem key={item.key.toString()}>{item.label}</SelectItem>
                        ))
                    }
                </Select>
            </>
        </div>
    )
}