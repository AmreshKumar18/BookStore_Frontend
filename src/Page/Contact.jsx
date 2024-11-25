import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/Authprovider";
import { Navigate } from "react-router-dom";

const Contact = () => {
  const [authUser, setAuthUser] = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
    const onSubmit = async (data) => {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        description: data.description,
      };
      await axios
        .post("http://localhost:4000/contact", userInfo)
        .then((res) => {
          if (res.data) {
            toast.success("Submit Successfully");
            window.location.reload();
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };
 
 

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-screen-2xl container mx-auto md:px-20 pt-28 flex flex-col-reverse md:flex-row justify-between">
          <div className=" md:w-1/2">
            <form className="card-body py-0">
              <div className="form-control">
                <h1 className="font-semibold text-2xl">Get in Touch !</h1>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  className="input input-bordered"
                  cols="50"
                  rows="50"
                  placeholder="description"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-500 text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className=" w-1/2 mr-auto ml-auto">
            <img className="h-96 " src="../contact.jpg" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
