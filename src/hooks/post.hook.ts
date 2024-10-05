import { useMutation, useQuery } from "@tanstack/react-query"
import { createPost, getAllPosts, getOfMyPosts, getSinglePost } from "../services/post"
import { toast } from "sonner"


export const useCreatePost = () => {

    return useMutation({
        mutationKey: ["CREATE_POST"],
        mutationFn: async(postData:any) => await createPost(postData),
        onSuccess: ()=>{
            toast.success("Post is created successully")
        },
        onError: (error)=>{
            toast.success(error.message)
        }
    })

}

export const useGetAllPosts = () => {

    return useQuery({
        queryKey: ["GET_ALL_POSTS"],
        queryFn: async() => await getAllPosts(),
    })

}

export const useGetAllOfMyPosts = () => {

    return useQuery({
        queryKey: ["MY_POSTS"],
        queryFn: async() => await getOfMyPosts(),
    })

}

export const useGetSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_POST", id],
    queryFn: async ({ queryKey }) => {
      const [, postId] = queryKey;
      return await getSinglePost(postId);
    },
  });
};


