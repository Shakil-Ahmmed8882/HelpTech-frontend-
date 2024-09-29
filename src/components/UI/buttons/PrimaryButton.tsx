"use client";


import { Button } from "@nextui-org/button";

const PrimaryButton = ({text}:{text:string}) => {
  return (
    // onclick
    <Button>
      {text}
    </Button>
  );
};

export default PrimaryButton;
