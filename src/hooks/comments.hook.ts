import { useMutation, useQuery } from "@tanstack/react-query";
import { addComment, getAllCommmentsOnSiglePost } from "../services/comments";
import { toast } from "sonner";
import { revalidateTag } from "next/cache";

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
    })

}