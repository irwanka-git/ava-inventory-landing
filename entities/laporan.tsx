
export interface LaporanLabaTanggal {
    tanggal_laporan: string
    product_id: number
    jumlah_terjual: number
    total_penjualan: number
    total_hpp: number
    laba: number
    nama_produk: string
    variasi: string
    kode_sku: string
}

export interface LaporanLabaKanal {
    channel_name: string
    channel_id: number
    jumlah_terjual: number
    total_penjualan: number
    total_hpp: number
    laba: number
}
export interface LaporanLabaBulan {
    bulan: string;
    jumlah_terjual: number;
    total_penjualan: number;
    total_hpp: number;
    laba: number;
}

export interface CounterLabaBulan {
    jumlah_penjualan: number;
    total_penjualan: number;
    total_hpp: number;
    laba: number;
    persen_total_penjualan: string;
    trend_penjualan: string;
    persen_total_hpp: string;
    trend_hpp: string;
    persen_total_laba: string;
    trend_laba: string;
    last_month: string;
    persen_laba_penjualan: string;
}

export interface LaporanStokInHand {
    tanggal_laporan: string
    product_id: number
    nama_produk: string
    variasi: string
    kode_sku: string
    min_stock: number
    stok_awal: number
    stok_akhir: number
    keterangan: string
}


export interface LaporanPergerakanStok {
    tanggal_laporan: string
    product_id: number
    nama_produk: string
    variasi: string
    kode_sku: string
    stok_awal: number
    stok_masuk: number
    stok_keluar: number
    stok_akhir: number
}

export interface DetilRiwayatPergerakanStok {
    tanggal_laporan: string
    product_id: number
    nama_produk: string
    variasi: string
    kode_sku: string
    stok_awal: number
    stok_masuk: number
    stok_keluar: number
    stok_akhir: number
    list_stok_masuk: ListStokInOut[]
    list_stok_keluar: ListStokInOut[]
}

export interface ListStokInOut {
    tanggal: string
    jenis_pergerakan: string
    jumlah: number
    referensi: string
}

export interface ListStokKeluar {
    tanggal: string
    jenis_pergerakan: string
    jumlah: number
    referensi: string
}

export interface LaporanPersediaan {
    nama_produk: string;
    sku_induk: string;
    image: string;
    id_company: number;
    kode_sku: string;
    variasi: string;
    product_id: number;
    price: number;
    total_persediaan: number;
    uuid: string;
    min_stock: number;
    jumlah_masuk: number;
    jumlah_keluar: number;
    sisa_stok: number;
    status: string;
}

export interface LapTransaksiPurchase {
    tanggal: string; // ISO 8601 date string
    nomor_transaksi: string;
    nama_toko: string;
    nomor_partai: string;
    sku_induk: string;
    nama_produk: string;
    kode_sku: string;
    variasi: string;
    jumlah: number;
    harga_beli: number;
    subtotal: number;
    sisa_stok: number;
}

export interface LapTransaksiPenjualan {
    nomor_transaksi: string;
    tanggal: string;
    nomor_pesanan: string;
    channel_name: string;
    nomor_resi: string;
    kurir: string;
    status: number;
    sku_induk: string;
    nama_produk: string;
    metode_pembayaran: string;
    kode_sku: string;
    variasi: string;
    jumlah: number;
    harga_jual_netto: number;
    harga_jual: number;
    diskon: number;
    subtotal_penjualan: number;
    subtotal_return: number;
    jumlah_return: number;
    subtotal_hpp: number;
}

export interface PenjualanSummary {
    jumlah_item: number;      // Total number of items
    jumlah_product: number;   // Total number of products
    jumlah_variian: number;  // Total number of variants
    total_pembelian: number; // Total purchase amount
    tanggal_awal: string;    // Start date in YYYY-MM-DD format
    tanggal_akhir: string;   // End date in YYYY-MM-DD format
}

export interface PurchaseSummary {
    jumlah_item: number;      // Total number of items
    jumlah_product: number;   // Total number of products
    jumlah_variian: number;  // Total number of variants
    total_pembelian: number; // Total purchase amount
    tanggal_awal: string;    // Start date in YYYY-MM-DD format
    tanggal_akhir: string;   // End date in YYYY-MM-DD format
}

export interface RekapPenjualanProduk {
    sku_induk: string;
    nama_produk: string;
    kode_sku: string;
    variasi: string;
    jumlah_terjual: number;
    jumlah_return: number;
    total_penjualan: number;
    total_return: number;
}
export interface RekapPenjualanMarket {
    channel_name: string;
    jumlah_terjual: number;
    jumlah_return: number;
    total_penjualan: number;
    total_return: number;
}


export interface RekapPenjualanBulan {
    id_bulan: number;
    bulan: string;
    jumlah_terjual: number;
    jumlah_return: number;
    total_penjualan: number;
    total_return: number;
    total_biaya_admin: number;
    total_biaya_lain: number;
    total_expense: number;
    total_hpp: number;
    total_laba_rugi: number;
}


export interface ProductStats {
    jumlah_product: number;
    jumlah_kategori: number;
    jumlah_varian: number;
    jumlah_low_stok: number;
    jumlah_kanal: number;
}

export interface TopProduct{
    sku_induk: string;
    nama_produk: string;
    jumlah: number;
}


export interface MarketStats{
    color: string;
    channel_name: string;
    jumlah: number;
}
