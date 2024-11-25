import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { Link } from "react-router-dom";

const Freebook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        // console.log(res.data);
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  //settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 sm:px-8">
        <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          facere.
        </p>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <Slider {...settings} className="sm:px-8">
          {book.map((item, idx) => (
            <Link to={`/product-details/${item._id}`}>
              <Card item={item} key={idx} />
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Freebook;
