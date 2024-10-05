"use client";

import { CloseIcon } from "@/src/assets/icons";
import HTForm from "@/src/components/form/HTForm";
import HTInput from "@/src/components/form/HTInput";
import HTSelect from "@/src/components/form/HTSelect";
import HTTextarea from "@/src/components/form/HTTextarea";
import { useUser } from "@/src/context/user.provider";
import { useUpdateUserInfo } from "@/src/hooks/auth.hook";
import { useUpdatePosts } from "@/src/hooks/post.hook";
import { uploadToImageBB } from "@/src/utils/uploadImage";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

// Define the props interface
interface EditPostProps {
  postId?: string | null;
  onClose: (param: boolean) => void;
}

const EditPost: React.FC<EditPostProps> = ({ postId, onClose }) => {
  const { user } = useUser();
  const { mutate: handleUpdatePost, data: postUpdatedData } = useUpdatePosts();
  const handleEditPost: SubmitHandler<FieldValues> = async (data) => {
    
    const imageUrl = await uploadToImageBB(data.file[0]);
    delete data!.file;
    const postData = {
      ...data,
      tags:[data.tags],
      images: [imageUrl],
    };

    try {
      handleUpdatePost({ id: postId as string, postData });

      onClose(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-default-100 rounded-lg relative  shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-default-200 pb-8">
          Edit post
        </h1>
        <HTForm onSubmit={handleEditPost}>
          <div className="md:flex gap-6 items-center space-y-6 md:space-y-0">
            <HTInput name="title" label="Title" />
            <HTInput name="file" label="image" type="file" />
          </div>
          <div className="md:flex gap-6 items-center pt-5 space-y-6 md:space-y-0">
            <div className="min-w-fit flex-1">
              <HTSelect
                label="Category"
                name="category"
                options={categoryOptions}
              />
            </div>
            <div className="min-w-fit flex-1">
              <HTSelect label="Tags" name="tags" options={tagOptions} />
            </div>
          </div>
          <div className="min-w-fit flex-1">
            <HTTextarea label="Content" name="content" />
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
        <CloseIcon
          onClick={() => onClose(false)}
          className="absolute top-6 right-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EditPost;

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
