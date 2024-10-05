"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import { FormProvider, SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hook";
import Loading from "@/src/components/UI/Loading";
import HTInput from "@/src/components/form/HTInput";
import HTSelect from "@/src/components/form/HTSelect";
import { HTModal } from "@/src/components/modals/HTModal";
import styles from "../editor.module.css";
import { uploadToImageBB } from "@/src/utils/uploadImage";

// Dynamically import JoditEditor without SSR
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function CreatePost({redirect}:{redirect:string | undefined}) {


  

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const [content, setContent] = useState("");

  const router = useRouter();
  const { user } = useUser();

  const { mutate: handleCreatePost, isPending: createPostPending, isSuccess } = useCreatePost();

  const methods = useForm();
  const { handleSubmit } = methods;

  // Define the editor ref here
  const editor = useRef(null); 

  const onSubmit: SubmitHandler<FieldValues> =async (data) => {

    const imageUrl = await uploadToImageBB(imageFiles[0]);
    delete data!.file;
    delete data!.image;

    const postData = {
      ...data,
      author: user?._id || "",
      tags: [data?.tags],
      images: [imageUrl],
      content,
    };


    


    handleCreatePost(postData);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  if (!createPostPending && isSuccess) {
    router.push(`${redirect?redirect:"/"}`);
  }

  return (
    <>
      <HTModal buttonClassName="bg-primaryColor" buttonText="Write post" title="Create post">
        {createPostPending && <Loading />}
        <div className="h-full rounded-xl py-12">
          <h1 className="text-2xl font-semibold">Add your post</h1>
          <Divider className="mb-5 mt-3" />
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap gap-2 py-2">
                <div className="min-w-fit flex-1">
                  <HTInput
                    className="!border-none !outline-none text-3xl"
                    label="Title"
                    name="title"
                  />
                </div>
              </div>

              <div className="space-y-3 md:space-y-0 md:flex flex-wrap gap-2 py-6">
                <div className="min-w-fit flex-1">
                  <HTSelect label="Category" name="category" options={categoryOptions} />
                </div>
                <div className="min-w-fit flex-1">
                  <HTSelect label="Tags" name="tags" options={tagOptions} />
                </div>
                <div className="min-w-fit flex-1">
                  <label
                    className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                    htmlFor="image"
                  >
                    Upload image
                  </label>
                  <input
                    multiple
                    className="hidden"
                    id="image"
                    type="file"
                    onChange={(e) => handleImageChange(e)}
                  />
                </div>
              </div>

              {imagePreviews.length > 0 && (
                <div className="flex gap-5 my-5 flex-wrap">
                  {imagePreviews.map((imageDataUrl) => (
                    <div
                      key={imageDataUrl}
                      className="relative rounded-xl border-2 border-dashed border-default-300 p-2"
                    >
                      <img
                        alt="item"
                        className="h-full w-full object-cover object-center rounded-md"
                        src={imageDataUrl}
                      />
                    </div>
                  ))}
                </div>
              )}

              <JoditEditor
                ref={editor} // Assign the ref to JoditEditor
                className={`dark:!bg-[red] text-black ${styles.joditEditor}`}
                value={content}
                onChange={(newContent) => setContent(newContent)}
              />

              <Divider className="my-5" />
              <div className="flex justify-end">
                <Button className="bg-primaryColor" size="lg" type="submit">
                  Post
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </HTModal>
    </>
  );
}

const categoryOptions = [
  { label: "Technology", key: "Technology" },
  { label: "Health", key: "Health" },
  { label: "Travel", key: "Travel" },
];

const tagOptions = [
  { label: "Food", key: "Food" },
  { label: "Health", key: "Health" },
  { label: "Travel", key: "Travel" },
];