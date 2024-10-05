import { useGetDBStoredUser } from "@/src/hooks/user.hook";

interface UserData {
    followers: number;
    followings: number;
    posts: number;
}
  
const FollowersAndPost = ({ id }: { id: string }) => {
    const { data, isLoading, error } = useGetDBStoredUser(id);
  
    // Handle loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
  
    const { followers = 0, followings = 0, posts = 0 }: UserData = data?.data || {};
  
    
  
    return (
      <div className="flex space-x-4 mt-4 text-sm text-gray-500">
        <button className="focus:outline-none">
          <strong className="text-default-600">{posts}</strong> Posts
        </button>
        <button className="focus:outline-none">
          <strong className="text-default-600">{followers}</strong> Followers
        </button>
        <button className="focus:outline-none">
          <strong className="text-default-600">{followings}</strong> Following
        </button>
      </div>
    );
};
  
export default FollowersAndPost;
