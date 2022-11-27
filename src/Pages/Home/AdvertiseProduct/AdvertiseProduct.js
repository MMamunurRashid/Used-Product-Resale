import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../Categories/BookingModal/BookingModal";
import CategoryCard from "../../Categories/CategoryCard/CategoryCard";

const AdvertiseProduct = () => {
  const [product, setProduct] = useState(null);
  const url = `http://localhost:5000/advertise`;
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      {products.length ? (
        <>
          <h1 className="text-2xl font-serif font-bold ">Advertise Product</h1>
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
            <BookingModal
              product={product}
              setProduct={setProduct}
            ></BookingModal>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdvertiseProduct;
