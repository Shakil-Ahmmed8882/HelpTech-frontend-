import { Card as NextUiCard } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const FollowSkeleton = () => {
  return (
    <div className="h-screen !w-full flex mt-24 gap-3 overflow-x-hidden ">
      <div>
        <div className="flex gap-3 mb-8 justify-center">
        <Skeleton className="h-8 w-[100px] rounded-lg"></Skeleton>
        <Skeleton className="h-8 w-[100px] rounded-lg"></Skeleton>

        </div>
        <div className="md:flex gap-3">
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-full"></Skeleton>
            <Skeleton className="my-2 h-11 w-full md:w-[400px] rounded-lg"></Skeleton>
          </div>
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-full"></Skeleton>
            <Skeleton className="my-2 h-11 w-full md:w-[400px] rounded-lg"></Skeleton>
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-full"></Skeleton>
            <Skeleton className="my-2 h-11 w-[400px] rounded-lg"></Skeleton>
          </div>
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-full"></Skeleton>
            <Skeleton className="my-2 h-11 w-[400px] rounded-lg"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowSkeleton;
