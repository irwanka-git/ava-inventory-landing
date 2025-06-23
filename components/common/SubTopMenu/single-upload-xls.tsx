"use client"

import {Button} from "@nextui-org/button";
import {useCallback, useEffect, useRef, useState} from "react";
import {submitUploadXLS} from "@/action/client";
import showCustomToast from "@/components/common/toaster-custom";
import {AiOutlineUpload} from "react-icons/ai";
import {FileUploadImport} from "@/types";

interface UploadProps {
    disable: boolean;
    callbackAfterUploadSuccess: (val: string) => void; // ID of the toast to control its dismissal
}

export const SingleUploadXLS = (props:UploadProps)=>{
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const allow_format = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    const inputFile = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const sizeMB = Math.ceil(e.target.files[0].size/1024/1024);
            const limitUpload = process.env.NEXT_PUBLIC_MAX_UPLOAD_SIZE_MB! || "";
            if (sizeMB > Number(limitUpload)){
                return
            }
            setFile(e.target.files[0]);
        }
    };
    const handleReset = () => {
        if (inputFile.current) {
            inputFile.current.value = "";
            inputFile.current.type = "text";
            inputFile.current.type = "file";
        }
    };

    const uploadFile = useCallback(async () => {
        const response = await submitUploadXLS(file, file?.name!);
        setFile(null);
        handleReset();
        if (response!.status) {
            const result: FileUploadImport = response.data
            props.callbackAfterUploadSuccess(result.session_id);
            return
        }else{
            showCustomToast({title:"Mohon Maaf", message:response?.message!, status:"failed"});
        }
    }, [file])
    useEffect(() => {
        if(!loading && file!=null){
            setLoading(true);
            uploadFile().then(
                ()=>{
                    setLoading(false);
                }
            )
            return
        }
        // props.form.setValue(props.name, "");
    }, [file,loading]);


    return <>
        <input id="file"
               className={"hidden"}
               ref={inputFile} type="file"
               accept={allow_format.join(",")}
               onChange={handleFileChange}/>
        <Button color={"secondary"} isDisabled={props.disable} onClick={() => {
            if (inputFile.current) {
                inputFile.current.click();
            }
        }} isLoading={loading} disabled={loading || false}>
            {!loading && <AiOutlineUpload className={"mr-2"}/>} Upload XLS
        </Button>
    </>
}
export default SingleUploadXLS;