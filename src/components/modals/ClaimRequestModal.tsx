"use client"

import { FieldValues, SubmitHandler } from "react-hook-form";
import HTForm from "../form/HTForm";
import { FXModal } from "./HTModal";
import HTInput from "../form/HTInput";
import HTTextarea from "../form/HTTextarea";
import { Button } from "@nextui-org/button";
import { useClaimRequest } from "@/src/hooks/claimRequest.hook";

interface Iprops {
  questions: string[];
  id: string;
}

const ClaimRequestModal = ({ id, questions }: Iprops) => {
  const {mutate: handleClaimRequest, isPending:claimReqIsPending} = useClaimRequest()

  
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((item) => item.startsWith("answer"))
        .map((key) => data[key]),
    };

    handleClaimRequest(claimRequestData);
  };
  return (
    <FXModal
      buttonClassName="flex-1 w-full"
      buttonText="Claim  Request"
      title="Claim Request"
    >
      <HTForm onSubmit={onSubmit}>
        {questions?.map((question, index) => (
          <div className="mb-4">
            <p className="pt-8 pb-2">{question}</p>
            <HTInput name={`answer-${index + 1}`} label="Answer" />
          </div>
        ))}

        <HTTextarea name="description" label="description" />
        <Button type="submit" className="w-full block mt-4">
          {claimReqIsPending? "Sending..": "Send"}
        </Button>
      </HTForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
