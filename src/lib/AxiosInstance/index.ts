import envConfig from "@/src/config/envConfig";
import { getNewAccessToken } from "@/src/services/authService";

import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = cookies().get("accessToken")!?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error?.config;

    if (error?.response?.status === 401 && !config.sent) {
      config.sent = true
      // get refresh token
      const res = await getNewAccessToken();
      const accessToken = res?.accessToken;

      // add that into header.authorization
      config.headers["Authorization"] = accessToken;

      // set it into cookies
      cookies().set("accessToken", accessToken);

      // call axiosinstance(config) to resend the request with new token
      return axiosInstance(config);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
