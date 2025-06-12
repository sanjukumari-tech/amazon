import { MdArrowDropDown } from "react-icons/md";
import SearchBar from "./SearchBar.jsx";
import { FaShoppingCart } from "react-icons/fa";
import {  useState } from "react";
import User from "./User.jsx";


const data =[
                  "English - EN",
                  "español - ES",
                  "العربية - AR",
                  "Deutsch - DE",
                  "עברית - HE",
                  "한국어 - KO",
                  "português - PT",
                  "中文(简体) - ZH",
                  "中文(繁體) - ZH",
                ]
const AmazonNavbar = ({ deliveryLocation = "India" }) => {
  const [open, setOpen] = useState(false);
 
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  
  };

  return (
    <nav className="bg-[#131921] text-white px-4 py-2 flex flex-wrap items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center ">
        <img
          src="../src/assets/logo-amazon.png"
          alt="Amazon"
          className="h-15 w-auto border border-transparent hover:border-white hover:font-bold px-2 py-1 rounded"
        />
       
      </div>

       <div className="flex items-center ">
       
        <div className="text-sm hidden sm:flex flex-col leading-tight border border-transparent hover:border-white hover:font-bold px-2 py-1 rounded">
          <span className="text-gray-300">Deliver to</span>
          <span className="font-bold">{deliveryLocation}</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 mx-4 max-w-2xl w-full order-3 sm:order-none mt-2 sm:mt-0 bg-amber-50">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 text-sm">
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div
            className="hidden md:flex items-center space-x-1 cursor-pointer border border-transparent hover:border-white hover:font-bold px-2 py-1 rounded"
            onClick={() => setOpen(!open)}
          >
            <img
              src="https://flagcdn.com/us.svg"
              alt="EN"
              className="w-5 h-4 object-cover"
            />
            <span>EN</span>
            <MdArrowDropDown />
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-10 right-0 bg-white text-black shadow-lg border border-gray-300 rounded-md w-64 z-50 p-4 text-sm">
              <h3 className="font-bold mb-2">
                Change language{" "}
                <span className="text-blue-500 cursor-pointer text-xs">
                  Learn more
                </span>
              </h3>
              <div className="space-y-1">
                {data.map((lang, index) => (
                  <label className="flex items-center space-x-2" key={index}>
                    <input type="radio" name="language" />
                    <span>{lang}</span>
                  </label>
                ))}
              </div>

              <div className="mt-4 border-t pt-2">
                <h3 className="font-bold mb-1">
                  Change currency{" "}
                  <span className="text-blue-500 cursor-pointer text-xs">
                    Learn more
                  </span>
                </h3>
                <div className="flex justify-between">
                  <span>$ - USD - US Dollar</span>
                  <span className="text-blue-500 cursor-pointer text-xs">
                    Change
                  </span>
                </div>
              </div>

              <div className="mt-4 border-t pt-2 text-xs">
                <div className="flex items-center space-x-1">
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="US"
                    className="w-4 h-3"
                  />
                  <span>You are shopping on Amazon.com</span>
                </div>
                <div className="text-blue-500 mt-1 cursor-pointer">
                  Change country/region.
                </div>
              </div>
            </div>
          )}
        </div>

        {/*  */}
        <div className="relative">
          <User />
        </div>

        <div className="hidden sm:flex flex-col cursor-pointer border border-transparent hover:border-white hover:font-bold px-2 py-1 rounded">
          <span>Returns</span>
          <span className="font-bold">& Orders</span>
        </div>
        <div className="flex items-center cursor-pointer border border-transparent hover:border-white hover:font-bold px-2 py-1 rounded">
          <FaShoppingCart className="text-xl" />
          <span className="ml-1 font-bold">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default AmazonNavbar;
