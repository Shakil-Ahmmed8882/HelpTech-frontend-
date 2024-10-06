import { useQuery } from "@tanstack/react-query";
import { getUserActions } from "../services/user-analytics";

export const useGetUserActionCounts = () => {
    return useQuery({
      queryKey: ["GET_ALL_POSTS"],
      queryFn: async () => await getUserActions(),
    });
  };
  