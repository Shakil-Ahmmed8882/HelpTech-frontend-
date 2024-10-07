"use client";

// AllPosts.tsx
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Image,
} from "@nextui-org/react";
import TableSkeleton from "@/src/components/skeleton/TableSkeleton";
import { useGetAllPosts } from "@/src/hooks/post.hook";

import { IPost } from "@/src/types";
import DeletePost from "./_components/DeletePost";


// Main AllPosts Component
export default function AllPosts() {
  const { data, isLoading } = useGetAllPosts("all");

  if (isLoading) return <TableSkeleton />;

  const posts = data?.data ?? [];

  if (posts.length === 0) {
    return <p>No posts available</p>;
  }

  console.log(posts);

  return (
    <div className="!min-h-screen px-4">
      <Table aria-label="Posts Table">
        <TableHeader>
          <TableColumn>Post Image</TableColumn>
          <TableColumn>Title</TableColumn>
          <TableColumn>Author Image</TableColumn>
          <TableColumn>Author Name</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {posts.map((post: IPost) => (
            <TableRow key={post._id}>
              <TableCell>
                {post.images?.[0] && (
                  <Image
                    alt={post?.title}
                    src={post?.images[0]}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                )}
              </TableCell>
              <TableCell>{post.title}</TableCell>

              {/* Author Image */}
              <TableCell>
                {post.author?.profilePhoto && (
                  <Image
                    alt={post.author.username}
                    src={post.author.profilePhoto}
                    width={50}
                    height={50}
                    className="object-cover rounded-full"
                  />
                )}
              </TableCell>
              <TableCell>{post?.author?.username}</TableCell>
              <TableCell>{post.category}</TableCell>

              {/* Table action  */}
              <TableCell className="flex gap-3">
                
                <DeletePost postId={post?._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
