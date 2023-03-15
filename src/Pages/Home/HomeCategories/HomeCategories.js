import React, { useEffect, useState } from "react";
import CategoriesCard from "./HomeCategoriesCard";
import axios from "axios";
import { useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Categories = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // data fetch using axios
    axios
      .get("https://recycle-clothes-server.vercel.app/categories")
      .then((data) => setCategories(data.data));
  }, []);
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10 mx-3">
      <h1 className="text-2xl font-serif font-bold mx-3 text-center">
        Products Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3">
        {categories.map((category) => (
          <CategoriesCard
            key={category.categories_id}
            category={category}
          ></CategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
