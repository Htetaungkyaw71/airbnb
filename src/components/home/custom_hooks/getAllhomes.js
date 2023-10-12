import { useEffect, useState } from "react";
import { useGetHomeQuery } from "../../../services/homeApiServices";

const useGethomes = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetHomeQuery({ page, pageSize: 5 });
  const totalCount = data?.totalCount;
  const homes = data?.data;
  const [allHomes, setAllHomes] = useState([]);

  useEffect(() => {
    if (homes) {
      setAllHomes((prev) => {
        const newData = [...prev, ...homes];
        const uniqueData = Array.from(
          new Set(newData.map((item) => item.id)),
        ).map((id) => newData.find((item) => item.id === id));
        return uniqueData;
      });
    }
  }, [homes]);

  return [allHomes, setPage, totalCount, isLoading];
};

export default useGethomes;
