import {EntityCompany} from "@/entities/company";

export interface User{
    index?: number
    id?: number
    nama_pengguna?: string
    pic_name?: string
    email?: string
    role_name?: string
    avatar?: string
    uuid?: string
    created_at?: string
    updated_at?: any
    company?:EntityCompany[]
}


export interface SessionLogin {
    access_token: string;
    permission: string[];
    user: User;
    expire: number;
}

export interface AccessType {
    read: boolean,
    update: boolean,
    create: boolean,
    delete: boolean,
}