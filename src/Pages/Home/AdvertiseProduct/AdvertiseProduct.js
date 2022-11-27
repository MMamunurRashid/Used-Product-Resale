import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import BookingModal from "../../Categories/BookingModal/BookingModal";
import CategoryCard from "../../Categories/CategoryCard/CategoryCard";
import Loading from "../../Shared/Loading/Loading";

const AdvertiseProduct = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);
  const url = `http://localhost:5000/advertise`;
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-3">
      {products.length ? (
        <>
          <h1 className="text-2xl font-serif font-bold ">Advertise Product</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 ">
            {products.map((product, i) => (
              <CategoryCard
                key={i}
                product={product}
                setProduct={setProduct}
              ></CategoryCard>
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
