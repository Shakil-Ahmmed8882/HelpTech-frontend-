import { Skeleton } from "@nextui-org/skeleton";

const DashboardCardSkeleton = () => {
  return (
    <div className="h-screen flex  gap-3 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        <Skeleton className="h-32 sm:w-[300px] rounded-lg"></Skeleton>
        <Skeleton className="h-32 sm:w-[300px] rounded-lg"></Skeleton>
        <Skeleton className="h-32 sm:w-[300px] rounded-lg"></Skeleton>
        

      </div>
    </div>
  );
};

export default DashboardCardSkeleton;
