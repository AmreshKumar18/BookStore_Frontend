import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          toast.success("Acoount Created Successfully");
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 500);
          navigate("/");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 pt-32">
        <div className="w-3/5 mr-auto ml-auto space-y-4 text-center shadow-md rounded-xl p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className=" font-semibold text-xl mb-5">Start Journey Here !!</p>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered flex items-center gap-2 w-full mb-4"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span>This field is required</span>}

            <label className="input input-bordered flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && <span>This field is required</span>}
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && <span>This field is required</span>}
            <p className="text-left mb-5">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400">
                {" "}
                Login Here
              </Link>
            </p>
            <button className="btn  bg-pink-500 text-white">
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
