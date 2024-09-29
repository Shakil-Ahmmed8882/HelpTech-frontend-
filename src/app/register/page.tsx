"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import registerValidationSchema from "@/src/schemas/register.schema";
import { useEffect } from "react";
import Loading from "@/src/components/UI/Loading";
import Container from "@/src/components/UI/wrapper/Container";
import GoogleLoginBtn from "@/src/components/UI/buttons/GoogleLoginBtn";
import { Divider } from "@nextui-org/divider";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import GithubLoginBtn from "@/src/components/UI/buttons/GithubLoginBtn";


const RegisterPage = () => {
  const router = useRouter();

  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();
  const { setIsLoading: userLoading } = useUser();

  const handleRegisterSubmit: SubmitHandler<FieldValues> = (data) => {
    
    handleUserRegistration(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push("/");
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <Container>
        <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
          <h3 className="my-2 text-2xl font-bold">Register with ProjectXYZ</h3>
          <p className="mb-4 text-default-50">
            Welcome Back! Let&lsquo;s Get Started
          </p>
          <section className="flex flex-col-reverse lg:flex-row  justify-center w-full gap-3">
            <div className="lg:w-[40%]">
              <FXForm
                resolver={zodResolver(registerValidationSchema)}
                onSubmit={handleRegisterSubmit}
              >
                <div className="py-3">
                  <FXInput label="Name" name="name" />
                </div>
                <div className="py-3">
                  <FXInput label="Email" name="email" type="email" />
                </div>
                <div className="py-3">
                  <FXInput label="Password" name="password" type="password" />
                </div>

                <Button
                  className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                  size="lg"
                  type="submit"
                >
                  Register
                </Button>
              </FXForm>
              <div className="text-center">
                Already have an account ? <Link href={"/login"}>Login</Link>
              </div>
            </div>
            <div className="lg:w-[20%]">
              <GoogleLoginBtn label="Sign up" />
              <GithubLoginBtn label="Sign up"/>
              <Divider className="lg:hidden my-6" />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
