"use client"

import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {EffectCallback, useEffect} from 'react'

import {format} from "date-fns";
import {id} from "date-fns/locale";
import moment from "moment";
import {Size} from "@/types";
import {ListItem} from "@/types/list";
import {DateValue} from "@react-types/calendar";
import {parseDate} from "@internationalized/date";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const CheckForRedundancyArrayString = (inputArray:string[]) => {
    const uniqueStrings = new Set(inputArray);
    const redundantStrings = inputArray.filter((str) => {
        return uniqueStrings.has(str) && inputArray.indexOf(str) !== inputArray.lastIndexOf(str);
    });
    return  redundantStrings.length > 0
};

export const AddHttp = (url:string)=>{
    if (!/^(?:f|ht)tp?:\/\//i.test(url)) {
        url = "http://" + url;
    }
    return url
}
export function getSizeViewBrowser(): Size {
    const h = window.innerHeight;
    const w = window.innerWidth;
    return {
        height: h, width: w
    }
}

export function ToTimeAgo(isoTimestamp: string): string {
    const now = new Date();
    const past = new Date(isoTimestamp);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(diffInSeconds / secondsInUnit);
        if (interval >= 1) {
            return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
        }
    }

    return "just now";
}


export function useEffectOnce(effect: EffectCallback) {
    useEffect(effect, []);
}

export function isValueObject(value: any) {
    return typeof value === 'object'
        && value !== null
        && !Array.isArray(value)
        && !(value instanceof RegExp)
        && !(value instanceof Date)
        && !(value instanceof Set)
        && !(value instanceof Map)
}

export function FormatTanggalIndo(value: string) {
    return value != "" ? format(value, "d MMMM yyy", {locale: id}) : ""
}
export function FormatHariTanggalIndo(value: string) {
    return value != "" ? format(value, "eeee, d MMMM yyy", {locale: id}) : ""
}
export function FormatTanggalIndo2(value: string) {
    return value != "" ? format(value, "dd/MM/yyyy", {locale: id}) : ""
}

export function FormatTanggalTransaksi2(value: string) {
    return value != "" ? format(value, "d MMM yyy", {locale: id}) : ""
}
export function FormatTanggalTransaksi(value: string) {
    return value != "" ? format(value, "dd/MM/yyy", {locale: id}) : ""
}
export function FormatTanggalTransaksi3(value: string) {
    return value != "" ? format(value, "dd/MM", {locale: id}) : ""
}

export function FormatTanggalJamIndo(value: string) {
    const valueTime = value != "" ? moment(value).utc().format("YYYY-MM-DD HH:mm") : "";
    if (valueTime != "") {
        const waktu = valueTime.split(" ")
        const tanggal = waktu[0] != "" ? format(waktu[0], "d MMMM yyy", {locale: id}) : ""
        const jam = waktu[1];
        return tanggal + " " + jam + " WIB";
    }
    return ""
}

export function GetCurrentYYYYMM(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
}
export function GetCurrentYYYYMMDD(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function GetTanggalAwalTahun(): string {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}-01-01`;
}

export function GetTanggalAkhirTahun(): string {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}-12-31`;
}


