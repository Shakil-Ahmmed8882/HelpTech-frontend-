"use client";

import React from "react";
import Image from "next/image";
import { useGetUserActionCounts } from "@/src/hooks/user.analytics.hook";
import DashboardCardSkeleton from "./(post-management)/my-posts/_components/CardSkeleton";

// Content Analytics: Show share counts, reaction counts, comment counts and views counts on the User Dashboard for the overall posts.

const UserDashboard = () => {
  const { data,isLoading, isPending } = useGetUserActionCounts();

  // Assuming data has an array of actions
  const userActions = data?.data || [];

  return (
    <div className="p-6 min-h-screen text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Welcome and Go Now Section */}
        <div className="!bg-primaryColor text-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome back 👋</h2>
            <h3 className="text-3xl font-bold mt-2">HOLAGO</h3>
            <p className="mt-4 text-white">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </p>
          </div>
          <button className="text-[#121212] mt-8 block ml-auto  bg-white py-2 px-4 w-max rounded-xl font-medium">
            Go Now
          </button>
        </div>

        {/* Update Section */}
        <div className="bg-gradient-to-b dark:from-[#000000] to-[#fff] p-6 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <p className="text-default-400 font-semibold">NEW V6 UPDATE</p>
            <h2 className="text-2xl text-default-900 font-bold mt-2">
              New update available!
            </h2>
            <p className="mt-4 text-gray-400">
              Your favorite template has a new trendy look, more customization
              options.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              width={60}
              height={60}
              src={`https://img.icons8.com/?size=48&id=j1qo6zal0qNk&format=png`}
              alt=""
              className="rounded-xl mt-4"
            />
            <h3 className="text-default-600 text-xl">Do not miss!</h3>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      {
        isLoading  ? <><DashboardCardSkeleton/></>: <>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {userActions?.map((action) => (
          <Statistics key={action.type} action={action} />
        ))}
      </div>
        </>
      }
    </div>
  );
};

export default UserDashboard;

interface ActionType {
  type: string;
  count: number;
}

const Statistics = ({ action }: { action: ActionType }) => {
  return (
    <div className="bg-gradient-to-b dark:from-[#000000] to-[#fff] p-4 rounded-xl text-center">
    <h3 className="text-sm text-default-900">{action.type}</h3>
    <p className="text-4xl font-bold my-4 text-default-900">{action.count}</p>
    <p className="text-green-500 text-sm mt-1">+2.6%</p>
  </div>
  );
};