"use server";


import axiosInstance from "@/src/lib/AxiosInstance";
import { IComment, IPost } from "@/src/types";

export const createPost = async (postData:any) => {
  try {
    const { data } = await axiosInstance.post("/posts", postData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};


export const getAllPosts = async () => {
  try {
    const { data } = await axiosInstance.get("/posts");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSinglePost = async (id:string):Promise<{data: IPost}> => {
  try {
    const { data } = await axiosInstance.get(`/posts/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllCommmentsOnSiglePost = async (id:string):Promise<{data: IComment[]}> => {
  try {
    const { data } = await axiosInstance.get(`/comments/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};


