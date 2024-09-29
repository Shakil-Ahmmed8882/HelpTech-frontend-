"use client"

import { FieldValues, SubmitHandler } from "react-hook-form";
import FXForm from "../form/FXForm";
import { FXModal } from "./FXModal";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextarea";
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
      <FXForm onSubmit={onSubmit}>
        {questions?.map((question, index) => (
          <div className="mb-4">
            <p className="pt-8 pb-2">{question}</p>
            <FXInput name={`answer-${index + 1}`} label="Answer" />
          </div>
        ))}

        <FXTextarea name="description" label="description" />
        <Button type="submit" className="w-full block mt-4">
          {claimReqIsPending? "Sending..": "Send"}
        </Button>
      </FXForm>
    </FXModal>
  );
};

export default ClaimRequestModal;
