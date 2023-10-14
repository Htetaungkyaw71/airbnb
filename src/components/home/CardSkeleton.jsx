import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ length }) => {
  return Array.from({ length }).map((_, index) => (
    <Skeleton key={`skeleton-${index}`} count={1} height={300} />
  ));
};

export default CardSkeleton;
