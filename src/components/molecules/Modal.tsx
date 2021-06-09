//chakra-ui
import {
  Modal as CkModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps
} from "@chakra-ui/react";

//resources
import React from "react";

interface IModalProps extends ModalProps{
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
};

export const Modal = ({ title, isOpen, children, footer, onClose, ...props }: IModalProps) => {
  return (
    <CkModal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </CkModal>
  )
};

export default Modal;
