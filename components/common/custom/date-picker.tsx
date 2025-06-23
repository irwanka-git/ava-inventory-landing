import {parseDate} from "@internationalized/date";
import {Calendar} from "@nextui-org/react";
import React from "react";


export const CustomDatePicker = ()=>{
    return <>
        <Calendar
            errorMessage={"tanggal wajib dipilih"}
            aria-label="Date (Show Month and Year Picker)"
            showMonthAndYearPickers
            value={parseDate("2024-02-02")}
            onChange={(val)=>{
                alert(val.toString())
            }}
        />
    </>
}
