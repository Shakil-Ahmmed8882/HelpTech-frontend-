"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/src/context/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import Image from "next/image";
import badge from "@/src/assets/images/icons/badge.png";
import FollowersAndPost from "@/src/app/(withDashboardLayout)/(user)/user-dashboard/profile/_components/FollowersAndPost";
import star from "@/src/assets/images/icons/star.png";


export default function Profile() {
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);

  // Ensure this component runs only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 

  return (
    <div className="w-full p-4 ">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mountain landscape"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          <Avatar
            src={user?.profilePhoto}
            className="w-24 relative h-24 border-4 border-white"
          >
          </Avatar>
          
        </div>
      </div>
      <div className="p-4 pt-16">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-xl font-bold">{user?.username}</h1>
              
                 <Image className="size-5" src={badge} alt="blue tick" />
              
              
              {
                user && user.isPremiumUser && 
              <>
              <Image width={100} height={100} className="w-6 h-6" alt="premiumBadge" src={star} />
              <PremiumUserBadge/>
              </>
              }
            </div>
            <p className="text-sm text-gray-500">@{user?.username}</p>
          </div>
          <Button>Notifications</Button>
        </div>
        <FollowersAndPost id={user?._id || ""} />
        <Card className="my-10 bg-transparent">
          <CardHeader className="pb-6 pt-3">
            <h2 className="text-lg font-semibold">What are you thinking?</h2>
          </CardHeader>
          <div>
            <Textarea className="" placeholder="Dream interpretation has many forms..." />
            <div className="flex  items-center mt-5">
              <Button className="bg-primaryColor text-white">Post</Button>
            </div>
          </div>
        </Card>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Who to Follow</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Chinmay Sarasvati"
                  />
                </Avatar>
                <div>
                  <p className="font-semibold">Chinmay Sarasvati</p>
                  <p className="text-sm text-gray-500">@ChinmayS</p>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
          </div>
        </div>
        <Card className="mt-4">
          <div className="p-4">
            <div className="flex items-start space-x-2">
              <Avatar>
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Chinmay Sarasvati"
                />
              </Avatar>
              <div>
                <div className="flex items-center space-x-1">
                  <p className="font-semibold">Chinmay Sarasvati</p>
                  {/* <Badge variant="secondary" className="text-xs">12min</Badge> */}
                </div>
                <p className="text-sm text-gray-500">@ChinmayS</p>
                <p className="mt-1">
                  Dream big Dream long, if its dull or uninteresting...
                </p>
                <div className="flex space-x-4 mt-2 text-gray-500">
                  <button className="flex items-center space-x-1">
                    <span className="text-xs">Reply</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <span className="text-xs">Retweet</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <span className="text-xs">Like</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}



export const PremiumUserBadge = () => {
  return (
    <p className=" p-[5px] px-4 bg-[#fec61e29] text-[#fec61e] text-sm   rounded-full">Premium</p>
  )
}