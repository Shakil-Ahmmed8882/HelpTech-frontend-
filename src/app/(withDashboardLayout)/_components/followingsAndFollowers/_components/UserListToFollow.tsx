

const SuggestedUsersToFollow: React.FC<SuggestedUsersToFollowProps> = ({ followingList, toggleFollow }) => {
  // State and context hooks
  const { data, isLoading } = useGetAllUsers();
  const { user } = useUser();
  const currentUserId = user?.userId;

  // State to manage suggested users and followed users
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [followedUsers, setFollowedUsers] = useState<Set<string>>(new Set());

  // Fetch and filter users when data changes
  useEffect(() => {
    if (data?.data) {
      const users: User[] = data.data;
      const filteredUsers = users.filter(individualUser => individualUser._id !== currentUserId);
      setSuggestedUsers(filteredUsers);
    }
  }, [data, currentUserId]);

  // Function to handle follow action
  const handleFollow = (userId: string, username: string) => {
    toggleFollow({ type: "follow", id: userId });
    setFollowedUsers(prev => new Set(prev).add(username));
  };

  // Loading and empty state handling
  if (isLoading) {
    return <FollowSkeleton/>
  }

  if (suggestedUsers.length === 0) {
    return <p>No suggested users to follow.</p>;
  }

  return (
    <div className="w-full md:w-4/5 mx-auto">
      <h3 className="text-2xl font-semibold my-4 pb-5">Suggested Users to Follow</h3>
      <ul>
        {suggestedUsers.map(user => {
          const isFollowing = followedUsers.has(user.username) || followingList.some(follow => follow.name === user.username);

          return (
            <li key={user._id} className="flex my-4 bg-white shadow-sm dark:bg-[#191919] p-5 px-3 rounded-lg items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={user.profilePhoto} alt={user.username} className="w-10 h-10 rounded-full mr-2" />
                <span className="font-semibold">{user.username}</span>
              </div>
              <button
                onClick={() => !isFollowing && handleFollow(user._id, user.username)}
                disabled={isFollowing}
                className={`rounded px-2 py-1 text-xs ${isFollowing ? 'bg-gray-400  text-white cursor-not-allowed' : 'bg-blue-500 text-white'}`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SuggestedUsersToFollow;




// Import statements are at the bottom

import React, { useState, useEffect } from "react";
import { useGetAllUsers } from "@/src/hooks/admin.analytics.hook";
import { useUser } from "@/src/context/user.provider";
import { Skeleton } from "@nextui-org/skeleton";
import FollowSkeleton from "./FollowSkeleton";

// User interface definition
interface User {
  _id: string;
  username: string;
  profilePhoto: string;
}

// Props interface definition for the SuggestedUsersToFollow component
interface SuggestedUsersToFollowProps {
  followingList: Array<{
    id: string;
    name: string; // Username
    friends: string;
    profilePhoto: string;
    isFollowing: boolean;
  }>;
  toggleFollow: (payload: { type: string; id: string }) => void;
}


