import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  // console.log(category);
  const { picture, category_name, categories_id } = category;

  return (
    <div className="card sm:w-96 bg-base-100 shadow-xl my-5">
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
