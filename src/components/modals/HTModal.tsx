import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

import { ReactNode } from "react";

interface Iprops {
  buttonText: string;
  title: string;
  children: ReactNode;
  buttonClassName?: string;
}

export const HTModal = ({
  buttonText,
  title,
  children,
  buttonClassName,
}: Iprops) =>  {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className={buttonClassName} onPress={onOpen}>{buttonText}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="py-4 overflow-auto !min-h-screen">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
