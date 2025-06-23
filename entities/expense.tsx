
export interface DataExpense {
    id_expense: number;          // int64 in Go is represented as number in TypeScript
    id_akun: number;             // int32 in Go is also represented as number in TypeScript
    keterangan: string;          // string remains string
    tanggal: string;             // time.Time is converted to string
    jumlah: number;              // float64 in Go is represented as number in TypeScript
    nomor_transaksi: string;     // string remains string
    uuid: string;                // string remains string
    kode: string;                // string remains string
    nama_akun: string;           // string remains string
    kelompok_akun: string;       // string remains string
}

export interface RekapTotalPerAkun {
    id_akun: number;
    kode: string;
    nama_akun: string;
    id_kelompok_akun: number;
    kelompok_akun: string;
    jumlah: number;
}
export interface RekapBeban {
    total_beban: number;
    total_beban_operasional: number;
    total_beban_non_operasional: number;
}
