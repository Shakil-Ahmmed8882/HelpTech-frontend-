"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/src/lib/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken.userId,
      username: decodedToken.username,
      email: decodedToken.email,
      role: decodedToken.role,
      profilePhoto: decodedToken.profilePhoto,
    };
  }

  return decodedToken;
};

export const getDBStoredUser = async (id: string) => {
  const { data } = await axiosInstance.get(`/users/${id}`);
  
  
  return data;
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookies: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to get new access token");
  }
};



export const updateUserInfo = async (id:string,userData: FieldValues) => {

  

  try {
    const { data } = await axiosInstance.put(`/users/${id}`, userData);

    // Now issue is when admin change status that user token is set in cookied
    // and admin become that user as we call the function in 2 differnt component
    // when user update profile he/she won't pass status so by checking this we ensure 
    // when admin using this function not to set cookie in browser 
    if(userData.status) return ; 
    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const resetPassword = async (userData: FieldValues) => {
  
  try {
    const { data } = await axiosInstance.post(`/auth/reset-password`, userData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
