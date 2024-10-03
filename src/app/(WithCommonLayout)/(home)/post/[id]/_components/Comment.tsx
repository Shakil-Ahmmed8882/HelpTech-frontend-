"use client";

import { CloseIcon } from "@/src/assets/icons";
import { useUser } from "@/src/context/user.provider";
import useClickOutside from "@/src/hooks";
import { useAddComment, useGetAllCommentsOnSinglePost } from "@/src/hooks/comments.hook";
import { IComment } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import { useRef, useState } from "react";

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
  const { data } = useGetAllCommentsOnSinglePost(postId);
  const { mutate:AddCommment } = useAddComment();
  const { user } = useUser();
  const postComments = data?.data || [];
  const commentSectionRef = useRef(null);
  useClickOutside(commentSectionRef, () => setShowComment(false));



   // Handle submitting the comment
   const [commentText, setCommentText] = useState("");

   const handleSubmit = () => {
    const formattedComment = {
      post: postId,
      comment: commentText,
    };
    
    AddCommment(formattedComment)

    // Clear the textarea after submit
    setCommentText("");
  };

  return (
    <Card
      ref={commentSectionRef}
      className={`${showComment ? " z-[99] opacity-100 translate-x-0 visible" : "z-[-99] opacity-0 translate-x-80 invisible"} fixed top-0 right-0 h-screen p-3 w-[400px] shadow-lg transition-all duration-300`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h2 className="text-xl font-bold">Responses (9)</h2>
        <div onClick={() => setShowComment(false)} className="flex space-x-2">
          <div className="h-5 w-5 text-gray-500" />
          <CloseIcon />
        </div>
      </CardHeader>
      <div className="space-y-4">
        <div className="flex items-start p-4 rounded-lg space-x-4 bg-default-100">
          <Avatar className="h-10 w-10"></Avatar>
          <div className="flex-1 space-y-2">
            <p className="font-semibold">{user?.username}</p>
            <Textarea
              name="comment"
              className="min-h-[100px] hover:!bg-transparent pt-2 !bg-transparent"
              placeholder="Write a response..."
              value={commentText} // Bind the state
              onChange={(e) => setCommentText(e.target.value)} // Update state on input change
            />

            <div className="flex items-center justify-between">
              <div className="flex space-x-2"></div>
              <div className="flex space-x-2">
                <Button onClick={() =>  setCommentText("")} variant="ghost">Cancel</Button>
                <Button onClick={() =>  handleSubmit()} className="bg-primaryColor text-[#fff]">Respond</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-11">
          {postComments?.length > 0 &&
            postComments?.map((comment:IComment) => (
              <IndividualComment {...{ comment }} />
            ))}
        </div>
      </div>
    </Card>
  );
}

const IndividualComment = ({ comment }: { comment: IComment }) => {


  return (
    <div className="space-y-2 pt-5">
      <div className="flex items-start space-x-4">
        <Avatar className="h-10 w-10" name="SL" />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{comment?.user?.username}</p>
            <div className="flex items-center space-x-1">
              <p className="text-sm text-default-500">3 days ago</p>
            </div>
          </div>
          <p className="text-sm pt-2 text-default-500 ">{comment?.comment}</p>
          <div className="flex items-center space-x-4 pt-8 justify-end w-full">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">7</span>
            </div>
            <Button variant="bordered" className="h-auto p-0 text-sm">
              1 reply
            </Button>
            <Button variant="bordered" className="h-auto p-0 text-sm">
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
