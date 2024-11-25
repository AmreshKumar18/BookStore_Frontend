import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Page/Home";
import Course from "./Page/Course";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import { useAuth } from "./Context/Authprovider";
import { Toaster } from "react-hot-toast";
import DetailsPage from "./Page/DetailsPage";
import Error from "./Page/Error";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={
            authUser ? <Course /> : <Navigate to="/signup" replace={true} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product-details/:id" element={<DetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
