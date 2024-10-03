import { useMutation, useQuery } from "@tanstack/react-query";
import { addComment, getAllCommmentsOnSiglePost } from "../services/comments";
import { toast } from "sonner";

export const useGetAllCommentsOnSinglePost = (id: string) => {
    return useQuery({
      queryKey: ["SINGLE_POST_COMMENT", id],
      queryFn: async ({ queryKey }) => {
        const [, postId] = queryKey;
        return await getAllCommmentsOnSiglePost(postId);
      },
    });
  };

  export const useAddComment = () => {

    return useMutation({
        mutationKey: ["ADD_COMMENT"],
        mutationFn: async(commentData:any) => await addComment(commentData),
        onSuccess: ()=>{
            toast.success("Comment is added successully")
        },
        onError: (error)=>{
            toast.success(error.message)
        }
    })

}