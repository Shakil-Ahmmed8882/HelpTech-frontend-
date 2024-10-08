"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";


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

// Fetch all posts, optionally filtered by category
export const getAllLoginAndOutHistoriesOfSingleUser = async (searchTerm: string) => {
  try {
    const { data } = await axiosInstance.get("/login/logout-histories/single-user", {
      params: { searchTerm },
    });


    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch login/logout histories: ${error?.message || error}`);
  }
};


