import Navbar from "../components/Navbar/Navbar";
import { useGetHomeQuery } from "../services/homeApiServices";

const Home = () => {
  const { data, isLoading } = useGetHomeQuery({ page: 1, pageSize: 20 });
  if (isLoading) {
    return <h1>Loading..
      .</h1>;
  }
  console.log(data);
  return <div>
    <Navbar />
  </div>;
};

export default Home;
