"use server";

import { cookies } from "next/headers";

export const getUserActions = async (): Promise<{ data: any[] }> => {
  try {
    const token = cookies().get("accessToken")?.value;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/analytics/user/actions-counts`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        next: {
          tags: ["ANALYTICS"],
        },
      }
    );
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
