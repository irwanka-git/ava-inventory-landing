"use client"
import secureLocalStorage from "react-secure-storage";
import {AccessType, SessionLogin, User} from "@/types/users";
import {Tahun} from "@/types";

export async function clearSessionStorage() {
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_JWT_TOKEN!, "")
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_LOGIN_STATE!, "")
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_USER!, "")
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_USER_PIC!, "")
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_JWT_EXPIRE!, "")
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_PERMISSION!, "")
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_COMPANY_SELECT!, "")
    secureLocalStorage.clear();
    return true
}
export async function setSessionLogin(session:SessionLogin) {
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_JWT_TOKEN!, session.access_token)
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_LOGIN_STATE!, "valid")
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_USER!, session.user)
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_USER_PIC!, session.user.pic_name!)
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_JWT_EXPIRE!, session.expire)
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_PERMISSION!, session.permission)
    return true
}



export async function setSessionListTahun(list:Tahun[]) {
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_LIST_TAHUN!, list)
    return true
}

export async function getSessionListTahun() {
    const result: any = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_LIST_TAHUN!)
    const tmp:Tahun[] = []
    result.map((item:Tahun) => {
        tmp.push(item)
    })
    return tmp
}



export async function getCompanySelect(){
    const result: any = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_COMPANY_SELECT!)
    return result || ""
}
export async function setCompanySelect(uuid:string){
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_COMPANY_SELECT!, uuid)
}

export async function setCompanyColor(color:string){
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_COMPANY_COLOR!, color)
}

export async function getCompanyColor(){
    const result: any = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_COMPANY_COLOR!)
    return result || "bg-primary"
}

export async function getPICNameUser(){
    const result: any = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_USER_PIC!)
    return result || ""
}
export async function getCompanySelectName(){
    const result: any = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_COMPANY_SELECT_NAME!)
    return result || ""
}
export async function setCompanySelectName(name:string){
    secureLocalStorage.setItem(process.env.NEXT_PUBLIC_STORAGE_COMPANY_SELECT_NAME!, name)
}
export async function  getUserSession(){
    const result: any = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_USER!)
    const user :User = {
        email: result.email,
        nama_pengguna: result.nama_pengguna,
        uuid: result.uuid,
        id: result.id,
        avatar: result.avatar,
        role_name: result.role_name,
    }
    return user;
}
export  async function  getStateLogin(){
    const state:any  = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_LOGIN_STATE!)
    const currentTime = new Date().getTime();
    const timeCurrentSecdnd = Math.ceil(currentTime/1000)
    const sessionExpire: any = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_JWT_EXPIRE!)
    const sisa = (sessionExpire - timeCurrentSecdnd);
    if (sisa <=60){return "";}
    return state;
}
export async function  getPermissionSession(){
    const result:any  = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_PERMISSION!)
    if (Array.isArray(result)) {
        return result
    }
    return []
}
export async function  getPermissionAccessSession(scope:string):Promise<AccessType>{
    const accesType:AccessType = {
        read: false,
        update: false,
        create: false,
        delete: false,
    }
    const result:any  = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_PERMISSION!)
    if (Array.isArray(result)) {
        if (result.includes(scope + "@READ")){
            accesType.read = true;
        }
        if (result.includes(scope + "@CREATE")){
            accesType.create = true;
        }
        if (result.includes(scope + "@UPDATE")){
            accesType.update = true;
        }
        if (result.includes(scope + "@DELETE")){
            accesType.delete = true;
        }
    }
    return accesType
}
export async function  getExpirySession(){
    const state:any  = secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_JWT_EXPIRE!)
    return state
}
export async function  getTokenBearerJwtSession(){
    return secureLocalStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_JWT_TOKEN!) || ""
}
