import { useQuery } from "@tanstack/react-query";
import { getUserActions } from "../services/analytics";

export const useGetUserActionCounts = () => {
    return useQuery({
      queryKey: ["GET_ALL_POSTS"],
      queryFn: async () => await getUserActions(),
    });
  };
  