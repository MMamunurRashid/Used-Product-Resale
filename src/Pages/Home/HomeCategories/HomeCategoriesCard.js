import React from "react";
import { Link, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const CategoriesCard = ({ category }) => {
  const navigation = useNavigation();
  // console.log(category);
  const { picture, category_name, categories_id } = category;

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="card sm:w-96 bg-base-100 shadow-xl my-5 transition ease-in-out  hover:scale-110  duration-500  ">
      <figure>
        <img className="h-80" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-4xl font-serif">{category_name}</h2>

        <div className="card-actions justify-center">
          <Link to={`/category/${categories_id}`} className="btn btn-primary">
            View Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
