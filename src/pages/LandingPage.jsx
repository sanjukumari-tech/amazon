
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
    <div>
  <div className="fixed top- left-0 w-full z-50 ">
    <AmazonNavbar />
  </div>

  <div className="pt-[0px] ">
    <Carousel images={images} />
  </div>

  <div className="lg:-mt-55 sm:-mt-36 md:-mt-50  relative z-10 px-2 sm:px-4 md:px-6">
    <Product />
  </div>
</div>
  )
};

export default LandingPage;
