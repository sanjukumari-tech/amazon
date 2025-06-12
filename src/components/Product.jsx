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
    <div>
      {/* <h2 className="text-xl font-bold mb-4">Product Gallery</h2> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white border shadow-md rounded-md overflow-hidden h-64 flex items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-contain h-full w-full p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
