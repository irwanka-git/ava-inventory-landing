/* eslint-disable  @typescript-eslint/no-unused-vars */
"use client"

import {FiSettings} from "react-icons/fi";
import React from "react";
import {ItemSubMenu} from "@/types";
import {LuLayoutDashboard} from "react-icons/lu";
import {CiCircleList, CiDatabase} from "react-icons/ci";
import {IoPricetagOutline} from "react-icons/io5";
import {HiOutlineDocumentReport} from "react-icons/hi";
import {FaMoneyBill1} from "react-icons/fa6";
import {FaBalanceScale} from "react-icons/fa";

const routePermission = [
    {
        route: "/auth/setting-permission",
        label: "Setting Permission",
        perm: ["setting-permission@READ"],
    },
    {
        route: "/auth/setting-user",
        label: "Setting User",
        perm: ["setting-user@READ"],
    },
    {
        route: "/auth/referensi-company",
        label: "Referensi Company",
        perm: ["referensi-company@READ"],
    },
    {
        route: "/auth/referensi-supplier",
        label: "Referensi Supplier",
        perm: ["referensi-supplier@READ"],
    },
    {
        route: "/auth/referensi-kurs",
        label: "Referensi Kurs",
        perm: ["referensi-kurs@READ"],
    },
    {
        route: "/auth/referensi-akun",
        label: "Referensi Akun",
        perm: ["referensi-akun@READ"],
    },
    {
        route: "/auth/katalog-product",
        label: "Produk",
        perm: ["katalog-product@READ"],
    },
    {
        route: "/auth/katalog-kategori",
        label: "Kategori",
        perm: ["katalog-kategori@READ"],
    },
    {
        route: "/auth/katalog-channel",
        label: "Kanal (Marketplace)",
        perm: ["katalog-channel@READ"],
    },
    {
        route: "/auth/transaksi-beli",
        label: "Pembelian",
        perm: ["transaksi-beli@READ"],
    },
    {
        route: "/auth/transaksi-jual",
        label: "Penjualan",
        perm: ["transaksi-jual@READ"],
    },
    {
        route: "/auth/laporan-rekap",
        label: "Laporan Rekap",
        perm: ["laporan-rekap@READ"],
    },
    {
        route: "/auth/laporan-purchasing",
        label: "Laporan Purchasing",
        perm: ["laporan-purchasing@READ"],
    },
    {
        route: "/auth/laporan-penjualan",
        label: "Laporan Penjualan",
        perm: ["laporan-penjualan@READ"],
    },
    {
        route: "/auth/laporan-laba",
        label: "Laporan Laba",
        perm: ["laporan-laba@READ"],
    },
    {
        route: "/auth/laporan-stok",
        label: "Laporan Stok",
        perm: ["laporan-stok@READ"],
    },
    {
        route: "/auth/expense",
        label: "Expense/Pengeluaran",
        perm: ["expense@READ"],
    },
    {
        route: "/auth/jurnal",
        label: "Jurnal",
        perm: ["jurnal@READ"],
    },
    {
        route: "/auth/jurnal-pembuka",
        label: "Jurnal Pembukaan",
        perm: ["jurnal-pembuka@READ"],
    },
];

export const KatalogMenu = [
    "/auth/katalog-product",
    "/auth/katalog-kategori",
];


export const ReferensiMenu = [
    // "/auth/referensi-company",
    // "/auth/referensi-supplier",
    // "/auth/referensi-kurs",
    "/auth/katalog-channel",
    "/auth/referensi-akun",
];
export const Expense = [
    "/auth/expense",
];
export const TransaksiBeli = [
    "/auth/transaksi-beli",
];
export const TransaksiJual = [
    "/auth/transaksi-jual",
];

export const LaporanMenu = [
    "/auth/laporan-laba",
    "/auth/laporan-stok",
    "/auth/laporan-purchasing",
    "/auth/laporan-penjualan",
    "/auth/laporan-rekap",
];

export const SettingMenu = [
    "/auth/setting-company",
    "/auth/setting-user",
    "/auth/setting-permission",
];


export const Jurnal = [
    "/auth/jurnal",
    "/auth/jurnal-pembuka",
];

