import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/modal";
import { useState } from "react";

interface DeletePostProps {
  title: string;
  postId: string;
  isDeleteModalOpen: boolean; // Control open state from parent
  setIsDeleteModalOpen: (isOpen: boolean) => void; // Function to toggle modal state
  onConfirmDelete: (postId: string) => void; // Callback for confirming deletion
}

export const DeletePostModal = ({
  title,
  postId,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  onConfirmDelete,
}: DeletePostProps) => {
  return (
    <Modal
      isOpen={isDeleteModalOpen}
      onOpenChange={setIsDeleteModalOpen}
      className="transition-transform duration-300 ease-in-out transform-gpu"
    >
      <ModalContent>
        <>
          <ModalHeader className="text-lg font-bold">{title}</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this post? This action cannot be undone.</p>
          </ModalBody>
          <div className="flex justify-end gap-4 p-4">

            {/* if cancel close modal without any operation  */}
            <Button color="danger" onPress={() => setIsDeleteModalOpen(false)}>
              Cancel
            </Button>
            {/* if confirm pass id, and close modal */}
            <Button
              color="primary"
              onPress={() => {
                onConfirmDelete(postId); 
                setIsDeleteModalOpen(false);
              }}
            >
              Confirm
            </Button>
          </div>
        </>
      </ModalContent>
    </Modal>
  );
};
