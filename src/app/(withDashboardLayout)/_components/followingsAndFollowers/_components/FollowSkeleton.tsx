
import { Skeleton } from "@nextui-org/skeleton";

const FollowSkeleton = () => {
  return (
    <div className="h-screen !w-full   gap-3 ">
      <div className="my-5">
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
      <div className="my-5">
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
      <div className="my-5">
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
