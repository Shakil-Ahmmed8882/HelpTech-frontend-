"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const addVote = async (
  voteData: any
): Promise<{ data: any[] }> => {
  try {
    const { data } = await axiosInstance.post(`/votes/`, voteData);
    revalidateTag("GET_SINGLE_POST")
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
