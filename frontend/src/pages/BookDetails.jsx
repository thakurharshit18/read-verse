import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PixelImage } from "../components/magicui/pixel-image";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setBook(res.data.product);
      } catch (error) {
        console.error("There was an error in finding the book", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        Loading...
      </div>
    );

  if (!book)
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        No Book Found
      </div>
    );

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Large Image */}
        <div className="flex justify-center">
          <PixelImage
            src={book.productImage}
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {book.productName}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {book.productDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
