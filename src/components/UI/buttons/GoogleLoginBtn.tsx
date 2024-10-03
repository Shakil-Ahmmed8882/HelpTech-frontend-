"use client";

import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import googleIcon from "../../../assets/images/icons/google.png";
import Image from "next/image";

const GoogleLoginBtn = ({label}:{label:string}) => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  return (
    <Button
      onClick={() => {
        signIn("google", { callbackUrl: redirect ? redirect : "/" });
      }}
      className="w-full mt-3 flex items-center bg-default-50"
    >
      <Image src={googleIcon} width={25} height={25} alt="google icon" /> {label} with Google
    </Button>
  );
};

export default GoogleLoginBtn;
