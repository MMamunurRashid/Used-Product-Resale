import React, { useEffect, useState } from "react";
import CategoriesCard from "./HomeCategoriesCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-2xl font-serif font-bold ">Products Categories</h1>
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
