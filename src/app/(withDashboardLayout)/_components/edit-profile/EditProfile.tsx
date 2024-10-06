"use client";

import HTForm from "@/src/components/form/HTForm";
import HTInput from "@/src/components/form/HTInput";
import { useUser } from "@/src/context/user.provider";
import { useUpdateUserInfo } from "@/src/hooks/auth.hook";
import { uploadToImageBB } from "@/src/utils/uploadImage";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

const EditProfile = () => {
  const { mutate: handleEditUserInfo, data: updateduserInfo } =
    useUpdateUserInfo();

  const { user } = useUser();
  const handleEditProfile: SubmitHandler<FieldValues> = async (data) => {
    const imageUrl = await uploadToImageBB(data.file[0]);
    delete data!.file;
    const userData = {
      ...data,
      profilePhoto: imageUrl,
    };

    try {
      handleEditUserInfo({ id: user!._id, userData });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <section className="mt-14 p-8">
      <HTForm onSubmit={handleEditProfile}>
        <div className="md:flex gap-6 items-center space-y-6 md:space-y-0">
          <HTInput name="username" label="Name" />
          <HTInput name="email" label="Eamil" type="email" />
        </div>
        <div className="md:flex gap-6 items-center pt-5 space-y-6 md:space-y-0">
          <HTInput label="Bio" name="bio" />
          <HTInput label="" className="text-[gray]" name="file" type="file" />
        </div>
        <div className="pt-6 w-full flex">
          <Button
            type="submit"
            className={"bg-primaryColor w-full sm:w-1/2 text-white"}
          >
            Save
          </Button>
        </div>
      </HTForm>
    </section>
  );
};

export default EditProfile;
