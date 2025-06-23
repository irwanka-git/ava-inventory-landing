import React from "react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Alert} from "@nextui-org/alert";
import {Button} from "@nextui-org/button";

type ConfirmDialogProps = {
    isOpen: boolean;
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
    color?: string;
};
const ConfirmDialogAction: React.FC<ConfirmDialogProps> = ({
                                                         isOpen,
                                                         title,
                                                         onConfirm,
                                                         description,
                                                         onCancel,
                                                         color,
                                                     }) => {
    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            isOpen={isOpen}
            size={"2xl"}
            onClose={onCancel}
        >
            <ModalContent>
                <ModalHeader>
                    Konfirmasi
                </ModalHeader>
                <ModalBody>
                    <p className={"font-medium"}>{title}</p>
                    <Alert description={description} title={"Informasi"}/>
                </ModalBody>
                <ModalFooter>
                    <Button onPress={onCancel}>
                        Close
                    </Button>
                    <Button color={color! ==="primary" ?  "primary" : "danger"} onPress={() => {
                        onConfirm()
                    }}>
                        Ya, Lanjutkan
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ConfirmDialogAction;