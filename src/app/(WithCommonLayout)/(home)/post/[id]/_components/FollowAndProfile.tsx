
import { useAddFollows, useIsFollowing, useUnfollow } from "@/src/hooks/follows.hook";
import { IUser } from "@/src/types";
import { useEffect, useState } from "react";

const FollowAndProfile = ({ author, user }: { author: any, user: IUser | null }) => {

    const { mutate: handleCheckIsFollowing, data:isFollowingData } = useIsFollowing();
    const { mutate: addFollow } = useAddFollows();
    const { mutate: unFollow } = useUnfollow();
    const [followToggle, setFollowToggle] = useState(false)

    // Create follow data with follower and following IDs
    const followData = {
        follower: user?._id,
        following: author?._id
    }

    // Check if the user is already following the author on component mount
    useEffect(() => {
        handleCheckIsFollowing(followData);
    }, [followToggle]);

    const isFollowing = isFollowingData?.data?.isFollowing

    // Function to handle the follow/unfollow logic
    const handleFollowToggle = () => {
        if (isFollowing) {
            // follow id found from checking is following from 
            // follow collection _id -> delete
            unFollow(isFollowingData.data.followId);
            setFollowToggle(!followToggle)
            
        } else {
            // If not following, call the follow API
            addFollow(followData);
            setFollowToggle(!followToggle)
        }
    }

    return (
        <>
            {author?._id === user?._id ? (
                <p className="text-[#4572D3]">Profile</p>
            ) : (
                <p onClick={handleFollowToggle} className="text-[#4572D3] cursor-pointer">
                    {isFollowing ? "Following" : "Follow"}
                </p>
            )}
        </>
    );
};

export default FollowAndProfile;
