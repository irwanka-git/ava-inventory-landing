"use client"

import {Activity} from "@/types";
import {FormatTanggalJamIndoCompact} from "@/lib/utils";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";


const ListLogActivity = (props: {list: Activity[]})=>{
    return <>
        <div className={"flex flex-col gap-1 px-2 py-4"}>

            <Table
                    isStriped
                    isHeaderSticky
                    >
                <TableHeader>
                    <TableColumn>No.</TableColumn>
                    <TableColumn>Waktu</TableColumn>
                    <TableColumn>User</TableColumn>
                    <TableColumn>Keterangan</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No record found"}>
                    {props.list.map((item,index)=>{
                        return <TableRow key={index}>
                            <TableCell className={"w-[20px]"}>{index + 1}</TableCell>
                            <TableCell className={"w-1/5"}>{FormatTanggalJamIndoCompact(item.waktu)}</TableCell>
                            <TableCell className={"w-2/5"}>{item.user}</TableCell>
                            <TableCell className={"w-2/5"}>{item.keterangan}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </div>
    </>
}

export  default ListLogActivity;