import { useMutation } from "@tanstack/react-query";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { addVote } from "../services/vote";

export const useAddVotes = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["VOTES"],
    mutationFn: async (votesData) => await addVote(votesData),
    onSuccess: () => {
      toast.success("successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

