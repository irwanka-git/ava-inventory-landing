import {SVGProps} from "react";

export interface Size{
  width?: number;
  height?: number;
}

export interface FileUploadImport {
  filename: string;
  session_id: string;
}


export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface  ItemSubMenu{
  route: string;
  label: string;
}

export interface ItemMenu {
  icon: any;
  label: string;
  name?:string;
  route: string;
  children: ItemSubMenu[];
}


export interface SubMenuLink {
  label: string;
  route: string;
}


export interface PaginationDatatable{
  firstRowIndex: number;
  totalRow: number;
  currentRows: number;
  totalPage: number;
  perPage: number;
  currentPage: number;
}

export interface PagingState{
  current: number;
  prev: number;
  next: number;
  items: number[];
}

export interface ParamsDatatable{
  page: number;
  rows: number;
  keyword: string;
  status?: string;
  fieldname: string;
  sortColumn?: string;
  dirColumn?: string;
  currency?: string;
}

export interface ListItemSelect{
  value: string;
  text: string;
}

export interface  FilterPeriode{
  awal?:string;
  akhir?:string;
}

export interface  FilterProduct{
   uuid?:string
}

export interface FilterData{
  FilterPeriode?: FilterPeriode;
  FilterProduct?: FilterProduct;
}

export interface Activity {
  id: number;
  user: string;
  waktu: string; // ISO 8601 date string
  keterangan: string;
  referensi_id: number;
  jenis_aktivitas: string;
}

export interface Tahun {
  id_tahun: number;
  tahun: number;
}

export interface KeyLabel {
  key: string;
  label: string;
}

export interface InputJurnal{
  id_akun:number;
  akun: string;
  posisi: string;
  jumlah: number;
}