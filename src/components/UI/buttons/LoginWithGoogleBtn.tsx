"use client";
import { signIn } from "next-auth/react";

import { Button } from "@nextui-org/button";

const LoginWithGoogleBtn = () => {
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
      Login with Google
    </Button>
  );
};

export default LoginWithGoogleBtn;
