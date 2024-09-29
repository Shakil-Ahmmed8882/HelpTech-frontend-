import { Spinner } from "@nextui-org/spinner";
const Loading = () => {
  return (
    <div className="h-screen fixed inset-0 z-[999] backdrop-blur-lg flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
