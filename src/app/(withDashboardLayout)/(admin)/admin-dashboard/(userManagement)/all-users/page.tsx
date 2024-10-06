"use client"

// AllUsers.tsx
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from "@nextui-org/react";
import TableSkeleton from "@/src/components/skeleton/TableSkeleton";
import { useGetAllUsers } from "@/src/hooks/admin.analytics.hook";
import ThreeDotMenu from "./_components/ThreeDotMenu";
  

export default function AllUsers() {
  const { data, isLoading } = useGetAllUsers();

  if (isLoading) return <TableSkeleton />;

  const users: any[] = data?.data ?? [];

  if (users.length === 0) {
    return <p>No users available</p>;
  }

  return (
    <div className="!min-h-screen">
      <Table aria-label="Users Table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Profile Photo</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn align="center">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>
                <Image
                  alt={user.username}
                  src={user.profilePhoto}
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <ThreeDotMenu userId={user._id} /> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}