import { useMutation, useQuery} from "@tanstack/react-query";
import { toast } from "sonner";
import { revalidateTag } from "next/cache";
import { addFollow, getAllFollowersOfSingleUser, getAllFollowingsOfSingleUser, isFollowing, unfollow } from "../services/follows";

export const useAddFollows = () => {
  return useMutation({
    mutationKey: ["ADD_FOLLOWS"],
    mutationFn: async (followData: any) => await addFollow(followData),
    onSuccess: () => {
      return (
        toast.success("Followed"),    
        revalidateTag("FOLLOWS")      
      )
    },
  });
};


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
        onSuccess: () => toast.success("unfollowed")
    })

}

export const useGetAllFollowersOfSingleUser = (id: string) => {
  return useQuery({
    queryKey: ["FOLLOWERS", id],
    queryFn: async ({ queryKey }) => {
      const [, userId] = queryKey;
      return await getAllFollowersOfSingleUser(userId);
    },
  });
};

export const useGetAllFollowingsOfSingleUser = (id: string) => {
  return useQuery({
    queryKey: ["FOLLOWINGS", id],
    queryFn: async ({ queryKey }) => {
      const [, userId] = queryKey;
      return await getAllFollowingsOfSingleUser(userId);
    },
  });
};