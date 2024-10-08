import { useMutation, useQuery } from "@tanstack/react-query";
import { addComment, getAllCommmentsOnSiglePost } from "../services/comments";

export const useGetAllCommentsOnSinglePost = (id: string) => {
    return useQuery({
      queryKey: ["COMMENTS", id],
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