"use client";
import {
  Bookmark,
  DislikeIcon,
  EyeIcon,
  LikeIcon,
  MessageCircle,
  MoreIcon,
} from "../../icons";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";

export default function Landing() {
  
  const { data, isLoading } = useGetAllPosts();
  const allPosts = data?.data;
  


  return (
    <>
      {isLoading ? (
        <PostHorizontalSkeleton />
      ) : (
        <>
          <div>
            <main className="md:flex max-w-6xl mx-auto w-full gap-4 relative">
              <section className="md:w-[65%] relative min-h-screen">
              <Category/>
                {allPosts?.map((post: IPost) => (
                  <Post key={post._id} post={post} />
                ))}
              </section>
              <aside className="hidden md:block border-l border-default-100 p-4 w-[35%] min-h-screen sticky top-0 self-start">
                <div className="py-2">
                  <h2 className="text-3xl font-bold">Trending</h2>
                  <p className="pt-3 text-default-700">
                    {" "}
                    adipisicing elit. Velit nulla excepturi illum a reiciendis.
                    Neque quia odio ipsam? Porro repellendus expedita voluptates
                    quia quod omnis aspernatur mollitia animi accusantium quo?
                  </p>

                  <StaffPicks />
                </div>
              </aside>
            </main>
          </div>
        </>
      )}
    </>
  );
}

