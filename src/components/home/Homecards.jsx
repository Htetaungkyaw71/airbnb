import useGethomes from "./custom_hooks/getAllhomes";
import CardSkeleton from "./CardSkeleton";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const Homecards = () => {
  const [allHomes, setPage, totalCount, isLoading] = useGethomes();
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (totalCount === allHomes.length) {
      setHasMore(false);
    }
  }, [allHomes.length, totalCount]);

  if (isLoading) {
    return (
      <div className="mb-16">
        <div className="px-5 mb-10 mt-[250px] xl:px-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          <CardSkeleton length={10} />
        </div>
      </div>
    );
  }
  return (
    <div className="mb-16">
      <div className="px-5 mb-10 mt-[250px] xl:px-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {allHomes?.map((home) => {
          return <Card {...home} key={home.id} />;
        })}
      </div>
      <InfiniteScroll
        dataLength={allHomes.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      ></InfiniteScroll>
    </div>
  );
};

export default Homecards;
