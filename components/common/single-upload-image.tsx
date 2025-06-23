"use client"

import {Button} from "@nextui-org/button";
import {useCallback, useEffect, useRef, useState} from "react";
import {submitUpload} from "@/action/client";
import showCustomToast from "@/components/common/toaster-custom";
import {AiOutlineUpload} from "react-icons/ai";
import {Image} from "@nextui-org/react";

interface UploadProps {
    imageURLDefault:string,
    label:string;
    callbackFormUploaded: (val: string) => void; // ID of the toast to control its dismissal
}

export const SingleUploadImage = (props:UploadProps)=>{
    const [file, setFile] = useState<File | null>(null);
    const image_format = "image/jpeg,image/png"
    const [imageURL, setImageURL ] = useState("")
    const [loading, setLoading] = useState<boolean>(false);
    const allow_format = [image_format];
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
        const response = await submitUpload(file, file?.name!);
        setFile(null)
        handleReset();
        if (response!.status) {
            const fileResult = {
                file_name: response.data.filename,
                file_url: response.data.url
            }
            props.callbackFormUploaded(response.data.url)
            setImageURL(response.data.url)
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

    useEffect(() => {
        if (props.imageURLDefault){
            setImageURL(props.imageURLDefault);
        }else{
            setImageURL("/images/no-image.png")
        }
    }, [props.imageURLDefault]);

    return <>
        <div className="flex flex-col gap-2 w-full py-4">
            <p className={"text-sm text-gray-800 font-medium"}>{props.label}</p>
            <input id="file"
                   className={"hidden"}
                   ref={inputFile} type="file"
                   accept={allow_format.join(",")}
                   onChange={handleFileChange}/>
            <Button color={"secondary"} className={"w-40"}  onClick={()=>{
                if (inputFile.current) {
                    inputFile.current.click();
                }
            }} isLoading={loading} disabled={loading || false}>
                {!loading && <AiOutlineUpload className={"mr-2"}/>} Upload Image
            </Button>
            <Image
                width={300}
                shadow={"sm"}
                radius={"sm"}
                alt="Photo Product"
                src={imageURL}
            />
        </div>
    </>
}

export default SingleUploadImage;