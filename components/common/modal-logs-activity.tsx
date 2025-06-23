import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/modal";
import Image from "next/image";
import {Button, useDisclosure} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import ViewLogs from "@/components/common/SubTopMenu/view-logs";


export interface PropsForm {
    open: boolean
    setOpen: (state: boolean) => void;
}

export const ModalLogsActivity = (props: PropsForm) =>{
    const {isOpen, onClose,onOpen, onOpenChange} = useDisclosure();
    useEffect(() => {
        if (props.open) {
            onOpen();
        }
    }, [props.open]);

    useEffect(() => {
        if (!isOpen) {
            props.setOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen){
            setIsOpenLogs(true);
            return
        }
        setIsOpenLogs(false);
    }, [isOpen]);

    const [isOpenLogs, setIsOpenLogs] = useState(false)

    return  <>
        <Modal size={"5xl"} isOpen={isOpen}
               onOpenChange={onOpenChange}
               className={"absolute top-[0px]"}
               onClose={()=>{props.setOpen(false)}}
               isDismissable={false}
               isKeyboardDismissDisabled={true}>
            <ModalContent>
                {(onClose) => <>
                    <ModalHeader>Logs Activity</ModalHeader>
                    <ModalBody className="flex flex-col gap-2">
                        <div style={{width: '100%'}}>
                            {
                                isOpenLogs && <ViewLogs/>
                            }
                        </div>
                        <div className={"flex flex-row gap-2 items-end justify-end pt-6 pb-3"}>
                            <Button type="button" color="secondary" variant="light" onPress={() => {
                                onClose();
                                props.setOpen(false)
                            }}>
                                Close
                            </Button>
                        </div>
                    </ModalBody>
                </>}
            </ModalContent>
        </Modal></>
}