"use server";


import axiosInstance from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";

export const pay = async (amount:number) => {
    const token  = cookies().get("accessToken")?.value


    try {
      const { data } = await axiosInstance.post("/payments/pay", 
        { amount }, 
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log({data})
      
      return data
    } catch (error: any) {
    console.log({error})
    throw new Error(error);
  }
};



// Fetch all posts, optionally filtered by category
export const getAllPaymentHistories = async (searchTerm: string) => {
  try {
    const { data } = await axiosInstance.get("/payments", {
      params: { searchTerm },
    });



    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch login/logout histories: ${error?.message || error}`);
  }
};

// Fetch all posts, optionally filtered by category
export const getAllPaymentHistoriesOfSingleUser = async (searchTerm: string) => {
  try {
    const { data } = await axiosInstance.get("/payments/single-user", {
      params: { searchTerm },
    });


    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch login/logout histories: ${error?.message || error}`);
  }
};


