"use server"

import axiosInstance from "@/src/lib/AxiosInstance";
import { IComment } from "@/src/types";

export const addComment = async (commmentData:any):Promise<{data: any[]}> => {
    try {
      const { data } = await axiosInstance.post(`/comments/`, commmentData);
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