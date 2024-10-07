"use client";

import { PostHorizontalSkeleton } from "@/src/app/(WithCommonLayout)/(home)/post/[id]/_components/PostSkeleton";
import { Post } from "@/src/components/modules/home/_components/Post";
import Category from "@/src/components/modules/home/_components/Tags";
import { useUser } from "@/src/context/user.provider";
import { useGetAllPosts } from "@/src/hooks/post.hook";
import { IPost } from "@/src/types";
import { useSearchParams } from "next/navigation";

const NewsfeedPage = () => {
  const { data, isLoading } = useGetAllPosts(`all`);
  const allPosts = data?.data || [];

  return (
    <section>
      <section className="w-[80%] mt-11 mx-auto relative min-h-screen">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-[40px] md:leading-[55px]">
        Unlock Cutting-Edge Tech Knowledge <span className="text-primaryColor">Help Tech</span>
        </h1>
        <p className="text-default-600 pb-8 pt-4 md:w-[70%] text-sm md:text-lg">
          Discover insightful tech tips, tutorials, and industry news to keep
          you ahead in the fast-paced world of technology.
        </p>

        {isLoading ? (
          <PostHorizontalSkeleton />
        ) : (
          allPosts?.map((post: IPost) => (
            <div
              key={post._id}
              className=" my-3 p-4 rounded-lg bg-gradient-to-b dark:from-[#000000] to-[#fff]  "
            >
              <Post post={post} />
            </div>
          ))
        )}
      </section>
    </section>
  );
};

export default NewsfeedPage;
