export interface EntityPenjualan {
    nomor_transaksi: string;
    nomor_pesanan: string;
    id_penjualan: number;
    costumer: string;
    total_penjualan: number;
    total_penjualan_bruto: number;
    tanggal: string; // ISO 8601 date string
    tanggal_selesai: string; // ISO 8601 date string
    tanggal_return: string; // ISO 8601 date string
    channel_id: number;
    jenis_kirim: string;
    jalur_kirim: string;
    metode_pembayaran: string;
    status: number;
    biaya_admin: number;
    biaya_lain: number;
    validasi: number;
    kode_partai: string;
    nomor_resi: string;
    uuid: string;
    total_return: number;
    total_diskon_penjualan: number;
    total_hpp_penjualan: number;
    total_hpp_return: number;
    kurir: string;
    created_at: string; // Can be a date string or empty
    updated_at: string; // Can be a date string or empty
    jumlah_item: number;
    submit_stok: number;
    id_company: number;
    pic: string;
    channel_name: string;
}

export interface EntityPenjualanDetil {
    index: number;
    id_penjualan_detil: number;
    product_id: number;
    jumlah: number;
    harga_jual: number;
    harga_jual_netto: number;
    diskon: number;
    subtotal_penjualan: number;
    jumlah_return: number;
    subtotal_return: number;
    hpp_penjualan: number;
    hpp_average: number;
    hpp_return: number;
    id_penjualan: number;
    image: string; // URL of the image
    nama_produk: string;
    sku_induk: string;
    kode_sku: string;
    variasi: string;
    uuid_varian: string;
    non_hpp: number;
}

export interface RekapTotalPenjualanHPP {
    jumlah_penjualan: number;
    total_penjualan: number;
    total_hpp: number;
    laba: number;
}

export interface EntityLogs {
    id: number
    user: string
    waktu: string
    keterangan: string
    referensi_id: number
    jenis_aktivitas: string
}

export interface RekapTotalPenjualan {
    total_penjualan: number;
    total_return: number;
    total_hpp_penjualan: number;
    total_hpp_return: number;
    total_margin: number;
    total_biaya_admin: number;
    total_biaya_lain: number;
}