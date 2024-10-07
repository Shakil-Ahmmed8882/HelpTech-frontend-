
import Image from "next/image";
import React from "react";
import Link from "next/link";
import loginImage from "@/src/assets/images/login/login.png";
import Container from "@/src/components/UI/Container";
import { Button } from "@nextui-org/button";

const LoginDemo = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3">
        <div className="w-full md:w-2/4 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-4xl md:text-5xl leading-[40px] md:leading-[60px] font-bold">
            Sign In to Unlock Exclusive Content
          </h2>
          <p className="text-lg text-default-500 pb-5">
            Sign in now to enjoy personalized recommendations, early access to
            new releases, and much more.
          </p>
          <Button className="border border-primaryColor mt-8 bg-black text-white py-2 px-4 w-1/2">
            <Link href="/login">Sign In Now</Link>
          </Button>
        </div>

        <div className="w-full md:w-2/4">
          <Image width={500} height={500} src={loginImage} alt="login-vector" />
        </div>
      </div>
    </Container>
  );
};
export default LoginDemo