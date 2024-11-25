import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const getDetailsBook = async () => {
      try {
        
        const res = await axios.get(
          `http://localhost:4000/product-details/${id}`
        );
        setBookDetails(res.data);
      
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailsBook();
  });

  return (
    <>
      <div className=" flex justify-center items-center mt-28">
        <div className="img_section w-1/2">
          <div className=" flex justify-center">
            <img className=" w-8/12" src={bookDetails.image} alt="" />
          </div>
        </div>
        <div className="desc_section w-1/2 m-10">
          <div className="badge badge-primary mb-3">{bookDetails.category}</div>
          <p className=" text-3xl font-semibold mb-4">{bookDetails.title}</p>
          <p className=" text-xl mb-3">
            <b>Publisher:</b> {bookDetails.publisher}
          </p>
          <p className=" text-xl mb-3">
            <b>Language:</b> {bookDetails.language}
          </p>
          <p className=" text-xl">
            <b>Description:</b> <br />
            {bookDetails.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
