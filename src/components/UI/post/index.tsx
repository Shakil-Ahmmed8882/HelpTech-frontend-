"use client";

import { IPost, IUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import ImageGallery from "./ImageGallery";
import ClaimRequestModal from "../../modals/ClaimRequestModal";
import { useUser } from "@/src/context/user.provider";
import AuthenticationModal from "../../modals/AuthenticationModal";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Post = ({ post }: { post: IPost }) => {
  const {
    title,
    description,
    dateFound,
    location,
    city,
    _id,
    images,
    user,
    questions,
    category
  } = post || {};
  const { name, email, profilePhoto } = user as IUser;
  const { user: loggedInUser } = useUser();

  return (
    <article className="bg-default-50 p-8 rounded my-2">
      <div className="flex gap-3 items-centefr my-8">
        <div>
          <Avatar src={profilePhoto} />
        </div>
        <article>
          <h2 className="font-bold pb-2">{name}</h2>
          <p className="text-default-500">{email}</p>
          <p className="text-default-500 mt-2">{dateFound}</p>
        </article>
      </div>
      <div>
        <h1 className="text-3xl">{title}</h1>
        <p className="text-default-700 pb-3">{category.name}</p>
        <ImageGallery images={images} />
      </div>
      <div className="flex gap-3 py-3">
        {email !== loggedInUser?.email && (
          <>
            {loggedInUser?.email && (
              <ClaimRequestModal id={_id} questions={questions} />
            )}

            {!loggedInUser?.email && <AuthenticationModal id={_id} />}
          </>
        )}
        <Button className="flex-1" onClick={(e) => e.stopPropagation()}>
          Share
        </Button>
      </div>
    </article>
  );
};

export default Post;
