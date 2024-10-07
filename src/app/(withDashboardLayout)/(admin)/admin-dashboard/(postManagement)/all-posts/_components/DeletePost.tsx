import { DeletePostModal } from "@/src/app/(withDashboardLayout)/_components/DeletePost";
import { useDeletePost } from "@/src/hooks/post.hook";
import { useState } from "react";

const DeletePost = ({ postId }: { postId: string }) => {


    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const { mutate: DeletePost, data: postDeletedResponseData } = useDeletePost();


    const confirmDelete = (postId: string) => {
        // DeletePost(postId);
        
        DeletePost(postId)
        setIsDeleteModalOpen(true);
        console.log("confirm", postId)
        
      };
    
    return<>
    <button className="cursor-pointer" onClick={()=> setIsDeleteModalOpen(true)}>🗑️</button>
    <DeletePostModal
          title="Delete Post"
          postId={postId as string}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          onConfirmDelete={confirmDelete}
        />
    </> 
  };
  
  export default DeletePost;
  