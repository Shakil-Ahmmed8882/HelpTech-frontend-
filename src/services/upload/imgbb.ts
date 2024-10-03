"use client"

import axiosInstance from "@/src/lib/AxiosInstance";

export const uploadImage = async (img: File) => {
  try {
    const formData = new FormData();
    formData.append("image", img);
    
    // Use the correct imgbb endpoint
    const response = await axiosInstance.post(
      `https://api.imgbb.com/1/upload?expiration=600&key=350937dd85bb2d5259ced0363ea574db`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    
    return response.data.data.url;  // Return the uploaded image URL
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
};
