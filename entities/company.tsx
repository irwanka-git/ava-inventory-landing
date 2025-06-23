export interface EntityCompany {
    index: number
    id_company: number
    company_name: string
    kode_pembelian: string
    kode_penjualan: string
    color: string
    uuid: string
}

export interface EntitySupplier {
    index: number
    id_supplier: number
    nama_supplier: string
    uuid: string
    kota: string
}
