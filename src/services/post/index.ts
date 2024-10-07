"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createPost = async (postData: any) => {
  try {
    const { data } = await axiosInstance.post("/posts", postData);
    revalidateTag("POST");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updatePost = async (id: string, postData: any) => {
  try {
    const { data } = await axiosInstance.patch(`/posts/${id}`, postData);
    revalidateTag("POST");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Delete post
export const deletePost = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/posts/${id}`);
    revalidateTag("POST");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};


// Fetch all posts, optionally filtered by category 
export const getAllPosts = async (category: string) => {
  try {
    const token = cookies().get("accessToken")?.value;

    // Construct API URL based on query parameter
    const apiUrl = category
      ? `${process.env.NEXT_PUBLIC_BASE_API}/posts?category=${category}`
      : `${process.env.NEXT_PUBLIC_BASE_API}/posts`;

    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
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
