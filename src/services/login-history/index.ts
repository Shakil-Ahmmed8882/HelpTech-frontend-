"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createLoginLogoutHistory = async (actionType: {
  actionType: string;
}) => {
  try {
    const { data } = await axiosInstance.post(
      "/login/logout-histories",
      actionType
    );
    revalidateTag("LOGIN_LOGOUT_HISTORY");

    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Fetch all posts, optionally filtered by category
export const getAllLoginAndOutHistories = async (searchTerm: string) => {
  try {
    const { data } = await axiosInstance.get("/login/logout-histories", {
      params: { searchTerm },
    });


    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch login/logout histories: ${error?.message || error}`);
  }
};


// =============================================================

export const getAllSearchedPosts = async (searchTerm = "") => {
  try {
    const token = cookies().get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/posts?searchTerm=${encodeURIComponent(searchTerm)}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        next: {
          tags: ["POST"],
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getOfMyPosts = async () => {
  try {
    const token = cookies().get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/posts/my-posts`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        next: {
          tags: ["POST"],
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSinglePost = async (id: string): Promise<{ data: IPost }> => {
  try {
    const token = cookies().get("accessToken")?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
      next: {
        tags: ["POST"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
