import Container from "@/src/components/UI/Container";
import { CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const PostSkeleton = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <Skeleton className="size-12  rounded-full mb-3 mt-5"></Skeleton>
      <Skeleton className="h-3 w-1/2  my-5"></Skeleton>
      <Skeleton className="w-2/3 h-6 mb-8"></Skeleton>

      <Skeleton className=""></Skeleton>

      <Skeleton className="h-80 w-full"></Skeleton>
    </section>
  );
};

export default PostSkeleton;

export const PostHorizontalSkeleton = () => {
  return (
    <Container>
      <section className=" mx-auto">
        <main className="flex gap-3 w-full ">
          <div className="w-2/3">
            {/* 1 */}
            <div>
              <Skeleton className="size-12  rounded-full mb-3 mt-5"></Skeleton>
              <Skeleton className="h-3 w-1/2  my-5"></Skeleton>
              <Skeleton className="w-2/3 h-6 mb-8"></Skeleton>

              <Skeleton className=""></Skeleton>

              <div className="flex gap-4">
                <Skeleton className="h-32 w-full"></Skeleton>
                <Skeleton className="h-32 w-full"></Skeleton>
              </div>
              <div className="flex gap-3 mt-5">
                <Skeleton className="h-6 w-[50px]"></Skeleton>
                <Skeleton className="h-6 w-[50px]"></Skeleton>
                <Skeleton className="h-6 w-[50px]"></Skeleton>
              </div>
            </div>

            {/* 2 */}
            <div className="w-2/3">
              <Skeleton className="size-12  rounded-full mb-3 mt-5"></Skeleton>
              <Skeleton className="h-3 w-1/2  my-5"></Skeleton>
              <Skeleton className="w-2/3 h-6 mb-8"></Skeleton>

              <Skeleton className=""></Skeleton>

              <div className="flex gap-4">
                <Skeleton className="h-32 w-full"></Skeleton>
                <Skeleton className="h-32 w-full"></Skeleton>
              </div>
              <div className="flex gap-3 mt-5">
                <Skeleton className="h-6 w-[50px]"></Skeleton>
                <Skeleton className="h-6 w-[50px]"></Skeleton>
                <Skeleton className="h-6 w-[50px]"></Skeleton>
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <Skeleton className="h-screen w-80"></Skeleton>
          </div>
        </main>
      </section>
    </Container>
  );
};
