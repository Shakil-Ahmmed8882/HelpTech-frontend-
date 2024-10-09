
"use client";

import { CloseIcon } from "@/src/assets/icons";
import { useUser } from "@/src/context/user.provider";
import useClickOutside from "@/src/hooks";
import {
  useAddComment,
  useGetAllCommentsOnSinglePost,
} from "@/src/hooks/comments.hook";
import { IComment } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { useRef, useState } from "react";
import CommentSkeleton from "./CommentSkeleton";

type IProps = {
  postId: string;
  setShowComment: (param: boolean) => void;
  showComment: boolean;
};

export default function Comment({
  setShowComment,
  postId,
  showComment,
}: IProps) {
  const { data, refetch, isLoading } = useGetAllCommentsOnSinglePost(postId); // Get refetch method from hook
  const { mutate: addComment } = useAddComment();
  const { user } = useUser();
  const postComments = data?.data || [];
  const commentSectionRef = useRef(null);

  useClickOutside(commentSectionRef, () => setShowComment(false));

  const [commentText, setCommentText] = useState("");

  const handleSubmit = async () => {
    const formattedComment = {
      post: postId,
      comment: commentText,
    };

    // Add comment and refetch comments afterward
    await addComment(formattedComment);
    setCommentText(""); // Clear the textarea after submit

    // Refetch comments to get the updated list
    refetch();
  };

  return (
    <div ref={commentSectionRef}>
      <Card
        className={`${
          showComment
            ? " opacity-100 min-h-screen relative z-[99999] translate-x-0 visible"
            : "z-[-99] opacity-0 translate-x-80 invisible"
        } fixed top-0 right-0 h-screen p-3 w-[400px] overflow-auto shadow-lg transition-all duration-300`}
      >
        {isLoading ? (
          <CommentSkeleton />
        ) : (
          <>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="text-xl font-bold">
                Responses ({postComments.length})
              </h2>
              <div
                className="flex space-x-2"
                role="button" // Added appropriate role for interactive element
                tabIndex={0}
                aria-label="Close comment section"
                onClick={() => setShowComment(false)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") setShowComment(false); // Added keyboard interaction
                }}
              >
                <div className="h-5 w-5 text-gray-500" />
                <CloseIcon />
              </div>
            </CardHeader>
            <div className="space-y-4">
              <div className="flex items-start p-4 rounded-lg space-x-4 bg-default-100">
                <Avatar className="h-10 w-10" src={user?.profilePhoto} />
                <div className="flex-1 space-y-2">
                  <p className="font-semibold">{user?.username}</p>
                  <Textarea
                    className="min-h-[100px] hover:!bg-transparent pt-2 !bg-transparent"
                    name="comment"
                    placeholder="Write a response..."
                    value={commentText} // Bind the state
                    onChange={(e:any) =>
                      setCommentText(e.target.value)
                    }
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2" />
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        onClick={() => setCommentText("")}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-primaryColor text-[#fff]"
                        onClick={handleSubmit}
                      >
                        Respond
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-11">
                {postComments.length > 0 &&
                  postComments.map((comment: IComment) => (
                    <IndividualComment key={comment?._id} comment={comment} />
                  ))}
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}






const IndividualComment = ({ comment }: { comment: IComment }) => {
  // State to manage reply input visibility and showing existing reply
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState<string>(''); // Stores the reply input
  const {user} = useUser()
  // Handles toggling reply input visibility
  const handleReplyClick = () => {
    setShowReplyInput(!showReplyInput);
  };

  // Handles toggling the visibility of the static reply
  const handleViewReplyClick = () => {
    setShowReply(!showReply);
  };

  // Handles the submission of the reply (for now just logs it)
  const handleReplySubmit = () => {
    console.log('Reply:', reply);
    setReply(''); // Clears the input after submitting
    setShowReplyInput(false); // Hides the input field after reply is submitted
  };

  return (
    <div className="space-y-3 pt-4">
      <div className="flex items-start space-x-3">
        <Avatar className="h-8 w-8" src={comment?.user?.profilePhoto} />
        <div className="flex-1 bg-default-50 p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-default-600 text-sm">
              {comment?.user?.username}
            </p>
            <div className="text-xs text-gray-400">3 days ago</div>
          </div>
          <p className="text-default-600 text-sm pt-1">{comment?.comment}</p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-1 text-xs ">
              <span>Like</span>
              <span>•</span>
              <span
                className="cursor-pointer text-default-900"
                onClick={handleReplyClick}
              >
                Reply
              </span>
              <span>•</span>
              <span>7 likes</span>
            </div>
            <Button
              className="h-auto p-0 border-none text-xs text-[#35f435c3]"
              variant="ghost"
              onClick={handleViewReplyClick}
            >
              {showReply ? 'Hide reply' : 'View 1 reply'}
            </Button>
          </div>
        </div>
      </div>

      {/* Reply Input Field */}
      {showReplyInput && (
        <div className="pl-10 pt-2 ">
          <Input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Write a reply..."
          />
          <button
            onClick={handleReplySubmit}
            className="mt-4 bg-primaryColor  text-white px-4 py-1 rounded-full"
          >
            Submit
          </button>
        </div>
      )}

      {/* Static reply shown on "View 1 reply" */}
      {showReply && (
        <div className="pl-10">
          <div className="flex items-start space-x-2 pt-2">
            <Avatar src={user?.profilePhoto} className="h-7 w-7"  />
            <div className="flex-1 bg-default-50 p-2 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-default-600 text-xs">
                Shakil Ahmmed
                </p>
                <div className="text-xs text-gray-400">1 day ago</div>
              </div>
              <p className="text-default-600 text-xs pt-1">
                Thanks for sharing your thoughts! I totally agree with what you said.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

