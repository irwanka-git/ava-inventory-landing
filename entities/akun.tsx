
export interface KelompokAkun {
    id_kelompok_akun: number
    kelompok_akun: string
    posisi_laporan: string
    posisi_neraca: string
    prefix: string
}
export interface EntityAkun {
    id_akun: number
    kunci: number
    kode: string
    nama_akun: string
    id_kelompok_akun: number
    kelompok_akun: string
    normal_balanced: string
    posisi_laporan: string
    posisi_neraca: string
    uuid: string
}

export  interface JournalEntry {
    id_jurnal: number;
    nomor: string;
    keterangan: string;
    ref_transaksi: string;
    bulan: string; // Format: YYYY-MM
    tahun: string; // Format: YYYY
    tanggal: string; // ISO 8601 date string
    jenis: string;
    debit: number;
    kredit: number;
    kode: string;
    nama_akun: string;
    normal_balanced: string; // Could be "DEBIT" or "CREDIT"
}
