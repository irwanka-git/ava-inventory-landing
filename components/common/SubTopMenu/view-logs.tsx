"use client"

 
import {useCallback, useEffect, useRef, useState} from "react";
import {getDatatableAPI} from "@/action/client";
import {PaginationDatatable, ParamsDatatable} from "@/types";
import {useEffectOnce} from "@/lib/utils";
import {EntityLogs} from "@/entities/penjualan";
import {DTLogs} from "@/components/common/SubTopMenu/datatable-logs";
import {pagination} from "@nextui-org/theme";

export const ViewLogs = ()=>{

    const [loadingData, setLoadingData] = useState<boolean>(true);
    const [pageDatatable, setPageDatatable] = useState<PaginationDatatable>({
        firstRowIndex: 0,
        totalRow: 0,
        currentRows: 1,
        totalPage: 0,
        perPage: 0,
        currentPage: 0,
    });

    const [paramsDataTableState, setParamsDataTableState] = useState<ParamsDatatable>({
        page: 1,
        keyword: "",
        fieldname: "",
        rows: 10 });

    const [paramsDataTable, setParamDataTable] = useState("");
    const refParamsDatatable = useRef("");
    const [dataitem, setDataitem] = useState<EntityLogs[]>([])

    const getDataItemDataTable = useCallback(async () => {
        const response = await getDatatableAPI(`/list/get-datatable-logs?${paramsDataTable}`);
        if (response!.status) {
            const tempDataArray: EntityLogs[] = []
            response!.data.forEach((item: any, index: any) => {
                const tempData: EntityLogs = {
                    id: item.id,
                    user: item.user,
                    waktu: item.waktu,
                    keterangan: item.keterangan,
                    referensi_id: 0,
                    jenis_aktivitas: ""
                }
                tempDataArray.push(tempData)
            });
            setDataitem(tempDataArray);

            const pagination: PaginationDatatable = {
                totalPage: response!.pagination.total_page,
                totalRow: response!.pagination.total_rows,
                currentPage: response!.pagination.current_page,
                firstRowIndex: response!.pagination.first_row_index,
                perPage: response!.pagination.per_page,
                currentRows: response!.pagination.current_rows
            }
            setPageDatatable(pagination);
        }
    },[paramsDataTable]);

    const callbackDTRefresh = ()=>{
        getDataItemDataTable().then(()=>{
            setTimeout(()=>setLoadingData(false), 200);
        });
    }

    useEffect(() => {
        let paramURL = "page=" + paramsDataTableState.page;
        if (paramsDataTableState.keyword != "") {
            paramURL = paramURL + "&keyword=" + paramsDataTableState.keyword;
        }
        if (paramsDataTableState.fieldname != "") {
            paramURL = paramURL + "&column=" + paramsDataTableState.fieldname;
        }
        paramURL = paramURL + "&limit=" + paramsDataTableState.rows;
        setParamDataTable(paramURL);
    }, [paramsDataTableState]);

    useEffect(() => {
        if(paramsDataTable!="" && paramsDataTable != refParamsDatatable.current  && !loadingData){
            refParamsDatatable.current = paramsDataTable;
            setLoadingData(true)
            getDataItemDataTable().then(()=>{
                setTimeout(()=>setLoadingData(false), 200);
            })
            return
        }
    }, [getDataItemDataTable, loadingData, paramsDataTable]);

    const callbackChangeKeyword = (keyword:string)=>{
        setKeywordValue(keyword);
    }
    const [keywordValue, setKeywordValue] = useState("");
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setParamsDataTableState({ ...paramsDataTableState, keyword: keywordValue, page: 1 })
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [keywordValue]);

    useEffectOnce(() => {
        setLoadingData(false);
        setParamDataTable("page=1&limit=5");
    });

    return (
        <div className={"w-full flex flex-col"}>
            <DTLogs data={dataitem}
                    loading={loadingData}
                    pagination={pageDatatable}
                    callbackDTRefresh={() => {
                        callbackDTRefresh()
                    }}
                    callbackChangeKeyword={(keyword: string) => {
                        callbackChangeKeyword(keyword)
                    }}
                    callbackPageChanged={(page: number) => {
                        setParamsDataTableState({...paramsDataTableState, page: page})
                    }}
                    callbackPageLenghChanged={(length: number) => {
                        setParamsDataTableState({...paramsDataTableState, rows: length, page: 1})
                    }}
                    />
        </div>
    )
}

export default ViewLogs