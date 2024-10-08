import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { getAllPaymentHistories, getAllPaymentHistoriesOfSingleUser, pay } from "../services/payment";

export const usePay = () => {
  return useMutation<any, Error, number>({
    mutationKey: ["PAYMETNT"],
    mutationFn: async (amount: number) => await pay(amount)});
};



export const  useGetAllPaymentHistories = (searchTerm: string) => {
  return useQuery({
    queryKey: ["PAYMENT_HISTORY", searchTerm], // Include searchTerm in query key
    queryFn: async () => {
      const response = await getAllPaymentHistories(searchTerm);
      return response;
    },
    enabled: !!searchTerm, // Only fetch if searchTerm is truthy
  });
};


export const useGetAllPaymentHistoriesOfSingleUser = (searchTerm: string) => {
  return useQuery({
    queryKey: ["PAYMENT_SINGLE_HISTORY", searchTerm],
    queryFn: async () => {
      const response = await getAllPaymentHistoriesOfSingleUser(searchTerm);
      return response;
    },
    enabled: !!searchTerm, // Only fetch if searchTerm is truthy
  });
};