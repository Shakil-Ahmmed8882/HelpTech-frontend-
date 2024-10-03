"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import loginValidationSchema from "@/src/schemas/logoin.schema";
import Loading from "@/src/components/UI/Loading";
import HTInput from "@/src/components/form/HTInput";
import HTForm from "@/src/components/form/HTForm";
import { useUserLogin } from "@/src/hooks/auth.hook";
import { useUser } from "@/src/context/user.provider";
import GoogleLoginBtn from "@/src/components/UI/buttons/GoogleLoginBtn";

import { Divider } from "@nextui-org/divider";
import GithubLoginBtn from "@/src/components/UI/buttons/GithubLoginBtn";
import Container from "@/src/components/UI/wrapper/Container";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();
  const redirect = searchParams.get("redirect");
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
    
    console.log(data)
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <Container>
        <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
          <h3 className="my-2 text-2xl font-bold">Login with ProjectXYZ</h3>
          <p className="mb-4 text-default-50">
            Welcome Back! Let&lsquo;s Get Started
          </p>
          <section className="flex flex-col-reverse lg:flex-row  justify-center w-full gap-3">
            <div className="lg:w-[40%]">
              <HTForm
                resolver={zodResolver(loginValidationSchema)}
                onSubmit={onSubmit}
              >
                <div className="py-3">
                  <HTInput label="Name" name="username" />
                </div>
                <div className="py-3">
                  <HTInput label="Email" name="email" type="email" />
                </div>
                <div className="py-3">
                  <HTInput label="Password" name="password" type="password" />
                </div>

                <Button
                  className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
                  size="lg"
                  type="submit"
                >
                  Login
                </Button>
              </HTForm>
              <div className="text-center">
                Don&lsquo;t have account ?{" "}
                <Link href={"/register"}>Register</Link>
              </div>
            </div>
            <div className="lg:w-[20%]">
              <GoogleLoginBtn label="Sign in" />
              <GithubLoginBtn label="Sign in" />
              <Divider className="lg:hidden my-6" />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
