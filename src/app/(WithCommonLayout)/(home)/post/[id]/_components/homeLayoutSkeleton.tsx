import Container from "@/src/components/UI/Container";
import { Skeleton } from "@nextui-org/skeleton";

const HomeLayoutSkeleton = () => {
  return (
    <Container>
    <div className="flex gap-3">
    <section className="md:w-3/4">
        <div className="flex gap-3">
      <Skeleton className="h-8 w-20  rounded-lg mb-3 mt-5" />
      <Skeleton className="h-8 w-20  rounded-lg mb-3 mt-5" />
      <Skeleton className="h-8 w-20  rounded-lg mb-3 mt-5" />
      <Skeleton className="h-8 w-20  rounded-lg mb-3 mt-5" />
      <Skeleton className="h-8 w-20  rounded-lg mb-3 mt-5" />
      <Skeleton className="h-8 w-20  rounded-lg mb-3 mt-5" />
      <Skeleton className="h-8 w-20  rounded-lg mb-3 mt-5" />
        </div>
      <PostHorizontalSkeleton/>
    </section>
    <Skeleton className="hidden md:block min-h-screen w-1/4"/>
    </div>
    </Container>
  );
};

export default HomeLayoutSkeleton;

export const PostHorizontalSkeleton = () => {
  return (
    
      <section className=" mx-auto">
        <main className="flex gap-3 w-full ">
          <div className="w-full">
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
            <div className="w-full">
              <Skeleton className="size-12  rounded-full " />
              <Skeleton className="h-3 w-full  my-5" />
              <Skeleton className="w-full h-6 mb-8" />

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

        </main>
      </section>

  );
};
