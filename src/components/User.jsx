// User.jsx
import React, { useState } from "react";

export default function User({ userName = "User" }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="hidden sm:flex items-center space-x-1 cursor-pointer border border-transparent hover:border-white hover:font-bold px-2 py-1 rounded">
        <div>
          <span>Hello, {userName}</span>
          <div className="font-bold">Account & Lists</div>
        </div>
      </div>

      {showDropdown && (
        <div className="absolute top-15 right-0 bg-white text-black shadow-lg border border-gray-300 rounded-md w-80 z-50 p-4 text-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="font-bold">{userName}</div>
              <div className="text-xs text-gray-500">Adult profile</div>
            </div>
            <button className="text-blue-600 text-xs">Manage Profiles</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Your Lists</h3>
              <ul className="space-y-1">
                <li className="hover:text-blue-500 cursor-pointer">Create a List</li>
                <li className="hover:text-blue-500 cursor-pointer">Find a List or Registry</li>
                <li className="hover:text-blue-500 cursor-pointer">Your Saved Books</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">Your Account</h3>
              <ul className="space-y-1">
                <li className="hover:text-blue-500 cursor-pointer">Orders</li>
                <li className="hover:text-blue-500 cursor-pointer">Recommendations</li>
                <li className="hover:text-blue-500 cursor-pointer">Browsing History</li>
                <li className="hover:text-blue-500 cursor-pointer">Watchlist</li>
                <li className="hover:text-blue-500 cursor-pointer">Content & Devices</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
