import axios from 'axios';
import React, { useState } from 'react'

export const CreateProducts = () => {
const [ProductId,setProductId] = useState('');
const [ProductName,setProductName] = useState('');

const handlesubmit = async()=>{
    try {
        await axios.post('http://localhost:5000/api/products',{
            productId:ProductId,
            productName:ProductName
        });
        console.log('Product created successfully');

    } catch (error) {
        
        console.error("error in creating the product",error.message);
    }

}

    return (
    <div>
<input type='text' value={ProductId} placeholder='productId' onChange={(e)=>setProductId(e.target.value)}/>
<input type='text' value={ProductName} placeholder='productName' onChange={(e)=>setProductName(e.target.value)}/>
<button onClick={handlesubmit}>Create products</button>
    </div>
  )
}
