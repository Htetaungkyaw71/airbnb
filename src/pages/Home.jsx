import Navbar from "../components/Navbar/Navbar";
import Homecards from "../components/home/Homecards";
import Category from "../components/Navbar/Category";

const Home = () => {
  return (
    <>
      <Navbar>
        <Category />
      </Navbar>
      <Homecards />
    </>
  );
};

export default Home;
