"use client"

import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {useEffect, useRef, useState} from "react";
import {FaCalendarAlt} from "react-icons/fa";
import {FormatTanggalTransaksi, GetMonthAndYear} from "@/lib/utils";
import {Select, SelectItem} from "@nextui-org/select";
import type {Selection} from "@nextui-org/react";

import {Chip} from "@nextui-org/chip";
import {KeyLabel, Tahun} from "@/types";
import {getSessionListTahun} from "@/lib/session";






interface PopDateProps {
    defaultYear?: number;
    defaultMonth?: number;
    onMonthSelect: (awal: string, akhir:string)=> void;
}
const PopupMonth = ({defaultYear,
                        defaultMonth,
                    onMonthSelect,
                    }:PopDateProps)=>{

    const [isOpen, setIsOpen] = useState(false);
    const [bulan, setBulan] = useState(defaultMonth || 0)
    const [selectYear, setSelectYear] = useState<string[]>(defaultYear ? [defaultYear.toString()] : []);
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
        if (!isOpen){
            return
        }
        getListTahun();
    }, [isOpen]);

    useEffect(() => {
        if (listTahun.length > 0 ){
            setSelectYear(defaultYear ? [defaultYear.toString()] : []);
        }
    }, [listTahun]);

    const handlePilihBulan = (bulan: number)=>{
        setBulan(bulan);
        setIsOpen(false);
        onMonthSelect(`${selectYear[0]}-${bulan.toString().padStart(2,"0")}-01`, new Date(Number(selectYear[0]), bulan, 1).toISOString().split('T')[0]);
    }

    return (
        <div className={"-mb-1 -mr-1"}>
            <Popover placement={"bottom-end"} offset={12} isOpen={isOpen} onOpenChange={()=>{
                setIsOpen(!isOpen);
            }}>
                <PopoverTrigger>
                    <Button size={"sm"} className={"rounded-full"}  isIconOnly variant={"light"} >
                        <FaCalendarAlt className={"text-neutral-400"} size={16}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className={"w-56 p-0 rounded-2xl -mr-2"}>
                    <div className={"flex flex-col w-full bg-white rounded-2xl"}>
                        <div className={"p-2"}>
                            <Select
                                selectedKeys={selectYear}
                                onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
                                    if (e.target.value==="") {
                                        setSelectYear([]);
                                    }else{
                                        setSelectYear([e.target.value.toString()]);
                                    }
                                }}
                                classNames={{
                                    trigger: "bg-white hover:bg-slate-400/50 shadow-none drop-shadow-none",
                                    mainWrapper:"hover:bg-white",
                                }}
                                label={selectYear.length===0 ? "Pilih Tahun" :"Tahun"}
                            >
                                {
                                    listTahun.map((item)=>(
                                        <SelectItem key={item.key.toString()}>{item.label}</SelectItem>
                                    ))
                                }
                            </Select>
                        </div>
                        <div className={"flex text-secondary rounded-b-2xl gap-0 bg-gradient-to-b from-stone-100 to-neutral-50/60 flex-col w-full px-6 py-4 pb-6"}>
                            <div className={"flex flex-row justify-center gap-6"}>
                                <Button onClick={()=>{handlePilihBulan(1)}}   isIconOnly isDisabled={selectYear.length===0} variant={bulan===1 ? "solid": "light"}>Jan</Button>
                                <Button onClick={()=>{handlePilihBulan(2)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===2 ? "solid": "light"}>Feb</Button>
                                <Button onClick={()=>{handlePilihBulan(3)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===3 ? "solid": "light"}>Mar</Button>
                            </div>
                            <div className={"flex flex-row justify-center gap-6"}>
                                <Button onClick={()=>{handlePilihBulan(4)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===4 ? "solid": "light"}>Apr</Button>
                                <Button onClick={()=>{handlePilihBulan(5)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===5 ? "solid": "light"}>Mei</Button>
                                <Button onClick={()=>{handlePilihBulan(6)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===6 ? "solid": "light"}>Jun</Button>
                            </div>
                            <div className={"flex flex-row justify-center gap-6"}>
                                <Button onClick={()=>{handlePilihBulan(7)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===7 ? "solid": "light"}>Jul</Button>
                                <Button onClick={()=>{handlePilihBulan(8)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===8 ? "solid": "light"}>Agu</Button>
                                <Button onClick={()=>{handlePilihBulan(9)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===9 ? "solid": "light"}>Sep</Button>
                            </div>
                            <div className={"flex flex-row justify-center gap-6"}>
                                <Button onClick={()=>{handlePilihBulan(10)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===10 ? "solid": "light"}>Okt</Button>
                                <Button onClick={()=>{handlePilihBulan(11)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===11 ? "solid": "light"}>Nov</Button>
                                <Button onClick={()=>{handlePilihBulan(12)}}  isIconOnly isDisabled={selectYear.length===0} variant={bulan===12 ? "solid": "light"}>Des</Button>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
        )
}

interface Props {
    onMonthSelected: (awal:string, akhir:string)=> void;
    defaultYear?:  number;
    defaultMonth?: number;
    label: string;
    placeholder:string;
}

export const MonthPicker = (props:Props)=>{
    const [valueText, setValueText] = useState("")
    return (
        <div className={"flex flex-row"}>
            <>
                <Input type="text"
                       variant="bordered"
                       label={props.label}
                       value={valueText}
                       isReadOnly={true}
                       endContent={
                            <PopupMonth
                                defaultYear={props.defaultYear}
                                defaultMonth={props.defaultMonth}
                                onMonthSelect={(awal:string, akhir:string)=>{
                                props.onMonthSelected(awal,akhir);
                                setValueText(GetMonthAndYear(akhir));
                            }}/>
                       }
                       placeholder={props.placeholder}
                       className={"focus:ring-0 w-min-48"}/>

            </>
        </div>
    )
}