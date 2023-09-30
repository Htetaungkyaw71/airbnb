const Skeleton = () => {
  return (
    <div className="border border-slate-200 shadow rounded-2xl p-4 max-w-sm h-[380px] w-full mx-auto">
      <div className="animate-pulse flex space-x-4"></div>
    </div>
  );
};

export default Skeleton;
