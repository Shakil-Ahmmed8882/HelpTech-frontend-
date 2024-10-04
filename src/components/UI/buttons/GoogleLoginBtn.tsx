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
      className="w-full mt-3 flex items-center bg-default-50"
      onClick={() => {
        signIn("google", { callbackUrl: redirect ? redirect : "/" });
      }}
    >
      <Image alt="google icon" height={25} src={googleIcon} width={25} /> {label} with Google
    </Button>
  );
};

export default GoogleLoginBtn;