import Image from "next/image";
import { Card, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";

export function Post({ post }: { post: IPost }) {
  const {
    _id,
    title,
    category,
    author,
    content,
    upvotes,
    downvotes,
    isPremium,
    views,
    pdfVersion,
    isDeleted,
    images,
    comments,
  } = post || {};

  return (
    <Link href={`/post/${_id}`}>
      <Card className="shadow-none bg-transparent p-0 pb-20 ">
        <CardHeader className="flex flex-row items-center gap-4 !pb-7 p-0">
          <Avatar className="w-8 h-8" src={author?.profilePhoto} />
          <div className="flex flex-col">
            <h2 className="text-md">{author?.username}</h2>
          </div>
        </CardHeader>
        <section className="flex flex-col-reverse sm:flex-row justify-between gap-3">
          <div className="space-y-4 md:w-2/3">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="text-default-500 text-lg"
             />

            <section className="flex justify-between items-center">
              <p className="text-sm text-default-500">1d ago</p>
              <div className="flex gap-2 pt-4">
                <div className="flex text-default-500 cursor-pointer hover:text-white transition500">
                  <Bookmark className="w-4 h-4 text-default-50" />
                  <span className="sr-only">Bookmark</span>
                </div>
                <div className="text-default-500 cursor-pointer hover:text-white transition500">
                  <MoreIcon className="w-4 h-4" />
                  <span className="sr-only">More options</span>
                </div>
              </div>
            </section>

            <div className="flex  gap-6 pt-4">
              <div className="flex items-center gap-3 text-default-500 cursor-pointer hover:text-white transition500">
                <EyeIcon className="w-4 h-4" />
                <span>101</span>
              </div>
              <div className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500">
                <MessageCircle className="w-4 h-4" />
                <span>{comments}</span>
              </div>
              <div className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500">
                <LikeIcon className="w-4 h-4" />
                <span>{upvotes}</span>
              </div>
              <div className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500">
                <DislikeIcon className="w-4 h-4" />
                <span>{downvotes}</span>
              </div>
            </div>
          </div>
          <figure className="md:w-1/3">
            <Image
              alt="blog"
              className="rounded w-full pb-5 sm:pb-0"
              height={500}
              src={images[0]}
              width={200}
            />
          </figure>
        </section>
      </Card>
    </Link>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import { useGetAllPosts } from "@/src/hooks/post.hook";
import { IPost } from "@/src/types";
import { PostHorizontalSkeleton } from "@/src/app/(WithCommonLayout)/(home)/post/[id]/_components/PostSkeleton";
import Category from "./_components/Tags";
import { useRouter, useSearchParams } from "next/navigation";



const StaffPicks = () => {
  return (
    <div className="w-full max-w-xs">
      {/* Staff Picks Heading */}
      <h3 className="text-2xl font-semibold text-default-800 mb-6 pt-8">
        Popular posts 🌟
      </h3>

      {/* First Post */}
      <div className="flex items-start mb-8">
        <div>
          <Avatar
            className="w-8 h-8 mr-3"
            src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
           />
        </div>
        <div>
          <p className="text-sm">
            <span className="font-bold">Neela</span> 🌙 🔮 in Psychology of
            Workplaces
          </p>
          <Link
            className="text-default-500 hover:underline pt-3 block "
            href="#"
          >
            How I Burned My Resume and Built a New Career
          </Link>
        </div>
      </div>

      <div className="flex items-start mb-8">
        <div>
          <Avatar
            className="w-8 h-8 mr-3"
            src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
           />
        </div>
        <div>
          <p className="text-sm">
            <span className="font-bold ">Alisa Wolf</span> 🌙 🔮 in Human Parts
          </p>
          <Link
            className="text-default-500 hover:underline pt-3 block "
            href="#"
          >
            Why I Stopped Boycotting Businesses and Cutting People Off Because
            of Their Political Views
          </Link>
        </div>
      </div>

      <div className="flex items-start mb-8">
        <div>
          <Avatar
            className="w-8 h-8 mr-3"
            src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
           />
        </div>
        <div>
          <p className="text-sm">
            <span className="font-bold ">The Medium Newsletter</span> 🌙 🔮
          </p>
          <Link
            className=" text-default-500 hover:underline pt-3 block "
            href="#"
          >
            “You don’t own a community; you influence, co-create and curate it.”
          </Link>
        </div>
      </div>

      {/* Full List Link */}
      <Link
        className="text-green-600 font-medium pl-11 block hover:underline"
        href="#"
      >
        See more..
      </Link>

      {/* Recommended Topics */}
      <h4 className="text-lg font-semibold text-default-800 mt-6 mb-3">
        Recommended topics
      </h4>
      <div className="flex space-x-2 py-2 pb-5">
        <Link
          className="bg-default-100 text-sm text-default-700 px-3 py-1 rounded-full hover:bg-default-200"
          href="#"
        >
          Equality
        </Link>
        <Link
          className="bg-default-100 text-sm text-default-700 px-3 py-1 rounded-full hover:bg-default-200"
          href="#"
        >
          Bitcoin
        </Link>
        {/* Add more tags as needed */}
      </div>

      <div>
        <main className="max-w-6xl mx-auto w-full gap-4 relative">
          {/* Main content section displaying posts */}
          <section className=" relative min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-6">Latest Tech Posts</h1>
            <div className="grid grid-cols-1 gap-6">
              {/* Loop through posts dynamically */}
              <div className="border-b border-default-200 pb-8">
                <h2 className="text-xl  font-semibold">
                  Understanding JavaScript Closures
                </h2>
                <p className="text-default-500 mt-4">
                  A deep dive into how closures work in JavaScript and their
                  real-world applications...
                </p>
                <Link className="text-blue-500 mt-4 block" href="#">
                  Read more →
                </Link>
              </div>
              <div className="border-b  border-default-200 pb-8">
                <h2 className="text-2xl font-semibold">
                  Getting Started with Tailwind CSS
                </h2>
                <p className="text-default-500 mt-4">
                  Learn how to quickly set up and use Tailwind CSS for
                  responsive web design...
                </p>
                <Link className="text-blue-500 mt-4 block" href="#">
                  Read more →
                </Link>
              </div>
              {/* Add more posts here */}
            </div>
          </section>

          {/* Sidebar with recommendations and trending tech tips */}
          <aside className="border-l border-[#373737] p-4  min-h-screen sticky top-0 self-start">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-default-800 mb-4">
                Recommended for You
              </h2>
              <div className="border-b border-default-200 pb-8">
                <h2 className="text-xl  font-semibold">
                  Understanding JavaScript Closures
                </h2>
                <p className="text-default-500 mt-4">
                  A deep dive into how closures work in JavaScript and their
                  real-world applications...
                </p>
                <Link className="text-blue-500 mt-4 block" href="#">
                  Read more →
                </Link>
              </div>
            </div>

            {/* Trending Topics Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-default-800 mb-4">
                Trending Tech Topics
              </h2>
              <ul className="space-y-4">
                <Link
                  className="text-default-500 pt-1 list-disc list block text-lg hover:underline"
                  href={"/"}
                >
                  5 VSCode Extensions Every Developer Should Use
                </Link>
                <Link
                  className="text-default-500 pt-1 list-disc list block text-lg hover:underline"
                  href={"/"}
                >
                  Web3: The Rise of Decentralized Web
                </Link>
                <Link
                  className="text-default-500 pt-1 list-disc list block text-lg hover:underline"
                  href={"/"}
                >
                  Best Practices for React State Management in 2024
                </Link>
              </ul>
            </div>

            {/* Newsletter Subscription Widget */}
            <div className="bg-default-50 shadow-sm p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-default-800 mb-4">
                Stay Updated
              </h3>
              <p className="text-sm text-default-600 mb-4 mt-2">
                Get the latest tech tips, tutorials, and news straight to your
                inbox!
              </p>
              <form>
                <input
                  className="w-full border border-default-300 p-2 rounded-lg mb-focus:outline-none focus:border-blue-500 mb-4"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="w-full text-white p-2 rounded-lg">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="bg-default-50 shadow-sm p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-default-800 mb-2">
                Follow Us
              </h3>
              <div className="flex space-x-4 flex-wrap">
                <Link href={"/"}>facebook</Link>
                <Link href={"/"}>Twitter</Link>
                <Link href={"/"}>IN</Link>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};
