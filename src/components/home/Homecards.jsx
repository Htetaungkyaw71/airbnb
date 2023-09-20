import { useMemo, useState } from "react";
import { useGetHomeQuery } from "../../services/homeApiServices";
import Card from "./Card";

const Homecards = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetHomeQuery({ page, pageSize: 5 });

  const [allHomes, setAllHomes] = useState([]);
  const totalCount = data?.totalCount;
  const homes = data?.data;

  const handleMore = () => {
    setPage(page + 1);
  };

  useMemo(() => {
    if (homes) {
      if (page === 1) {
        setAllHomes(homes);
      } else {
        setAllHomes((prev) => {
          return [...prev, ...homes];
        });
      }
    }
  }, [homes, page]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="mt-10 px-5 xl:px-0 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {allHomes?.map((home) => (
          <Card {...home} key={home.id} />
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
    </>
  );
};

export default Homecards;
