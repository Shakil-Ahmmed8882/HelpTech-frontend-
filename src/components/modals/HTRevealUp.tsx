import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";
import { motion } from "framer-motion"; // Import framer-motion

interface Iprops {
  buttonText: string;
  title: string;
  children: ReactNode;
  buttonClassName?: string;
}

export const HTRevealupModal = ({
  buttonText,
  title,
  children,
  buttonClassName,
}: Iprops) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className={buttonClassName} onPress={onOpen}>
        {buttonText}
      </Button>
      <Modal className="py-4" isOpen={isOpen} onOpenChange={onOpenChange}>
        <motion.div
          animate={{ opacity: 1, y: 0 }} // Animate to the center
          exit={{ opacity: 0, y: "100vh" }} // Exit back to the bottom
          initial={{ opacity: 0, y: "100vh" }} // Start fully hidden from bottom
          transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth timing for reveal
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                <ModalBody>{children}</ModalBody>
                {/* Uncomment if you want footer buttons */}
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
        </motion.div>
      </Modal>
    </>
  );
};
