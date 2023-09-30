import { Suspense, lazy } from "react";
import useGethomes from "./custom_hooks/getAllhomes";
import Skeleton from "./Skeleton";

const Homecards = () => {
  const Card = lazy(() => import("./Card"));
  const [allHomes, setPage, totalCount, isLoading] = useGethomes();

  const handleMore = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="mb-16">
        <div className="px-5 mb-10 mt-[250px] xl:px-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={`skeleton-${index}`} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="mb-16">
      <div className="px-5 mb-10 mt-[250px] xl:px-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {allHomes?.map((home) => (
          <Suspense key={home.id} fallback={<Skeleton />}>
            <Card {...home} />
          </Suspense>
        ))}
      </div>
      {allHomes.length < totalCount && (
        <div className="text-center py-10">
          <button
            onClick={handleMore}
            className={`hover:scale-105 duration-500 p-3 bg-[#232323] rounded-full text-white font-semibold px-10 text-[20px]`}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Homecards;