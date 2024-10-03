"use client";

import {
  Bookmark,
  DislikeIcon,
  EyeIcon,
  LikeIcon,
  MessageCircle,
  MoreIcon,
} from "@/src/components/icons";
import { useGetSinglePost } from "@/src/hooks/post.hook";
import Image from "next/image";
import React, { useState } from "react";
import Comment from "./_components/Comment";

const BlogPost = ({ params }: { params: { id: string } }) => {
  const postId = params?.id;
  const { data } = useGetSinglePost(postId);
  const [showComment, setShowComment] = useState(false);

  const {
    title,
    images,
    content,
    author,
    upvotes,
    downvotes,
    views,
    comments,
  } = data?.data || { content: "", author: { profilePhoto: "" }, images: [""] };

  // Toggle showComment state
  const handleCommentToggle = () => {
    setShowComment((prev) => !prev);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 pt-20 text-default-900">
      {/* Title Section */}
      <div className="space-y-4 mb-6">
        <h1 className="text-4xl font-bold text-default-900">{title}</h1>
      </div>

      {/* Author and Meta Info */}
      <div className="flex items-center space-x-4 mb-8">
        <Image
          width={200}
          height={200}
          src={author?.profilePhoto}
          alt="Author"
          className="w-12 h-12 rounded-full"
        />
        <div className="text-sm">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-default-900">{author?.username}</p>
            <p className="text-[#4572D3]">Follow</p>
          </div>
          <p className="text-default-500">
            Published in Code Like A Girl · 5 min read · Sep 26, 2024
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6 text-default-800">
        <div
          className="text-lg text-default-600"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        <Image
          width={200}
          height={200}
          src={images[0]}
          alt="Post Image"
          className="w-full h-full"
        />

        <p>
          I am sharing my journey of preparing for DSA interviews and how it
          shaped my career trajectory.
        </p>
      </div>

      {/* Reactions Section */}
      <div className="flex items-center mt-8 space-x-6 text-default-500">
        <div className="flex items-center space-x-1">
          <span className="material-icons">favorite</span>
          <span>753</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="material-icons">chat_bubble_outline</span>
          <span>11</span>
        </div>
      </div>

      {/* Interaction Section */}
      <div>
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

        <div className="flex gap-6 pt-4">
          <div className="flex items-center gap-3 text-default-500 cursor-pointer hover:text-white transition500">
            <EyeIcon className="w-4 h-4" />
            <span>{views}</span>
          </div>

          {/* Comment Section Toggle */}
          <div
            className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500"
            onClick={handleCommentToggle}
          >
            <MessageCircle className="w-4 h-4" />
            <span>{comments}</span>
          </div>

          {/* Show or hide the comment component based on showComment */}
          <Comment {...{ setShowComment, postId, showComment }} />

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
    </div>
  );
};

export default BlogPost;