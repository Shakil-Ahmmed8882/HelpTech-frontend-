import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { claimRequest } from "../services/claimRequest";
import { IClaimRequest } from "../types";

export const useClaimRequest = () => {

  return useMutation({
      mutationKey: ["CLAIM_REQUEST"],
      mutationFn: async(claimRequestData:IClaimRequest) => await claimRequest(claimRequestData),
      onSuccess: ()=>{
          toast.success("Product is claimed successully")
      },
      onError: (error)=>{
          toast.success(error.message)
      }
  })

}