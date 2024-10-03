import { CloseIcon } from "@/src/assets/icons";
import { CardHeader } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import { Skeleton } from "@nextui-org/skeleton";

const CommentSkeleton = () => {
  return (
    <section>
         <Skeleton className="size-12 rounded-full mb-3 mt-5"></Skeleton>
      <Skeleton className="flex gap-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
      </Skeleton>

      <Skeleton>
        <div className="space-y-4">
          <div className="flex items-start p-4 rounded-lg space-x-4 bg-default-100">
            <textarea
              className="min-h-[100px] hover:!bg-transparent pt-2 !bg-transparent"
              placeholder="Write a response..."
            />
          </div>
        </div>  
      </Skeleton>

         <Skeleton className="size-12 rounded-full mb-3 mt-20"></Skeleton>
      <Skeleton className="flex gap-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
      </Skeleton>

      <Skeleton>
        <div className="space-y-4">
          <div className="flex items-start p-4 rounded-lg space-x-4 bg-default-100">
            <textarea
              className="min-h-[100px] hover:!bg-transparent pt-2 !bg-transparent"
              placeholder="Write a response..."
            />

            <div className="flex items-center justify-between">
              <div className="flex space-x-2"></div>
              <div className="flex space-x-2"></div>
            </div>
          </div>
        </div>  
      </Skeleton>
    </section>
  );
};

export default CommentSkeleton;
