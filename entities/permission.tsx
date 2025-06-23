"use client"

export type EntityPermission = {
    uuid: string
    scope_id?: number
    scope?: string
    scope_name?: string
    role_name?: string
    read: number
    create: number
    update: number
    delete: number
    index?: number
}


export interface UserType {
    user_type: string
    deskripsi: string
}
export interface Scope {
    scope_id: number
    scope_name: string
    deskripsi: string
    uuid: string
}

