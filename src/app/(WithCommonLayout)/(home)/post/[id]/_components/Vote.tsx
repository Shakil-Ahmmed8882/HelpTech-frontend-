import { DislikeIcon, LikeIcon } from "@/src/components/icons";
import { useAddVotes } from "@/src/hooks/votes.hook";

const Vote = ({
  upvotes,
  downvotes,
  postId,
  refetch
}: {
  upvotes: number | 0;
  downvotes: number | 0;
  postId: string;
  refetch: any;
}) => {
  const { mutate: addVote } = useAddVotes();

  const handleAddVote = (voteType: string) => {
    const voteData = {
      voteType,
      post: postId,
    };
    addVote(voteData);
    refetch()
  };
  return (
    <>
      <div
        onClick={() => handleAddVote("upvote")}
        className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500"
      >
        <LikeIcon className="w-4 h-4" />
        <span>{upvotes}</span>
      </div>
      <div
        onClick={() => handleAddVote("downvote")}
        className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500"
      >
        <DislikeIcon className="w-4 h-4" />
        <span>{downvotes}</span>
      </div>
    </>
  );
};

export default Vote;
