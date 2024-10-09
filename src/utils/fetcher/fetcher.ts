"use server"

import { cookies } from "next/headers";

// Utility function to handle fetch requests
export const fetcher = async (
    endpoint: string = "", // Set endpoint as an optional parameter with a default value
    options: RequestInit = {}
  ): Promise<any> => {
    try {
      const token = cookies().get("accessToken")?.value;
  
      // Default headers
      const defaultHeaders = {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      };
  
      // Combine user-provided headers with default headers
      options.headers = {
        ...defaultHeaders,
        ...options.headers,
      };
  
      // Set the cache and next tags (optional, based on the needs of the call)
      options.cache = options.cache || "no-store";
      
      // Build the full URL dynamically based on the presence of the endpoint
      const url = `${process.env.NEXT_PUBLIC_BASE_API}${endpoint ? `/${endpoint}` : ""}`;
      
      const res = await fetch(url, options);
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  