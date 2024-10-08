"use client";

import not_found_image from "@/src/assets/images/general/404.png"

export default function Landing() {
  const { user, isLoading: isUserLoading } = useUser();
  const params = useSearchParams();
  const category = params.get("category");
  const { data, isLoading } = useGetAllPosts(`${category}`);
  const allPosts = data?.data || [];

  return (
    <>
      <div>
        {/* Handle user loading state */}
        {isUserLoading ? (
          <HomeLayoutSkeleton />
        ) : !user ? (
          <LoginDemo />
        ) : (
          <>
            <Container>
              <main className="md:flex max-w-6xl mx-auto w-full gap-4 relative">
                <section className="md:w-[65%] relative min-h-screen">
                  <Category /> {/* Static content */}
                  {isLoading ? (
                    <PostHorizontalSkeleton /> // Only the post section will show a skeleton
                  ) : allPosts.length > 0 ? (
                    allPosts.map((post: IPost) => (
                      <Post key={post._id} post={post} />
                    ))
                  ) : (
                    <Image className="dark:opacity-30 ml-20 -mt-8" width={500} height={500} alt="404" src={not_found_image}/>
                  )}
                </section>

                {/* Static aside content like StaffPicks remains outside of isLoading */}
                <aside className="hidden md:block border-l border-default-100 p-4 w-[35%] min-h-screen h-screen sticky top-8">
                  <div className="py-2">
                    <h2 className="text-3xl font-bold">Top Picks</h2>
                    <p className="pt-3 text-default-700">
                      Handpicked content just for you. These articles are making
                      waves and are highly recommended by our experts.
                    </p>

                    <StaffPicks />
                  </div>
                </aside>
              </main>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

// Import dependencies
import StaffPicks from "./_components/StaffPicks";
import { Post } from "./_components/Post";
import { PostHorizontalSkeleton } from "@/src/app/(WithCommonLayout)/(home)/post/[id]/_components/PostSkeleton";
import { IPost } from "@/src/types";
import Category from "./_components/Tags";
import Container from "../../UI/wrapper/Container";
import HomeLayoutSkeleton from "@/src/app/(WithCommonLayout)/(home)/post/[id]/_components/homeLayoutSkeleton";
import LoginDemo from "./_components/LoginDemo";
import { useUser } from "@/src/context/user.provider";
import { useSearchParams } from "next/navigation";
import { useGetAllPosts } from "@/src/hooks/post.hook";
import { useEffect, useState } from "react";import Image from "next/image";

