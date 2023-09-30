import { Suspense, lazy } from "react";
import { useGetHomeWithCatgoryQuery } from "../../services/homeApiServices";
import Skeleton from "../home/Skeleton";
import { useParams } from "react-router-dom";

const CategoryCard = () => {
  const { category } = useParams();
  const Card = lazy(() => import("./Card"));
  const { data, isLoading } = useGetHomeWithCatgoryQuery({ category });

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
        {data?.data.map((home) => (
          <Suspense key={home.id} fallback={<Skeleton />}>
            <Card {...home} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
