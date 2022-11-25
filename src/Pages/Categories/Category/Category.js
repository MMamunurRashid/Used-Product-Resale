import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";

const Men = () => {
  const products = useLoaderData();

  console.log(products);

  return (
    <div>
      <h1>
        This Category Have {products.length}{" "}
        {products?.length !== 1 ? "Products" : "Product"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {products.map((product) => (
          <CategoryCard key={product._id} product={product}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Men;
