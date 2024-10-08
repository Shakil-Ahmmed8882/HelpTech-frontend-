"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { IComment } from "@/src/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addComment = async (
  commmentData: any
): Promise<{ data: any[] }> => {
  try {
    const { data } = await axiosInstance.post(`/comments/`, commmentData);
    revalidateTag("COMMENTS");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllCommmentsOnSiglePost = async (
  id: string
): Promise<{ data: IComment[] }> => {
  try {
    const token = cookies().get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/comments/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        cache:"no-store", 
        next: {
          tags: ["COMMENTS"],
          revalidate:2
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
