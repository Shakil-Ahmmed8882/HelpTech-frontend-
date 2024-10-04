import { useMutation, useQuery } from "@tanstack/react-query";
import { addComment, getAllCommmentsOnSiglePost } from "../services/comments";
import { toast } from "sonner";
import { revalidateTag } from "next/cache";
import { addFollow, isFollowing, unfollow } from "../services/follows";


  export const useAddFollows = () => {

    return useMutation({
        mutationKey: ["ADD_FOLLOWS"],
        mutationFn: async(followData:any) => await addFollow(followData),
        onSuccess: ()=>{
            revalidateTag("FOLLOWS")
            toast.success("Followed")
        }
    })

}

  export const useIsFollowing = () => {

    return useMutation({
        mutationKey: ["IS_FOLLOWING"],
        mutationFn: async(isFollowingData:any) => await isFollowing(isFollowingData),
        onSuccess: () => toast.success("unfollowed")
    })

}

  export const useUnfollow = () => {
    return useMutation({
        mutationKey: ["UNFOLLOW"],
        mutationFn: async(id:string) => await unfollow(id),
        onSuccess: () => toast.success("followed")
    })

}