export function GetTanggalAwalBulan(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}-01`;
}

export function GetLastDateOfMonth(year:number, month:number) {
    // Set the date to the 0th of the next month to get the last day of the current month
    return new Date(year, month, 0);
}
export function GetTanggalAkhirBulan(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    return FormatDateString(GetLastDateOfMonth(year, parseInt(month)))
}
function FormatDateString(date:Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function FormatDateToMonthNameYear(dateStr: string): string {
    if (dateStr.length != 7){
        return "Invalid"
    }
    // Array bulan dalam bahasa Indonesia
    const months: string[] = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    // Memastikan format input adalah YYYY-MM
    const [year, month] = dateStr.split('-');

    // Menyusun bulan dalam bahasa Indonesia dan tahun
    const monthName = months[parseInt(month, 10) - 1]; // Array dimulai dari index 0, bulan dimulai dari 1
    return `${monthName} ${year}`;
}


export function FormatTanggalJamIndoCompact(value: string) {
    const valueTime = value != "" ? moment(value).utc().format("YYYY-MM-DD HH:mm") : "";
    if (valueTime != "") {
        const waktu = valueTime.split(" ")
        const tanggal = waktu[0] != "" ? format(waktu[0], "d/MM/yy", {locale: id}) : ""
        const jam = waktu[1];
        return tanggal + " " + jam + " WIB";
    }
    return ""
}

export function IsValidUrl(urlString:string) {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

export function GetDuplicatesArray(array:string[]) {
    return array.filter((value,index) => array.indexOf(value) !== index);
}


export function FormatToDesimalInput(value:number) {
    // Convert input to string and normalize it
    if (value == undefined) {
        return ""
    }
    const numStr = value.toString()
    // Split number into integer and decimal parts
    let [integerPart, decimalPart="00" ] = numStr.split('.');
    // Ensure decimal part has exactly 2 digits
    decimalPart = decimalPart.padEnd(2, '0').slice(0, 2);
    // Format integer part with dots for thousands
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // Combine with comma as decimal separator
    // alert(`${formattedInteger},${decimalPart}`);
    return `${formattedInteger},${decimalPart}`;
}
export function FormatToDesimalInput3(value3:number) {
    if (value3 == undefined) {
        return ""
    }

    const value = value3.toFixed(3);

    // Convert input to string and normalize it
    const numStr = value.toString()
    // Split number into integer and decimal parts
    let [integerPart, decimalPart="000" ] = numStr.split('.');
    // Ensure decimal part has exactly 2 digits
    decimalPart = decimalPart.padEnd(3, '0').slice(0, 3);
    // Format integer part with dots for thousands
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // Combine with comma as decimal separator
    // alert(`${formattedInteger},${decimalPart}`);
    return `${formattedInteger},${decimalPart}`;
}

export function ConvertRupiahToNumber(rupiahString:string) {
    // Remove "RP." and any dots, then parse as float
    const numericString = rupiahString.replace(/[Rp.\s]/g, ''); // Remove "RP", ".", and any spaces
    return parseFloat(numericString);
}

export function ConvertRupiahInputToNumber(rupiahString:string) {
    // Remove "RP." and any dots, then parse as float
    if (rupiahString === "" || rupiahString==undefined) return 0
    const numericString = rupiahString.replace(/[Rp.\s]/g, '').replace(".", '').replace(",",'.'); // Remove "RP", ".", and any spaces
    return parseFloat(numericString);
}
export function ConvertCNYToNumber(rupiahString:string) {
    const numericString = rupiahString.replace(/[CN \s]/g, ''); // Remove "RP", ".", and any spaces
    const numericString2 = numericString.replace(/[¥\s]/g, ''); // Remove "RP", ".", and any spaces
    return parseFloat(numericString2);
}

export function FormatToRupiah(val:number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2, // Typically Rupiah doesn't use decimals
    }).format(val);
}

export function FormatToRupiahInput(val:number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2, // Typically Rupiah doesn't use decimals
    }).format(val);
}

export function FormatToCNY(val:number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "CNY",
        minimumFractionDigits: 2,
    }).format(val).replace(/^(\D+)/, "$1 ").replace("CN", "")
}


export function Format2Decimal(val:number) {
    return new Intl.NumberFormat("id-ID", {
        minimumFractionDigits: 2,
    }).format(val).replace(/^(\D+)/, "$1 ")
}

export function Format3Decimal(val:number) {
    return new Intl.NumberFormat("id-ID", {
        minimumFractionDigits: 3,
    }).format(val).replace(/^(\D+)/, "$1 ")
}

export function GenListStatusStock() {
    const tempList: ListItem[] = []
    tempList.push({text:"Semua", value:"ALL"});
    tempList.push({text:"Stock Aman", value:"AMAN"});
    tempList.push({text:"Perlu Restock", value:"RESTOCK"});
    return tempList
}


export function GetListNormalBalanced() {
    const tempList: ListItem[] = []
    tempList.push({text:"Debit", value:"DEBIT"});
    tempList.push({text:"Kredit", value:"KREDIT"});
    return tempList
}

export const IsDateInRange = (date:Date, start:Date, end:Date) => {
    return date >= start && date <= end;
};
export function GetMonthAndYear(dateString:string) {
    const bulan = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei',
        'Juni', 'Juli', 'Agustus', 'September',
        'Oktober', 'November', 'Desember'
    ];
    const [year, month] = dateString.split('-').map(Number);
    const monthName = bulan[month - 1];
    return `${monthName} ${year}`;
}