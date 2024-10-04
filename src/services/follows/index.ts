"use server";


import axiosInstance from "@/src/lib/AxiosInstance";
import { IPost } from "@/src/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addFollow = async (followData:any) => {
    
    console.log("from the follow service file...")
  try {
    const { data } = await axiosInstance.post("/follows", followData);
    revalidateTag("VOTES")
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};


export const isFollowing = async (isFollowingData: {follower:string, following:string}) => {
  try {
    const {data} =  await axiosInstance.post("/follows/is-following", isFollowingData)
    return data
  } catch (error: any) {
    throw new Error(error);
  }
};

export const unfollow = async (id:string) => {
    console.log("[service]unfollow",id)
  try {
    const {data} =  await axiosInstance.delete(`/follows/${id}`)
    return data
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSinglePost = async (id:string):Promise<{data: IPost}> => {
  try {
     const token = cookies().get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        cache:"no-store",
        next: {
          tags: ["POST"]
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};




