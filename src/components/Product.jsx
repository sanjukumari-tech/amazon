import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 -mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 -mt-6">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white border shadow-md rounded-md overflow-hidden h-64 flex items-center justify-center"
          >
            <div className="transition duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:scale-105 w-full h-full flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain h-full w-full p-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
