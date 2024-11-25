import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import axios from "axios";
// import { useAuth } from "../Context/Authprovider";

const Course = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        // console.log(res.data);
        setBook(res.data);
        setSearch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  //
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <div className=" mt-20 text-center ">
          <h1 className="text-4xl font-semibold pt-10">
            We're delighted to have you{" "}
            <span className=" text-pink-500 font-bold">Here! :)</span>
          </h1>
          <p className=" pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus
            libero nihil nisi! Quae commodi doloremque iste tempora! Similique
            dicta eum sequi illum voluptas, eaque qui pariatur numquam eligendi
            nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            consectetur quo voluptates quis iure consequuntur reprehenderit
            quaerat est sit repellat.
          </p>
          <Link to="/">
            <button className="btn btn-secondary mt-4">Back To Home</button>
          </Link>
          <div className=" mt-10 w-1/2 m-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                // onChange={filterItems}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-3">
            {book.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Course;
