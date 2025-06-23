
export interface JurnalInfo {
    id_jurnal: number;
    nomor: string;
    keterangan: string;
    tahun: string;
    id_company: number;
    ref_transaksi: string;
    tanggal: string; // ISO string format
    debit: number;
    kredit: number;
}
export interface JurnalAccount {
    id_akun: number;
    uuid: string;
    kode: string;
    nama_akun: string;
    debit: number;
    kredit: number;
    awal: string;
    akhir: string;
}
export interface EntriJurnal {
    id_jurnal: number;
    nomor: string;
    keterangan: string;
    ref_transaksi: string;
    bulan: string;
    tahun: string;
    tanggal: string;
    jenis: string;
    debit: number;
    kredit: number;
    kode: string;
    nama_akun: string;
    normal_balanced: string;
}

export interface JurnalAwalTahun {
    kelompok_akun: string;
    posisi_neraca: string;
    id_akun: number;
    kode: string;
    nama_akun: string;
    normal_balanced: string;
    normal_balanced_kelompok: string;
    debit: number;
    kredit: number;
    tahun: number;
}

export interface SummaryNeraca {
    aset: number,
    utang: number;
    modal: number
}

export interface  JurnalLabaRugi {
    id_akun: number;
    kode: string;
    nama_akun: string;
    id_kelompok_akun: number;
    kelompok_akun: string;
    normal_balanced: string;
    normal_balanced_kelompok: string;
    id_company: number;
    tanggal: string;
    debit: number;
    kredit: number;
    bulan: string;
    tahun: string;
}

export interface JurnalNeraca {
    id_akun: number;
    kode: string;
    nama_akun: string;
    kelompok_akun: string;
    posisi_neraca: string;
    normal_balanced: string;
    id_company: number;
    tanggal: string;
    debit: number;
    kredit: number;
    bulan: string;
    tahun: string;
}

export  interface  StatusClosing {
    bulan_lalu: number,
    bulan_ini: number,
    bulan_depan: number,
}