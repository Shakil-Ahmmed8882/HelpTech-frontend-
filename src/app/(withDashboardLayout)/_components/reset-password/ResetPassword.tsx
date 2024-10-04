"use client";

import HTForm from "@/src/components/form/HTForm";
import HTInput from "@/src/components/form/HTInput";
import { useUser } from "@/src/context/user.provider";
import { useResetPassword, useUpdateUserInfo } from "@/src/hooks/auth.hook";
import { resetPasswordSchema } from "@/src/schemas/logoin.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ResetPasswordPage = () => {
  const { mutate: ResetPassword, data: resetPasswordData } = useResetPassword();

  const { user } = useUser();

  const handleResetPassword: SubmitHandler<FieldValues> = async (data) => {
    delete data!.file;
    const userData = {
      ...data,
      userId: user?._id,
    };

    try {
      ResetPassword(userData);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <section className="mt-14 p-8">
      <HTForm
        resolver={zodResolver(resetPasswordSchema)}
        onSubmit={handleResetPassword}
      >
        <div className=" sm:w-1/2 mx-auto space-y-6 ">
          <HTInput name="newPassword" label="New Password" type="text" />
          <Button type="submit" className={"bg-primaryColor w-full text-white"}>
            Save
          </Button>
        </div>
      </HTForm>
    </section>
  );
};

export default ResetPasswordPage;
