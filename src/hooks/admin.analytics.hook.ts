import { useQuery } from "@tanstack/react-query";
import { getAdminDashboardAnalyticMatrix } from "../services/admin-analytics";

export const useGetAdminDashboardAnalyticMatrix = () => {
    return useQuery({
      queryKey: ["ANALYTICS"],
      queryFn: async () => await getAdminDashboardAnalyticMatrix(),
    });
  };
  