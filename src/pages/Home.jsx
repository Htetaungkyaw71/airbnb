import Navbar from "../components/Navbar/Navbar";
import Homecards from "../components/home/Homecards";
// import Category from "../components/Navbar/Category";
import { useGetHomeQuery } from "../services/homeApiServices";

const Home = () => {
  const { data, isLoading } = useGetHomeQuery({ page: 1, pageSize: 20 });
  if (isLoading) {
    return <h1>Loading.. .</h1>;
  }
  console.log(data);
  return (
    <>
      <Navbar />
      <Homecards />
    </>
  );
};

export default Home;
