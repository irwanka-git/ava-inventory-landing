"use client"
import React from 'react';
import toast, {Toast} from 'react-hot-toast';
import {HiOutlineExclamation} from "react-icons/hi";
import {HiOutlineCheckCircle, HiOutlineInformationCircle} from "react-icons/hi2";

// Define the props for your custom toast component
interface CustomToastProps {
    message: string;
    title: string;
    toastId: string; // ID of the toast to control its dismissal
}

interface CustomToastProps2 {
    message: string;
    status: string;
    title: string; // ID of the toast to control its dismissal
}

const CustomToast: React.FC<CustomToastProps> = ({ message, title, toastId }) => {
    return (
        <div onClick={() => toast.dismiss(toastId)} className={"max-w-full sm:max-w-96"}
             style={{
                 margin: "0px",
                 cursor: "pointer",
             }}
        >
            <div className={"flex flex-row gap-2 items-center m-0"}>
                <HiOutlineInformationCircle size={50} className={"text-primary  mr-2.5"}/>
                <div className={"flex text-sm  flex-col sm:min-w-64  w-full"}>
                    <span className={"font-medium text-sm"}>
                        {title}
                    </span>
                    <span className={"text-sm"}>
                        {message}
                    </span>
                </div>

            </div>
        </div>
    );
};


const CustomToastSuccess: React.FC<CustomToastProps> = ({message, title, toastId}) => {
    return (
        <div onClick={() => toast.dismiss(toastId)} className={"max-w-full sm:max-w-sm"}
             style={{
                 margin: "0px",
                 cursor: "pointer",
             }}
        >
            <div className={"flex flex-row gap-2 items-center m-0"}>
                <HiOutlineCheckCircle size={50} className={"text-primary  mr-2.5"}/>
                <div className={"flex  text-sm  flex-col sm:min-w-64 w-full"}>
                    <span className={"font-medium text-sm"}>
                        {title}
                    </span>
                    <span className={"text-sm"}>
                        {message}
                    </span>
                </div>
            </div>
        </div>
    );
};


const CustomToastError: React.FC<CustomToastProps> = ({message, title, toastId}) => {
    return (
        <div onClick={() => toast.dismiss(toastId)} className={"max-w-full sm:max-w-sm"}
             style={{
                 margin: "0px",
                 cursor: "pointer",
             }}
        >
            <div className={"flex flex-row gap-2 items-center m-0"}>
                <HiOutlineExclamation size={50} className={"text-danger mr-2.5"}/>
                <div className={"flex text-sm flex-col sm:min-w-64 w-full"}>
                    <span className={"font-medium text-sm"}>
                        {title}
                    </span>
                    <span className={"text-sm"}>
                        {message}
                    </span>
                </div>
            </div>

        </div>
    );
};

// Function to show the custom toast
const showCustomToast = (props: CustomToastProps2) => {
    // Display the custom toast and keep a reference to the toast ID
    const toastId = props.status == "failed" ? toast((t: Toast) => (
            <CustomToastError title={props.title} message={props.message} toastId={t.id}/>
        ), {style: {maxWidth: "100%"}, duration: 3000, position: "bottom-right"}) :
        props.status == "success" ?
            toast((t: Toast) => (
                <CustomToastSuccess title={props.title} message={props.message} toastId={t.id}/>
            ), {style: {maxWidth: "100%"}, duration: 3000, position: "bottom-right"}) :
            toast((t: Toast) => (
                <CustomToast title={props.title} message={props.message} toastId={t.id}/>
            ), {style: {maxWidth: "100%"}, duration: 3000, position: "bottom-right"});
};

export default showCustomToast;