"use server";


import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addFollow = async (followData:any) => {
    
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
  try {
    const {data} =  await axiosInstance.delete(`/follows/${id}`)
    return data
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllFollowersOfSingleUser = async (id:string):Promise<{data: any}> => {
  try {
     const token = cookies().get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/follows/${id}/followers`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        cache:"no-store",
        next: {
          tags: ["FOLLOWERS"],
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





export const getAllFollowingsOfSingleUser = async (id:string):Promise<{data: any}> => {
  try {
     const token = cookies().get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/follows/${id}/followings`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        cache:"no-store",
        next: {
          tags: ["FOLLOWINGS"],
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




