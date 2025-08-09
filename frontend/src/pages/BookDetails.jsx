import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { PixelImage } from "../components/magicui/pixel-image";
 

const BookDetails = () => {
  const [Book,SetBooks]=useState(null);
  const [loading,setLoading]=useState(false);
  const {id} = useParams();
useEffect(()=>{
const fetchBook = async()=>{
    try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        SetBooks(res.data.product);
        setLoading(false);
    } catch (error) {
        console.error("there was a error in finding the books");
    }
}
fetchBook();

},[]);
if(loading)return<div>Loading...</div>;
if(!Book)return<div>No Books Found</div>;


  
    return (
    <div className='bg-black'>
     <PixelImage  src={Book.productImage}
      customGrid={{ rows: 4, cols: 6 }}
      grayscaleAnimation/>
        <h1>{Book.productDescription}</h1>
    </div>

  )
}

export default BookDetails