import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import CategoryCard from "../CategoryCard/CategoryCard";

const Category = () => {
  const products = useLoaderData();
  const [product, setProduct] = useState(null);
  // console.log(product);

  return (
    <div>
      <h1>
        This Category Have {products.length}{" "}
        {products?.length !== 1 ? "Products" : "Product"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {products.map((product) => (
          <>
            <CategoryCard
              key={product._id}
              product={product}
              setProduct={setProduct}
            ></CategoryCard>
          </>
        ))}
      </div>
      {product && (
        <BookingModal product={product} setProduct={setProduct}></BookingModal>
      )}
    </div>
  );
};

export default Category;
