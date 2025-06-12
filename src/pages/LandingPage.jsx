// import React from "react";
// import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
// import Product from "./components/Product";

import Carousel from "../components/Carousel";
import AmazonNavbar from "../components/Navbar";
import Product from "../components/Product";

const images = [
  "https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg",
];
const LandingPage = () => {
  return (
    <div >
      <div className="fixed top-0 left-0 w-full z-50">
        <AmazonNavbar />
      </div>
      <div  className="relative w-screen pt-16 ">
        <Carousel images={images} />
      </div>
      <div className="-mt-65 relative z-10 px-4">
        <Product />
      </div>
    </div>
  );
};

export default LandingPage;
