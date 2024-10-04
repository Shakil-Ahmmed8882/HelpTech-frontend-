"use client"
import { useUser } from "@/src/context/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import badge from "@/src/assets/images/icons/badge.png";
import FollowersAndPost from "./_components/FollowersAndPost";



export default function Profile() {
    const {user} = useUser()
    // const dbStoredUser = 
  return (
    <div className="w-full p-4 ">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mountain landscape"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
          <Avatar src={user?.profilePhoto}  className="w-24 h-24 border-4 border-white"/>            
        </div>
      </div>
      <div className="p-4 pt-16">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex gap-2 items-center">
            <h1 className="text-xl font-bold">{user?.username}</h1>
             <Image className="size-5" src={badge} alt="blue tick"/>
            </div>
            <p className="text-sm text-gray-500">@{user?.username}</p>
          </div>
          <Button>Notifications</Button>
        </div>
       <FollowersAndPost id={user!._id}/>
        <Card className="mt-4">
          <CardHeader className="pb-2">
            <h2 className="text-lg font-semibold">What are you thinking?</h2>
          </CardHeader>
          <div>
            <Input placeholder="Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious them career. Psychologists, therapists are already angry a these" />
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-2">
                {/* <Badge variant="secondary">#DreamBig</Badge>
                <Badge variant="secondary">#SeriousCareer</Badge>
                <Badge variant="secondary">#LoveMyJob</Badge> */}
              </div>
              <Button>Tweet</Button>
            </div>
          </div>
        </Card>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Who to Follow</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <Image src="/placeholder.svg?height=40&width=40" alt="Chinmay Sarasvati" />
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
                <Image src="/placeholder.svg?height=40&width=40" alt="Chinmay Sarasvati" />
                
              </Avatar>
              <div>
                <div className="flex items-center space-x-1">
                  <p className="font-semibold">Chinmay Sarasvati</p>
                  {/* <Badge variant="secondary" className="text-xs">12min</Badge> */}
                </div>
                <p className="text-sm text-gray-500">@ChinmayS</p>
                <p className="mt-1">Dream big Dream long, if it's dull or uninteresting, The</p>
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
  )
}