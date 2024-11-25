import React from "react";
import { useAuth } from "../Context/Authprovider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div>
        <button
          onClick={handleLogout}
          className="btn px-3 py-2 bg-red-500 text-white rounded-md"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;
