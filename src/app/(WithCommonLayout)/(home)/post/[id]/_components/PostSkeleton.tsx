import Container from "@/src/components/UI/Container";
import { Skeleton } from "@nextui-org/skeleton";

const PostSkeleton = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <Skeleton className="size-12  rounded-full mb-3 mt-5" />
      <Skeleton className="h-3 w-1/2  my-5" />
      <Skeleton className="w-2/3 h-6 mb-8" />

      <Skeleton className="" />

      <Skeleton className="h-80 w-full" />
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
              <Skeleton className="size-12  rounded-full mb-3 mt-5" />
              <Skeleton className="h-3 w-1/2  my-5" />
              <Skeleton className="w-2/3 h-6 mb-8" />

              <Skeleton className="" />

              <div className="flex gap-4">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
              <div className="flex gap-3 mt-5">
                <Skeleton className="h-6 w-[50px]" />
                <Skeleton className="h-6 w-[50px]" />
                <Skeleton className="h-6 w-[50px]" />
              </div>
            </div>

            {/* 2 */}
            <div className="w-2/3">
              <Skeleton className="size-12  rounded-full mb-3 mt-5" />
              <Skeleton className="h-3 w-1/2  my-5" />
              <Skeleton className="w-2/3 h-6 mb-8" />

              <Skeleton className="" />

              <div className="flex gap-4">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
              <div className="flex gap-3 mt-5">
                <Skeleton className="h-6 w-[50px]" />
                <Skeleton className="h-6 w-[50px]" />
                <Skeleton className="h-6 w-[50px]" />
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <Skeleton className="h-screen w-80" />
          </div>
        </main>
      </section>
    </Container>
  );
};
