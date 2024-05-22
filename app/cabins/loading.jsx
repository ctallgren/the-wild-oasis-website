import Spinner from "@/components/Spinner";

const Loading = () => {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl tex-primary-200">Loading cabin data..</p>
    </div>
  );
};

export default Loading;
