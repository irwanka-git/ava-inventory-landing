"use client"

import {FormatTanggalTransaksi, FormatToRupiah} from "@/lib/utils";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {JournalEntry} from "@/entities/akun";


const ListJurnalEntri = (props: {list: JournalEntry[]})=>{
    let currentNomorJU = ""
    let currentUrutJU = 0;

    return <>
        <div className={"flex flex-col gap-1 px-2 py-4"}>

            <Table aria-label="Entri Jurnal Transaksi">
                <TableHeader>
                    <TableColumn>No.</TableColumn>
                    <TableColumn>Tanggal</TableColumn>
                    <TableColumn>Keterangan</TableColumn>
                    <TableColumn className={"text-right"}>Debit</TableColumn>
                    <TableColumn className={"text-right"}>Kredit</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No record found"}>
                    { props.list?.map((item,index)=>{
                        if (item.nomor != currentNomorJU) {
                            currentNomorJU = item.nomor;
                            currentUrutJU = currentUrutJU + 1;
                            return <>
                                <TableRow key={`header-${index}`} className={"border-neutral-200 border-b-1 hover:bg-neutral-200"}>
                                    <TableCell className={"w-[20px] font-medium"}>{currentUrutJU}</TableCell>
                                    <TableCell className={"w-2/12 font-medium"}>
                                        {FormatTanggalTransaksi(item.tanggal).toUpperCase()}
                                    </TableCell>
                                    <TableCell className={"w-6/12"}>
                                        <div className={"flex flex-row justify-between items-center"}>
                                            <span className={" font-medium"}>
                                                {item.keterangan.toUpperCase()}
                                            </span>
                                            <span className={"text-xs"}>
                                                Ref. {item.ref_transaksi}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className={"w-2/12"}>&nbsp;</TableCell>
                                    <TableCell className={"w-2/12 text-right"}>
                                    </TableCell>
                                </TableRow>
                                <TableRow key={`rinci-${index}`}  className={"border-neutral-200 border-b-1  hover:bg-neutral-200"}>
                                    <TableCell className={"w-[20px]"}>&nbsp;</TableCell>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell className={item.kredit > item.debit ? "pl-12": "pl-2"}>
                                        {item.kode}. {item.nama_akun}
                                    </TableCell>
                                    <TableCell className={"text-right"}>
                                        {item.debit > 0 ? FormatToRupiah(item.debit) : "-"}
                                    </TableCell>
                                    <TableCell className={"text-right"}>
                                        {item.kredit > 0 ? FormatToRupiah(item.kredit) : "-"}
                                    </TableCell>
                                </TableRow>
                            </>
                        }else{
                            return <TableRow key={`rinci-${index}`} className={"border-neutral-200 border-b-1 hover:bg-neutral-200"}>
                                <TableCell className={"w-[20px]"}>&nbsp;</TableCell>
                                <TableCell>&nbsp;</TableCell>
                                <TableCell className={item.kredit > item.debit ? "pl-12": "pl-2"}>
                                    {item.kode}. {item.nama_akun}
                                </TableCell>
                                <TableCell className={"text-right"}>
                                    {item.debit > 0 ? FormatToRupiah(item.debit) : "-"}
                                </TableCell>
                                <TableCell className={"text-right"}>
                                    {item.kredit > 0 ? FormatToRupiah(item.kredit) : "-"}
                                </TableCell>
                            </TableRow>
                        }
                    })}
                </TableBody>
            </Table>
        </div>
    </>
}

export  default ListJurnalEntri;