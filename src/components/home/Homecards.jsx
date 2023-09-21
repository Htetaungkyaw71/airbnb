import { Suspense, lazy } from "react";
import useGethomes from "./custom_hooks/getAllhomes";

const Homecards = () => {
  const Card = lazy(() => import("./Card"));
  const [allHomes, setPage, totalCount, isLoading] = useGethomes();

  const handleMore = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="mb-16">
      <div className="px-5 mb-10 mt-[250px] xl:px-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {allHomes?.map((home) => (
          <Suspense
            key={home.id}
            fallback={
              <div className="border border-slate-200 shadow rounded-2xl p-4 max-w-sm h-[380px] w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <Card {...home} key={home.id} />
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
