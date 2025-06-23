
export interface EntitySkuInduk {
    index: number;
    id_sku_induk: number;
    sku_induk: string;
    nama_produk: string;
    category_name?: string;
    category_id: number;
    uuid: string;
    id_company: number;
}
export interface EntityKurs {
    id_kurs: number;
    index: number;
    kurs: number;
    uuid: string;
    updated_at: string;
}

export interface EntityProduct {
    index: number;
    product_id: number
    nama_produk: string
    variasi: string
    sku_induk: string
    kode_sku: string
    category_name: string
    satuan: string
    satuan_id: number
    category_id: number
    min_stock: number
    current_stock: number
    updated_stock: string
    price: number
    hpp_average: number
    created_at: string
    updated_at: string
    uuid: string
    image: string
    id_sku_induk: number
}

export interface EntityVariant {
    variasi: string
    kode_sku: string
    sku_induk?: string
    nama_produk?: string
    uuid: string
    price: number
    hpp_average?: number
    image: string
}

export interface ListVariantArray{
    list: EntityVariant[]
}

export interface EntityVariantJual {
    uuid?: string
    variasi?: string
    kode_sku: string
    sku_induk: string
    nama_produk?: string
    image?:string
    price?: number
    qty?: number
    diskon?: number
    subtotal?: number
    non_hpp?:number
}


export interface EntityVariantBeli{
    variasi: string
    kode_sku: string
    uuid: string
    uuid_varian?: string
    rmb?: number
    image: string
    jumlah?: number
    price_unit?: number
    subtotal_rmb?: number
}

export interface EntityProductAndVariant {
    product: InfoProduct
    variant: InfoVariant[]
}

export interface InfoProduct {
    id_sku_induk: number
    sku_induk: string
    nama_produk: string
    category_id: number
    uuid: string
    id_company: number
    category_name: string
}

export interface InfoVariant {
    product_id: number
    sku_induk: string
    kode_sku: string
    variasi: string
    image: string
    price: number
    hpp_average: number
    min_stock: number
    current_stock: number
    updated_stock: string
    created_at: string
    updated_at: string
    uuid: string
}


export interface ProductImport {
    id_import: number;
    sku_induk: string;
    sku_variasi: string;
    id_sku_induk: number;
    product_id: number;
    category_id: number;
    id_company: number;
    uuid: string;
    nomor: number;
    session_id: string;
    nama_produk: string;
    variasi: string;
    harga_beli: number;
    jumlah: number;
    harga_jual: number;
}

export interface DataPersediaan {
    sku_induk: string;
    sku_variasi: string;
    id_sku_induk: number;
    product_id: number;
    uuid: string;
    nama_produk: string;
    nomor_transaksi: string;
    variasi: string;
    harga_beli: number;
    jumlah: number;
    sisa_stok: number;
    subtotal: number;
}