"use client"

import {Button} from "@nextui-org/button";
import React, {useState} from "react";
import {Card, CardBody, DatePicker} from "@nextui-org/react";
import {EntityProduct} from "@/entities/product";
import {fromDate, getLocalTimeZone, parseDate} from "@internationalized/date";
import {cn, FormatTanggalTransaksi} from "@/lib/utils";

interface Props {
    callbackFilter: (awal: string, akhir:string) => void;
}

export const FilterPeriodeAwalAkhor = (props: Props) => {
    const [awal, setAwal] = useState("");
    const [akhir, setAkhir] = useState("");

    return <div className={"flex flex-col sm:flex-row gap-2 sm:items-center"}>
        <div className={"flex flex-row gap-2"}>
            <DatePicker
                className={"w-56"}
                label="Pilih Tanggal (Awal)"
                variant="bordered"
                showMonthAndYearPickers
                maxValue={akhir!=="" ? fromDate(new Date(akhir), getLocalTimeZone()): null}
                defaultValue={awal != "" ? parseDate(awal) : null}
                dateInputClassNames={{
                    input: "hidden"
                }}
                value={awal != "" ? parseDate(awal) : null}
                onChange={(value) => {
                    setAwal(value!.toString() || "")
                }}
                startContent={<div className={cn("flex-1", awal != "" ? "text-black" : "text-gray-500")}>
                    {awal != "" ? FormatTanggalTransaksi(awal) : "d MMM yyyy"}
                </div>}
            />

            <DatePicker
                className={"w-56"}
                label="Pilih Tanggal (Akhir)"
                variant="bordered"
                showMonthAndYearPickers
                minValue={awal!=="" ? fromDate(new Date(awal), getLocalTimeZone()): null}
                defaultValue={akhir != "" ? parseDate(akhir) : null}
                dateInputClassNames={{
                    input: "hidden"
                }}
                value={akhir != "" ? parseDate(akhir) : null}
                onChange={(value) => {
                    setAkhir(value!.toString() || "")
                }}
                startContent={<div className={cn("flex-1", akhir != "" ? "text-black" : "text-gray-500")}>
                    {akhir != "" ? FormatTanggalTransaksi(akhir) : "d MMM yyyy"}
                </div>}
            />
        </div>

        <div className={"flex flex-row gap-2"}>
            <Button color={"primary"} isDisabled={awal === "" || akhir===""} className={"w-20"} onClick={() => {
                props.callbackFilter(awal, akhir);
            }}>Filter</Button>
            <Button className={"w-20"} onClick={() => {
                setAwal("");
                setAkhir("");
                props.callbackFilter("", "");
            }}>Clear</Button>
        </div>
    </div>
}