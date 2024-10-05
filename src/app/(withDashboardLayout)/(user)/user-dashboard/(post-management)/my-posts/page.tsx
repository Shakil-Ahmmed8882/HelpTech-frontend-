
"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Image,
} from "@nextui-org/react";

import { useDeletePost, useGetAllOfMyPosts } from "@/src/hooks/post.hook";
import { PostType } from "@/src/types/post.type";
import TableSkeleton from "@/src/components/skeleton/TableSkeleton";
import EditPost from "@/src/app/(withDashboardLayout)/_components/EditPost";
import { DeletePostModal } from "@/src/app/(withDashboardLayout)/_components/DeletePost";

// Main PostTable Component
export default function MyPosts() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Track delete modal open/close
  const { mutate: DeletePost, data: postDeletedResponseData } = useDeletePost();
  // Fetching posts data from the backend
  const { data, isLoading, refetch } = useGetAllOfMyPosts();

  if (isLoading) return <TableSkeleton />;

  // Delete handler
  const handleDelete = (id: string) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };

  // confirm delete
  const confirmDelete = (postId: string) => {
    DeletePost(postId);
    refetch()
  };

  // Edit handler
  const handleEdit = (id: string) => {
    setSelectedId(id);
    setIsEditing(true);
    
  };

  // Destructure all my posts data safely
  const posts: PostType[] = data?.data ?? [];

  // If no posts are available
  if (posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <div>
      <Table aria-label="Posts Table">
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn align="center">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post._id}>
              <TableCell>
                {renderCell(post, "title", handleEdit, handleDelete)}
              </TableCell>
              <TableCell>
                {renderCell(post, "images", handleEdit, handleDelete)}
              </TableCell>
              <TableCell>
                {renderCell(post, "category", handleEdit, handleDelete)}
              </TableCell>
              <TableCell>
                {renderCell(post, "actions", handleEdit, handleDelete)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Conditionally render the EditForm component */}
      {isEditing && <EditPost postId={selectedId} onClose={setIsEditing} />}

      {/* Conditionally render the DeleteModal component */}
      {isDeleteModalOpen && (
        <DeletePostModal
          title="Delete Post"
          postId={selectedId as string}
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          onConfirmDelete={confirmDelete}
        />
      )}
    </div>
  );
}

// Cell Renderer function to keep render logic separate
const renderCell = (
  post: PostType,
  columnKey: keyof PostType | "actions",
  onEdit: (id: string) => void,
  onDelete: (id: string) => void
) => {
  switch (columnKey) {
    case "title":
      return post.title;
    case "images":
      return (
        <Image
          alt={post.title}
          src={post.images[0]}
          width={50}
          height={50}
          className="object-cover"
        />
      );
    case "category":
      return post.category;
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit">
            <span
              className="text-lg text-default-400 cursor-pointer active:opacity-50"
              onClick={() => onEdit(post._id)}
            >
              ✏️
            </span>
          </Tooltip>
          <Tooltip content="Delete">
            <span
              className="text-lg text-danger cursor-pointer active:opacity-50"
              onClick={() => onDelete(post._id)}
            >
              🗑️
            </span>
          </Tooltip>
        </div>
      );
    default:
      return null;
  }
};
