import { useMutation, useQuery } from "@tanstack/react-query";
import {
  
  deletePost,
  getAllSearchedPosts,
  getOfMyPosts,
  getSinglePost,
  updatePost,
} from "../services/post";
import { getAllLoginAndOutHistories, getAllLoginAndOutHistoriesOfSingleUser } from "../services/login-history";





export const useGetAllLoginAndOutHistories = (searchTerm: string) => {
  return useQuery({
    queryKey: ["LOGIN_LOGOUT_HISTORY", searchTerm], // Include searchTerm in query key
    queryFn: async () => {
      const response = await getAllLoginAndOutHistories(searchTerm);
      return response;
    },
    enabled: !!searchTerm, // Only fetch if searchTerm is truthy
  });
};


export const useGetAllLoginAndOutHistoriesOfSingleUser = (searchTerm: string) => {
  return useQuery({
    queryKey: ["LOGIN_LOGOUT_SINGLE_HISTORY", searchTerm],
    queryFn: async () => {
      const response = await getAllLoginAndOutHistoriesOfSingleUser(searchTerm);
      return response;
    },
    enabled: !!searchTerm, // Only fetch if searchTerm is truthy
  });
};



export const useGetAllSearchedPosts = (searchValue: string) => {
  return useQuery({
    queryKey: ["GET_ALL_POSTS", searchValue],
    queryFn: async () => await getAllSearchedPosts(searchValue), 
    enabled: !!searchValue, // Only fetch when searchValue is provided
  });
};


export const useGetAllOfMyPosts = () => {
  return useQuery({
    queryKey: ["MY_POSTS"],
    queryFn: async () => await getOfMyPosts(),
  });
};

export const useUpdatePosts = () => {
  return useMutation({
    mutationKey: ["POST"],
    mutationFn: async ({ id, postData }: { id: string; postData: any }) => {
      return await updatePost(id, postData);
    },
  });
};

export const useDeletePost = () => {
  return useMutation({
    mutationKey: ["POST"],
    mutationFn: async ( id : string) => {
      return await deletePost(id);
    },
  });
};

export const useGetSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_POST", id],
    queryFn: async ({ queryKey }) => {
      const [, postId] = queryKey;
      return await getSinglePost(postId);
    },
  });
};
