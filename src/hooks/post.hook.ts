import { useMutation, useQuery } from "@tanstack/react-query"
import { createPost, getAllPosts } from "../services/post"
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