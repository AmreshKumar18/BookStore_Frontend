import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // console.log(item);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mt-4 my-3 max-w-screen-2xl container mx-auto ">
        <div className="card w-64 bg-base-100 shadow-xl">
          <Link to={`/product-details/${item._id}`}>
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
          </Link>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.publisher}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">RS. {item.category}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-2000 p-4">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
