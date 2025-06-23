"use client"

import {Button, useDisclosure} from "@nextui-org/react";
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/modal";
import React, {useEffect} from "react";
import Image from 'next/image';


export interface PropsForm {
    open: boolean
    setOpen: (state: boolean) => void;
    image: string;
}

export const ModalImage = (props: PropsForm) => {
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
    return <>
        <Modal size={"2xl"} isOpen={isOpen}
               onOpenChange={onOpenChange}
               className={"absolute top-[0px]"}
               onClose={()=>{props.setOpen(false)}}
               isDismissable={false}
               isKeyboardDismissDisabled={true}>
            <ModalContent>
                {(onClose) => <>
                    <ModalHeader>Lihat Gambar</ModalHeader>
                    <ModalBody className="flex flex-col gap-2">
                        <div style={{width: '100%'}}>
                            <Image
                                src={props.image}
                                alt="Gambar"
                                layout="responsive"
                                objectFit="cover"
                                width={1000}
                                height={500}
                            />
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
        </Modal>
    </>
}