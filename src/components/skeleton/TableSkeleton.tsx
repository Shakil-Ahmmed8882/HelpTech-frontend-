
import { Skeleton } from "@nextui-org/skeleton";

const TableSkeleton = () => {
  return (
    <div className="h-screen flex mt-20 gap-3 justify-center">
      <div>
        <div className="flex gap-3 mb-8 justify-center">
        <Skeleton className="h-8 w-[100px] rounded-lg"></Skeleton>
        <Skeleton className="h-8 w-[100px] rounded-lg"></Skeleton>
        <Skeleton className="h-8 w-[100px] rounded-lg"></Skeleton>
        <Skeleton className="h-8 w-[100px] rounded-lg"></Skeleton>

        </div>
        <div className="md:flex gap-3">
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-lg"></Skeleton>
            <Skeleton className="my-2 h-11 w-full md:w-[200px] rounded-lg"></Skeleton>
          </div>
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-lg"></Skeleton>
            <Skeleton className="my-2 h-11 w-full md:w-[200px] rounded-lg"></Skeleton>
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-lg"></Skeleton>
            <Skeleton className="my-2 h-11 w-[200px] rounded-lg"></Skeleton>
          </div>
          <div className="flex gap-3">
            <Skeleton className="my-2 size-11  rounded-lg"></Skeleton>
            <Skeleton className="my-2 h-11 w-[200px] rounded-lg"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
