

"use client";

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hook";
import Loading from "@/src/components/UI/Loading";
import HTInput from "@/src/components/form/HTInput";
import HTSelect from "@/src/components/form/HTSelect";
import styles from "../editor.module.css";


import JoditEditor from "jodit-react";
import { HTModal } from "@/src/components/modals/HTModal";



export default function CreatePost() {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const router = useRouter();

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess,
  } = useCreatePost();



  // Eidtor 
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { user } = useUser();
  // const [imgURL, setImgURL] = useState("");


  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    const postData = {
      ...data,
      author: user?._id,
      tags: [data?.tags],
      content
    }
    
    console.log(postData)
    handleCreatePost(postData)
  };

  const categoryOptions = categories.map((category) => ({
    label: category.name,
    key: category.name,
  }));

  const tagOptions = tags.map((tag) => ({
    label: tag.name,
    key: tag.name,
  }));

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
    router.push("/");
  }

  return (
    <>
      <HTModal buttonClassName="bg-primaryColor" buttonText="Write post" title="Create post">

      {createPostPending && <Loading />}
      <div className="h-full rounded-xl py-12">
        <h1 className="text-2xl font-semibold">Post a found item</h1>
        <Divider className="mb-5 mt-3" />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <HTInput
                className="!border-none !outline-none text-3xl"
                label="Title" name="title" />
              </div>
            </div>
            <div className=" space-y-3 md:space-y-0 md:flex flex-wrap gap-2 py-6 ">
              <div className="min-w-fit flex-1">
                <HTSelect
                  // disabled={!categorySuccess}
                  label="Category"
                  name="category"
                  options={categoryOptions}
                />
              </div>
              <div className="min-w-fit flex-1">
                <HTSelect
                  // disabled={!categorySuccess}
                  label="Tags"
                  name="tags"
                  options={tagOptions}
                />
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
              ref={editor}
              className={`dark:!bg-[red] text-black ${styles.joditEditor}`} // Add your custom CSS class here if needed
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />

            <div className="flex justify-end gap-5">
              {methods.getValues("description") && (
                <Button onClick={() => methods.resetField("description")}>
                  Clear
                </Button>
              )}
            </div>

            <Divider className="my-5" />

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

const categories = [
  {
    _id: "66faace67e7f2071b0bca63e",
    name: "Technology",
    description:
      "Posts related to the latest advancements and news in technology.",
    isDeleted: false,
    createdAt: "2024-09-30T13:51:34.947+00:00",
    updatedAt: "2024-09-30T13:51:34.947+00:00",
    __v: 0,
  },
  {
    _id: "66faace67e7f2071b0bca63f",
    name: "Health",
    description: "Insights and updates on health and wellness topics.",
    isDeleted: false,
    createdAt: "2024-09-30T13:51:34.947+00:00",
    updatedAt: "2024-09-30T13:51:34.947+00:00",
    __v: 0,
  },
  {
    _id: "66faace67e7f2071b0bca640",
    name: "Travel",
    description: "Experiences and tips for travel enthusiasts.",
    isDeleted: false,
    createdAt: "2024-09-30T13:51:34.947+00:00",
    updatedAt: "2024-09-30T13:51:34.947+00:00",
    __v: 0,
  },
];

const tags = [
  {
    _id: "66faace67e7f2071b0bca63e",
    name: "foood",
    description:
      "Posts related to the latest advancements and news in technology.",
    isDeleted: false,
    createdAt: "2024-09-30T13:51:34.947+00:00",
    updatedAt: "2024-09-30T13:51:34.947+00:00",
    __v: 0,
  },
  {
    _id: "66faace67e7f2071b0bca63f",
    name: "Health",
    description: "Insights and updates on health and wellness topics.",
    isDeleted: false,
    createdAt: "2024-09-30T13:51:34.947+00:00",
    updatedAt: "2024-09-30T13:51:34.947+00:00",
    __v: 0,
  },
  {
    _id: "66faace67e7f2071b0bca640",
    name: "Travel",
    description: "Experiences and tips for travel enthusiasts.",
    isDeleted: false,
    createdAt: "2024-09-30T13:51:34.947+00:00",
    updatedAt: "2024-09-30T13:51:34.947+00:00",
    __v: 0,
  },
];
