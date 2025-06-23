export interface EntityPembelian {
    id_pembelian: number
    nomor_transaksi: string
    tanggal: string
    nama_toko: string
    biaya_ekspedisi: number
    total_rmb: number
    nomor_partai: string
    submit_at: string
    submit_by: string
    approve_at: any
    approve_by: string
    status: number
    uuid: string
    created_at: string
    create_by: string
    jumlah_pembelian: number
    jumlah_return: number
    total_rupiah: number
    total_cbm: number
    id_company: number
    harga_ekspedisi_cbm: number
    tanggal_gudang: any
    kurs: number
    total_pembelian: number
    pic: string
    link: string,
    kode_sku:string,
    nama_produk:string,
    uuid_induk:string,
    jenis:string,
}

export interface EntityPembelianDetil {
    id_pembelian_detil: number
    product_id: number
    jumlah: number
    harga_beli: number
    sisa_stok: number
    rmb: number
    uuid: string
    subtotal: number
    id_pembelian: number
    subtotal_rmb: number
    subtotal_rupiah: number
    kode_sku: string
    variasi: string
    image: string
}

export interface EntityReturnPembelian {
    return_pembelian_id: number;
    pembelian_id: number;
    product_id: number;
    jumlah: number;
    tanggal_return?: string;
    alasan: string;
    created_at: string;
    uuid: string;
}

export interface EntityLapPembelian {
    index: number;
    id_pembelian_detil: number;
    tanggal: string;
    nomor_transaksi: string;
    product_id: number;
    jumlah: number;
    harga_beli: number;
    sisa_stok: number;
    total_cbm: number;
    jumlah_return: number;
    uuid: string;
    subtotal_pembelian: number;
    subtotal_return: number;
    subtotal_akhir: number;
    id_pembelian: number;
    nama_produk: string;
    kode_sku: string;
    variasi: string;
    image: string;
    cbm: number;
}