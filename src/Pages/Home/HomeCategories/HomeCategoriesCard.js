import React from "react";

const CategoriesCard = ({ category }) => {
  console.log(category);
  const { picture, category_name } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-80" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-4xl font-serif">{category_name}</h2>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Category</button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