export function GenerateSideMenu(permission:string[]): any{
    const tempListMenu:any =[]
    tempListMenu.push({
        icon: (
            <LuLayoutDashboard size={20} />
        ),
        label: "Dashboard",
        name:"dashboard",
        route: "/auth/dashboard",
        children: []
    });

    //REFERENSI
    const cekReferensiMenu = getChildItemMenuInPermission(ReferensiMenu, permission);
    if (cekReferensiMenu.length > 0) {
        tempListMenu.push({
            icon: (
                <CiDatabase size={20}/>
            ),
            label: "Referensi",
            name:"referensi",
            route: "/auth/menu/referensi",
            children: [],
        });
    }

    //KATALOG
    const cekkatalogMenu = getChildItemMenuInPermission(KatalogMenu, permission);
    if (cekkatalogMenu.length > 0) {
        tempListMenu.push({
            icon: (
                <CiCircleList size={20}/>
            ),
            label: "Inventory",
            name:"katalog",
            route: "/auth/menu/katalog",
            children: [],
        });
    }

    //TRANSAKSI
    const cekTransaksiMenuBeli = getChildItemMenuInPermission(TransaksiBeli, permission);
    if (cekTransaksiMenuBeli.length > 0) {
        tempListMenu.push({
            icon: (
                <IoPricetagOutline size={20}/>
            ),
            label: "Purchasing",
            name: "transaksi-beli",
            route: "/auth/transaksi-beli",
            children: [],
        });
    }
    const cekTransaksiMenuJual = getChildItemMenuInPermission(TransaksiJual, permission);
    if (cekTransaksiMenuJual.length > 0) {
        tempListMenu.push({
            icon: (
                <IoPricetagOutline size={20}/>
            ),
            label: "Penjualan",
            name: "transaksi-beli",
            route: "/auth/transaksi-jual",
            children: [],
        });
    }

    //EXPENSE
    const cekTransaksiExpense = getChildItemMenuInPermission(Expense, permission);
    if (cekTransaksiExpense.length > 0) {
        tempListMenu.push({
            icon: (
                <FaMoneyBill1 size={20}/>
            ),
            label: "Expense",
            name: "expense",
            route: "/auth/expense",
            children: [],
        });
    }
    //JURNAL
    const cekTransaksiJurnal = getChildItemMenuInPermission(Jurnal, permission);
    if (cekTransaksiJurnal.length > 0) {
        tempListMenu.push({
            icon: (
                <FaBalanceScale size={20}/>
            ),
            label: "Jurnal",
            name: "jurnal",
            route: "/auth/menu/jurnal",
            children: [],
        });
    }

    //LAPORAN
    const cekLapMenu = getChildItemMenuInPermission(LaporanMenu, permission);
    if (cekLapMenu.length > 0) {
        tempListMenu.push({
            icon: (
                <HiOutlineDocumentReport size={20}/>
            ),
            label: "Laporan",
            name: "laporan",
            route: "/auth/menu/laporan",
            children: [],
        });
    }

    //App Setting


    const checkMenuSetting = getChildItemMenuInPermission(SettingMenu, permission);
    if (checkMenuSetting.length > 0) {
        tempListMenu.push({
            icon: (
                <FiSettings size={20}/>
            ),
            label: "Settings",
            name: "setting",
            route: "/auth/menu/setting",
            children: [],
        });
    }

    return tempListMenu
}

export function isValidPathPermission(path: string, permission:string[]):boolean{
    if (path==="/auth/company-select"){
        return true
    }
    if (path==="/auth/dashboard"){
        return true
    }
    if (path==="/auth/forbidden"){
        return true
    }
    if (path==="/auth/profil"){
        return true
    }
    if (path==="/auth/setting-akun"){
        return true
    }
    if (path==="/auth/ganti-password"){
        return true
    }


    const pathSplit=path.split("/");
    if (pathSplit.length>3){
        path = "/" + pathSplit[1] + "/" + pathSplit[2]
    }

    if (pathSplit[2]==="menu"){
        return true
    }

    const findRoute = routePermission.find(item => item.route === path);
    if (!findRoute) {
        return false;
    }
    let validPerm =false;
    findRoute.perm.forEach((item) => {
        if (permission.includes(item)){
            validPerm =  true;
        }
    })
    return validPerm;
}

export function getChildItemMenuInPermission(arrayPath:string[], permission:string[]):ItemSubMenu[]{
    const tempListItem: ItemSubMenu[] = []
    arrayPath.forEach(path => {
        const findRoute = routePermission.find(item => item.route === path);
        if (findRoute){
            let validPerm =false;
            findRoute.perm.forEach((item) => {
                if (permission.includes(item)){
                    validPerm =  true;
                }
            })
            if (validPerm){
                tempListItem.push({label: findRoute.label, route: findRoute.route},)
            }
        }
    })
    return tempListItem;
}