
export interface StatsCounterKatalog {
    jumlah_product: number;   // corresponds to int32 in Go
    jumlah_kategori: number;  // corresponds to int32 in Go
    jumlah_varian: number;    // corresponds to int32 in Go
    jumlah_kanal: number;    // corresponds to int32 in Go
}


export  interface SalesSummary {
    jumlah_terjual: number;
    jumlah_return: number;
    jumlah_transaksi: number;
    jumlah_varian: number;
    total_penjualan: number;
    total_return_penjualan: number;
    total_hpp: number;
    total_biaya_admin: number;
    total_biaya_lain: number;
    total_expense: number;
    total_expense_dan_biaya_lain: number;
    total_laba_rugi: number;
    tanggal_awal: string;
    tanggal_akhir: string;
}