import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      description: "An easy and proven way to build good habits and break bad ones.",
      image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A fable about following your dream and listening to your heart.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      description: "Rules for focused success in a distracted world.",
      image: "https://images-na.ssl-images-amazon.com/images/I/81j7mG5Xk-L.jpg"
    },
    {
      id: 4,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "Explores the history and impact of Homo sapiens on the world.",
      image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="text-center m-60 py-20 px-4 md:px-20">
        <h1 className=" text-9xl md:text-8xl font-extrabold mb-6 text-gray-800">
          Connect, Share, and Trade Your Favourite Reads!
        </h1>
      </div>

      <section className="py-12 mt-55 px-4 md:px-20">
        <h2 className="text-7xl font-bold text-center  mb-10">Featured Books</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-70 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{book.title}</h3>
              <p className="text-gray-600 italic">by {book.author}</p>
              <p className="text-sm mt-2 text-gray-700 text-center">{book.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
