"use client";

import {
  Bookmark,
  EyeIcon,
  MessageCircle,
  MoreIcon,
} from "@/src/components/icons";
import { useGetSinglePost } from "@/src/hooks/post.hook";
import Image from "next/image";
import React, { useState } from "react";
import Comment from "./_components/Comment";
import PostSkeleton from "./_components/PostSkeleton";
import Container from "@/src/components/UI/Container";
import Vote from "./_components/Vote";
import { postFallBack } from "./_components/constant";
import badge from "@/src/assets/images/icons/badge.png";
import { useUser } from "@/src/context/user.provider";
import FollowAndProfile from "./_components/FollowAndProfile";

const BlogPost = ({ params }: { params: { id: string } }) => {
  const postId = params?.id;
  const { data, isLoading,refetch,isPending:isPostPending } = useGetSinglePost(postId);
  const [showComment, setShowComment] = useState(false);
  const {user} = useUser()

  const {
    title,
    images,
    content,
    author,
    upvotes,
    downvotes,
    views,
    comments,
  } = data?.data || postFallBack

  
  

  // Toggle showComment state
  const handleCommentToggle = () => {
    setShowComment((prev) => !prev);
  };

  return (
    <Container>
      {isLoading && isPostPending? (
        <PostSkeleton />
      ) : (
        <>
          <div className="max-w-3xl mx-auto p-4 pt-20 text-default-900">
            {/* Title Section */}
            <div className="space-y-4 mb-6">
              <h1 className="text-4xl font-bold text-default-900">{title}</h1>
            </div>

            {/* Author and Meta Info */}
            <div className="flex items-center space-x-4 mb-8">
              <Image
                alt="Author"
                className="w-12 h-12 rounded-full"
                height={200}
                src={author?.profilePhoto}
                width={200}
              />
              <div className="text-sm">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-default-900">
                    {author?.username}
                  </p>
                  {
                    upvotes > 0 &&  <Image
                    alt="Author"
                    className="size-4 rounded-full"
                    height={20}
                    src={badge}
                    width={20}
                   />
                  }
                     <FollowAndProfile {...{author, user}}/>
                </div>
                <p className="text-default-500 pt-2">
                  Published in Code Like A Girl. 5 min read <br/> Sep 26, 2024
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-default-800">
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="text-lg text-default-600"
              />

              <Image
                alt="Post Image"
                className="w-full h-full"
                height={200}
                src={images[0]}
                width={200}
              />

              <p>
                I am sharing my journey of preparing for DSA interviews and how
                it shaped my career trajectory.
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
                  role="button"
                  tabIndex={0}
                  onClick={handleCommentToggle} 
                  onKeyDown={(e) => e.key === "Enter" && handleCommentToggle()} // Enable keyboard interaction
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{comments}</span>
                </div>

                {/* Show or hide the comment component based on showComment */}
                <Comment {...{ setShowComment, postId, showComment }} />

                <Vote {...{postId, upvotes,downvotes, refetch}}/>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default BlogPost;
