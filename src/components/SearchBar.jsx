import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const categories = [
    "All", "All Departments", "Arts & Crafts", "Automotive", "Baby",
    "Beauty & Personal Care", "Books", "Boys' Fashion", "Computers",
    "Deals", "Digital Music", "Electronics", "Girls' Fashion",
    "Health & Household", "Home & Kitchen", "Industrial & Scientific",
    "Kindle Store", "Luggage", "Men's Fashion", "Movies & TV", "Music, CDs & Vinyl"
  ];

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input);
    }, 500);
    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <div className="flex w-full h-10 sm:h-12 border border-gray-300 rounded-md overflow-hidden">
  <select className="bg-gray-200 text-black text-[10px] sm:text-sm px-1 sm:px-2 py-1 border-r border-gray-300 w-24 sm:w-auto">
    {categories.map((category, index) => (
      <option key={index}>{category}</option>
    ))}
  </select>

      <input
        type="text"
        placeholder="Search Amazon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-2 py-1 text-black text-sm sm:text-base focus:outline-none"
      />

      <button className="bg-orange-400 px-3 sm:px-4 flex items-center justify-center">
        <FaSearch className="text-white text-sm sm:text-base" />
      </button>
    </div>
  );
};

export default SearchBar;
