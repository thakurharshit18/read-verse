"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RainbowButton } from "../components/magicui/rainbow-button";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        setLoading(true);

        const res = await axios.get("http://localhost:5000/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err.message);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


const handleBooks = async()=>{
  navigate('/addbooks');
}

  return (
  <>
  <h1 className="text-center text-6xl text-black font-light pt-5">Books </h1>
  <div className="flex justify-end  p-10 font-semibold">

    <RainbowButton onClick={handleBooks}>Add Books</RainbowButton>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
    
  {products.map((product) => (
    <div
      key={product._id}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col"
    >
      <img
        src={product.productImage}
        alt={product.productName}
        className="w-full h-80 object-cover"
        onError={(e) => {
          e.currentTarget.src = "/fallback.jpg";
        }}
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {product.productName}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          {product.productDescription}
        </p>
        <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 " onClick={()=>navigate(`/Products/${product._id}`)}>
          View Details
        </button>
      </div>
    </div>
  ))}
</div>
</>
  );
};

export default Products;
