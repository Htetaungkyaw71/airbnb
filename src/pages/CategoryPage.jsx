import Category from "../components/Navbar/Category";
import Navbar from "../components/Navbar/Navbar";
import CategoryCard from "../components/home/CategoryCard";

const CategoryPage = () => {
  return (
    <>
      <Navbar>
        <Category />
      </Navbar>
      <CategoryCard />
    </>
  );
};

export default CategoryPage;
