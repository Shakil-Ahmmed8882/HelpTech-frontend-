import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { pay } from "../services/payment";

export const usePay = () => {
  return useMutation<any, Error, number>({
    mutationKey: ["PAYMETNT"],
    mutationFn: async (amount: number) => await pay(amount)});
};

// export const useUserLogin = () => {
//   return useMutation<any, Error, FieldValues>({
//     mutationKey: ["USER_LOGIN"],
//     mutationFn: async (userData) => await loginUser(userData),
//     onSuccess: () => {
//       toast.success("User Login is successful.");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });
// };

// export const useUpdateUserInfo = () => {
//   return useMutation<any, Error, { id: string, userData: FieldValues }>({
//     mutationKey: ["USER_INFO"],
//     mutationFn: async ({ id, userData }) => await updateUserInfo(id, userData),
//     onSuccess: () => {
//       toast.success("User updated successfully.");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });
// };

// export const useResetPassword = () => {
//   return useMutation<any, Error, FieldValues >({
//     mutationKey: ["RESET_PASSWORD"],
//     mutationFn: async (userData) => await resetPassword(userData),
//     onSuccess: () => {
//       toast.success("Password is updated successfully.");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });
// };
