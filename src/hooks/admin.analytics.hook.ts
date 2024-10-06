import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUser, getAdminDashboardAnalyticMatrix, getAllUsers } from "../services/admin-analytics";
import { toast } from "sonner";

export const useGetAdminDashboardAnalyticMatrix = () => {
    return useQuery({
      queryKey: ["ANALYTICS"],
      queryFn: async () => await getAdminDashboardAnalyticMatrix(),
    });
  };
  

export const useGetAllUsers = () => {
    return useQuery({
      queryKey: ["ALL_USERS"],
      queryFn: async () => await getAllUsers(),
    });
  };
  
export const useDeleteUser = () => {
    return useMutation({
      mutationKey: ["ALL_USERS"],
      mutationFn: async (id:string) => await deleteUser(id),
      onSuccess: () => toast.success("user deleted successfully"),
      onError: (error:any) => toast.success("could not delete user")
    });
  };
  