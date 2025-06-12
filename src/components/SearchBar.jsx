import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const categories = [
    "All",
  "All Departments",
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Boys' Fashion",
  "Computers",
  "Deals",
  "Digital Music",
  "Electronics",
  "Girls' Fashion",
  "Health & Household",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Kindle Store",
  "Luggage",
  "Men's Fashion",
  "Movies & TV",
  "Music, CDs & Vinyl"
];
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input);
    }, 500); 

    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <div className="flex w-full h-12 ">
      <select className="bg-gray-200 max-w-fit-[2] text-black text-sm px-[-23px] cursor-pointer rounded-l-md border- border-white-300">
         {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search Amazon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-2 py-1 text-black"
      />
      <button className="bg-orange-400 px-3 rounded-r-md cursor-pointer">
        <FaSearch className="text-white" />
      </button>
    </div>
  );
};
export default SearchBar;