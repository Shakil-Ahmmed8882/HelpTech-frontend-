"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { IComment } from "@/src/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// export const addComment = async (
//   commmentData: any
// ): Promise<{ data: any[] }> => {
//   try {
//     const { data } = await axiosInstance.post(`/comments/`, commmentData);
//     revalidateTag("COMMENTS");
//     return data;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };




export const addComment = async (
  commentData: any
): Promise<{ data: any[] }> => {
  try {
    const token = cookies().get("accessToken")?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/comments/`, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    if (!res.ok) {
      throw new Error(`Failed to add comment, status: ${res.status}`);
    }

    const data = await res.json();
    revalidateTag("COMMENTS");
    return data;
  } catch (error: any) {
    throw new Error(error.message || "An error occurred while adding a comment");
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
          // revalidate:2
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
