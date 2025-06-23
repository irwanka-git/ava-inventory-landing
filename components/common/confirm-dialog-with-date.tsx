import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Alert} from "@nextui-org/alert";
import {Button} from "@nextui-org/button";
import {parseDate} from "@internationalized/date";
import {cn, FormatTanggalTransaksi} from "@/lib/utils";
import {DatePicker} from "@nextui-org/react";

type ConfirmDialogProps = {
    isOpen: boolean;
    title: string;
    description: string;
    onConfirm: (tanggal:string) => void;
    onCancel: () => void;
    defaultValue: string;
    color?: string;
};
const ConfirmDialogActionWithDate: React.FC<ConfirmDialogProps> = ({
                                                         isOpen,
                                                         title,
                                                         onConfirm,
                                                         description,
                                                         onCancel,
                                                         defaultValue,
                                                         color,
                                                     }) => {

    const [tanggal, setTanggal] = useState("");
    useEffect(() => {
        setTanggal(defaultValue);
    }, [defaultValue]);
    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            isOpen={isOpen}
            size={"2xl"}
            isDismissable={false}
            onClose={()=>{onCancel(); }}
        >
            <ModalContent>
                <ModalHeader>
                    Konfirmasi
                </ModalHeader>
                <ModalBody>
                    <p className={"font-medium"}>{title}</p>
                    <Alert description={description} title={"Informasi"}/>
                    <DatePicker
                        label="Tanggal"
                        variant="bordered"
                        isRequired
                        showMonthAndYearPickers
                        defaultValue={ null}
                        dateInputClassNames={{
                            input: "hidden"
                        }}
                        value={tanggal != "" ? parseDate(tanggal) : null}
                        onChange={(value) => {
                            setTanggal(value!.toString())
                        }}
                        startContent={<div
                            className={cn("flex-1", tanggal != "" ? "text-black" : "text-gray-500")}>
                            {tanggal != "" ? FormatTanggalTransaksi(tanggal) : "d MMM yyyy"}
                        </div>}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onPress={()=>{setTanggal("");onCancel()}}>
                        Close
                    </Button>
                    <Button className={color ==="success" ? "text-white":""} color={color! ==="primary" ?  "primary" : (color! ==="success" ?  "success" : "danger")} onPress={() => {
                        onConfirm(tanggal)
                    }}>
                        Ya, Lanjutkan
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ConfirmDialogActionWithDate;