


import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";
import GitHubProvider from "next-auth/providers/github";
import axiosInstance from "../lib/AxiosInstance";
import { createLoginLogoutHistory } from "../services/login-history";

export const AuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ profile, account }: any) {
      try {
        if (!profile || !account) {
          return false;
        }

        if (account.provider === "google") {
          const response: any = await axiosInstance.post("/auth/login", {
            username: profile.name,
            email: profile.email,
            profilePhoto: profile.picture,
          });

          if (
            response.data.data.accessToken ||
            response.data.data.refreshToken
          ) {
            cookies().set("accessToken", response.data.data.accessToken);
            cookies().set("refreshToken", response.data.data.refreshToken);
            await createLoginLogoutHistory({ actionType: "login" });
            return true;
          } else {
            return false;
          }
        } else if (account.provider === "github") {
          // Handle GitHub login
          const response: any = await axiosInstance.post("/auth/login", {
            username: profile.name,
            email: profile.email,
            profilePhoto: profile.avatar_url,
          });

          if (
            response.data.data.accessToken ||
            response.data.data.refreshToken
          ) {
            cookies().set("accessToken", response.data.data.accessToken);
            cookies().set("refreshToken", response.data.data.refreshToken);
            await createLoginLogoutHistory({ actionType: "login" });
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  pages: {
    signIn: "/login",
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET as string,
};
