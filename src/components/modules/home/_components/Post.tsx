import { Bookmark, DislikeIcon, EyeIcon, LikeIcon, MessageCircle, MoreIcon } from "@/src/components/icons";
import { IPost } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

export function Post({ post }: { post: IPost }) {
    const {
      _id,
      title,
      category,
      author,
      content,
      upvotes,
      downvotes,
      images,
      comments,
    } = post || {};
  
    return (
      <Link href={`/post/${_id}`}>
        <Card className="shadow-none bg-transparent p-0 pb-20 ">
          <CardHeader className="flex flex-row items-center gap-4 !pb-7 p-0">
            <Avatar className="w-8 h-8" src={author?.profilePhoto} />
            <div className="flex flex-col">
              <h2 className="text-md">{author?.username}</h2>
            </div>
          </CardHeader>
          <p className="">{category}</p>
          <section className="flex flex-col-reverse sm:flex-row justify-between gap-3">
            <div className="space-y-4 md:w-2/3">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="text-default-500 text-lg"
              />
  
              <section className="flex justify-between items-center">
                <p className="text-sm text-default-500">1d ago</p>
                <div className="flex gap-2 pt-4">
                  <div className="flex text-default-500 cursor-pointer hover:text-white transition500">
                    <Bookmark className="w-4 h-4 text-default-50" />
                    <span className="sr-only">Bookmark</span>
                  </div>
                  <div className="text-default-500 cursor-pointer hover:text-white transition500">
                    <MoreIcon className="w-4 h-4" />
                    <span className="sr-only">More options</span>
                  </div>
                </div>
              </section>
  
              <div className="flex  gap-6 pt-4">
                <div className="flex items-center gap-3 text-default-500 cursor-pointer hover:text-white transition500">
                  <EyeIcon className="w-4 h-4" />
                  <span>101</span>
                </div>
                <div className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500">
                  <MessageCircle className="w-4 h-4" />
                  <span>{comments}</span>
                </div>
                <div className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500">
                  <LikeIcon className="w-4 h-4" />
                  <span>{upvotes}</span>
                </div>
                <div className="flex items-center gap-1 text-default-500 cursor-pointer hover:text-white transition500">
                  <DislikeIcon className="w-4 h-4" />
                  <span>{downvotes}</span>
                </div>
              </div>
            </div>
            <figure className="md:w-1/3">
              <Image
                alt="blog"
                className="rounded w-full pb-5 sm:pb-0"
                height={500}
                src={images[0]}
                width={200}
              />
            </figure>
          </section>
        </Card>
      </Link>
    );
  }