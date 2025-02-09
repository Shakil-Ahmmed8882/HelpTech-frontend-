"use client";

import React  from "react";
import { Tabs, Tab, Card, CardBody, Button, Avatar, Divider } from "@nextui-org/react";
import { useAddFollows, useGetAllFollowersOfSingleUser, useGetAllFollowingsOfSingleUser, useIsFollowing, useUnfollow } from "@/src/hooks/follows.hook";
import { useUser } from "@/src/context/user.provider";
import FollowSkeleton from "./FollowSkeleton";
import UserListToFollow from "./_components/UserListToFollow";
import SuggestedUsersToFollow from "./_components/UserListToFollow";




export default function FollowingsAndFollowers() {
  const  {user} = useUser()
  const { data:followersData, isLoading:isfollowersLoading,refetch } = useGetAllFollowersOfSingleUser(user!?._id);
  const { data:followingsData, isLoading:isFollowingsLoading,refetch:followingDataRefetch } = useGetAllFollowingsOfSingleUser(user!?._id);
  const { mutate: addFollow } = useAddFollows();
  const { mutate: unFollow } = useUnfollow();
  


  if(isfollowersLoading && isFollowingsLoading) return <FollowSkeleton/>



  const followersArray = followersData?.data?.map((followerData:any) => ({
    id: followerData?.follower?._id,
    name: followerData?.follower?.username,
    friends: "9 Friends",
    profilePhoto: followerData?.follower?.profilePhoto,
    // follower: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    // following: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // in my follwers list, any of user  I also follow or not
    isFollowing: followingsData?.data?.some(
      (following: any) => following.following?._id === followerData?.follower?._id
    ), 

  }))

  
  
  // all followings
  const followingsArray = followingsData?.data?.map((followingData:any) => ({
    id: followingData?.following?._id,
    name: followingData?.following?.username,
    friends: "9 Friends",
    profilePhoto: followingData?.following?.profilePhoto,
    // follower: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    // following: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // in my followings list, any of user  follow me or not 
    isFollowing:  followersData?.data?.some(
      (follower: any) => follower.follower?._id === followingData?.following?._id
    ), 
  }))


  // Toggle follow/unfollow state
  const toggleFollow = ({ type, id, follow_id }: { type: string; id: string; follow_id?: string }) => {
    const followData = {
      follower: user?._id, 
      following: id,
    };
  
    try {
      if (type === "follow") {
        refetch()

        addFollow(followData); 
      } else if (type === "unfollow") {
        
        followingDataRefetch()
        unFollow(follow_id as string)
        
        
      }
    } catch (error) {
      console.error("Error in toggleFollow:", error);
    }
  };
  
  
  


  return (
    <div className="flex flex-col px-4 pt-20">
      <div className="flex w-full md:w-4/5 mx-auto flex-col">
        <Tabs aria-label="Followers and Followings" className="flex justify-center gap-8">
          {/* Followers Tab */}
          <Tab key="followers" title="Followers">
            <Card className="!bg-transparent !shadow-none">
              <CardBody>
                <h3 className="text-xl font-semibold mb-8 mt-8">Followers</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {followersArray.map((follower:any) => (
                    <li key={follower.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar src={follower.profilePhoto} alt={follower.name} size="lg" />
                        <div>
                          <h4 className="font-semibold">{follower.name}</h4>
                          <p className="text-sm text-gray-500">{follower.friends}</p>
                        </div>
                      </div>
                      <Button
                        color={follower.isFollowing?"danger":"primary"}
                        className="rounded-full text-xs"
                        onPress={() => toggleFollow({type:"follow",id:follower.id})}
                      >
                        {follower.isFollowing?"Following":"Follow"}
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Tab>

          {/* Followings Tab */}
          <Tab key="followings" title="Followings">
            <Card className="!bg-transparent !shadow-none">
              <CardBody>
                <h3 className="text-xl font-semibold my-8">Followings</h3>
                <ul className=" grid md:grid-cols-2 gap-4">
                  {followingsArray?.map((following:any, index:number) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar src={following.profilePhoto} alt={following.name} size="lg" />
                        <div>
                          <h4 className="font-semibold">{following.name}</h4>
                          <p className="text-sm text-gray-500">{following.friends}</p>
                        </div>
                      </div>
                      <Button
                        color={"danger"}
                        className="rounded-full text-xs"
                        // in nested [{data:_id{follower, following}}] to get the id in loop of following 
                        // just target that array by index and get the _id to unfollow from follo collection
                        onPress={() => toggleFollow({type:"unfollow",id:following.id, follow_id: followingsData?.data[index]?._id})} 
                      >
                        Unfollow
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <Divider className="mt-32"/>
      <SuggestedUsersToFollow followingList={followingsArray || []} toggleFollow={toggleFollow} />


    </div>
  );
}



