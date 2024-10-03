"use server";

import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createPost = async (postData:any) => {
  try {
    const { data } = await axiosInstance.post("/posts", postData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};


