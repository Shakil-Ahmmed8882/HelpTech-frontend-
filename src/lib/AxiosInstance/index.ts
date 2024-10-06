"use server";

import envConfig from "@/src/config/envConfig";
import { getNewAccessToken } from "@/src/services/authService";
import axios from "axios";
import { cookies } from "next/headers";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

// Request interceptor to add Authorization header with access token
axiosInstance.interceptors.request.use(
  function (config) {
    // Get access token from cookies (server-side)
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 errors and refresh token
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // Check if the error is a 401 (Unauthorized) and retry the request once
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Attempt to get a new access token using refresh token
      try {
        const res = await getNewAccessToken(); // Assumes this service handles refresh logic
        const newAccessToken = res?.accessToken;

        if (newAccessToken) {
          // Update Authorization header with the new access token
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // Set the new access token into cookies (on server-side response)
          // You cannot modify cookies directly in server-side requests, this must be handled on the client response
          cookies().set("accessToken", newAccessToken);

          // Retry the original request with the new token
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;