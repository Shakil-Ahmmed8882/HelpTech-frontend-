import { useMutation } from "@tanstack/react-query";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { loginUser, registerUser, resetPassword, updateUserInfo } from "../services/authService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User registration is successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User Login is successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};


export const useUpdateUserInfo = () => {
  return useMutation<any, Error, { id: string, userData: FieldValues }>({
    mutationKey: ["USER_INFO"],
    mutationFn: async ({ id, userData }) => await updateUserInfo(id, userData),
    onSuccess: () => {
      toast.success("User updated successfully.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useResetPassword = () => {
  return useMutation<any, Error, FieldValues >({
    mutationKey: ["RESET_PASSWORD"],
    mutationFn: async (userData) => await resetPassword(userData),
    onSuccess: () => {
      toast.success("Password is updated successfully.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
