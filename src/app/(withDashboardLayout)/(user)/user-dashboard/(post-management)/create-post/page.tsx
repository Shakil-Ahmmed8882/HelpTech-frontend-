import WritePage from "@/src/app/(WithCommonLayout)/(home)/write/page";

const CreatePost = () => {
  return (
    <section>
      <WritePage redirect="/user-dashboard/my-posts"/>
    </section>
  );
};

export default CreatePost;