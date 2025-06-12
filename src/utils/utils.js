// utils/fetchProductImages.js
export const fetchProductImages = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const imageUrls = data.map((item) => item.image);
    return imageUrls;
  } catch (error) {
    console.error("Failed to fetch product images:", error);
    return [];
  }
};
