"use client"

import {PaginationDatatable} from "@/types";
import {AccessType} from "@/types/users";
import React, {useCallback, useEffect, useState} from "react";
import {Button} from "@nextui-org/button";
import {AiOutlineDelete, AiOutlineLock,} from "react-icons/ai";
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {Dropdown, DropdownTrigger} from "@nextui-org/dropdown";
import {HiDotsVertical} from "react-icons/hi";
import {DropdownItem, DropdownMenu, Pagination, SortDescriptor, Spinner} from "@nextui-org/react";
import {LiaPencilAltSolid} from "react-icons/lia";
import {FormEdit} from "@/app/auth/referensi-kurs/form-edit";
import {EntityKurs} from "@/entities/product";
import {FormatTanggalJamIndo, FormatToRupiah, ToTimeAgo} from "@/lib/utils";
import {EntityLogs} from "@/entities/penjualan";

interface DataTableProps {
    data: EntityLogs[];
    loading: boolean;
    pagination: PaginationDatatable;
    callbackDTRefresh: () => void;
    callbackChangeKeyword: (val: string) => void;
    callbackPageChanged: (val: number) => void;
    callbackPageLenghChanged: (val: number) => void;
}

export const DTLogs = (props:DataTableProps)=>{
    const data = props.data;
    const [keywordValue, setKeywordValue] = useState("");
    const onClearKeyword = useCallback(()=>{
        setKeywordValue("")
    },[]);
    const [pageLength, setPageLength] = React.useState<string>("5");

    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "waktu",
        direction: "ascending",
    });


    useEffect(() => {
        props.callbackPageLenghChanged(Number(pageLength));
    }, [pageLength]);

    const handleSelectionPageLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPageLength(e.target.value);
    };
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    useEffect(() => {
        if (keywordValue.length > 2){
            props.callbackChangeKeyword(keywordValue)
        }
        if(keywordValue==""){
            props.callbackChangeKeyword("")
        }
    }, [keywordValue]);

    return (
        <div className={"w-full flex flex-col space-y-4 py-2"}>
            <Table
                aria-label="List Logs"
                radius={"lg"}
                isStriped
                isHeaderSticky
                isCompact
                bottomContentPlacement={"outside"}
                bottomContent={
                    <div className="flex flex-row w-full justify-between items-center">
                        <span className="text-xs">
                            Showing {props.pagination.firstRowIndex} to {props.pagination.firstRowIndex + props.pagination.currentRows - 1} of {props.pagination.totalRow} Items
                        </span>
                        <Pagination
                            isCompact
                            showControls
                            size={"sm"}
                            color="default"
                            radius={"sm"}
                            initialPage={props.pagination.currentPage}
                            page={props.pagination.currentPage}
                            total={props.pagination.totalPage}
                            onChange={(page) => props.callbackPageChanged(page)}
                        />
                    </div>
                }
            >
                <TableHeader>
                    <TableColumn>Logs Activities</TableColumn>
                </TableHeader>
                <TableBody isLoading={props.loading}
                           loadingContent={<Spinner color={"secondary"} size={"sm"} label="Sedang Memuat Data..." />}
                           emptyContent={"No record found"} >
                    {
                        data.map((record, index)=>
                            (
                                <TableRow className={`border border-neutral-200`} key={`row-${index}`}>
                                    <TableCell className={"w-full"}>
                                        <div className={"flex flex-col"}>
                                            <span className={"text-xs"}> {record.user} ({ToTimeAgo(record.waktu)})</span>
                                            <span className={"text-sm"}> {(record.keterangan)}</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )

}