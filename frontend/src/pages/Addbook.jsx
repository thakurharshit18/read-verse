"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import axios from "axios";


export  default function SignupFormDemo() {
  const handleSubmit= (e)=>{
    e.preventDefault();
    try {

      const res = axios.post("https://read-verse.onrender.com/api/products",{
        productName,
        productImage,
        productDescription
      });
      setsuccess(true);
      setProductDescription("");
      setProductImage("");
      setProductName("");
      
    } catch (error) {
      setsuccess(false);
      console.error("there was a error in sending the request",error);
    }
  }
const [success,setsuccess]=useState(null);
const [productName,setProductName]=useState("");
const [productDescription,setProductDescription] = useState("");
const [productImage,setProductImage]=useState("");
  return (
  <div className="relative top-15">
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 ">
        Add Books 
      </h2>
      {success !== null && (
  success
    ? <p className="font-extralight">Success</p>
    : <p className="font-extralight">Error</p>
)}
     
      <form className="my-8" >
        <div
          className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label >Book Name</Label>
            <Input  placeholder="......" type="text"  value={productName} onChange={(e)=>setProductName(e.target.value)}     />
          </LabelInputContainer>
         
        </div>
        <LabelInputContainer className="mb-4">
          <Label >Book Image</Label>
          <Input  placeholder="...." type="text" value={productImage} onChange={(e)=>setProductImage(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Book Description</Label>
          <Input id="text" type="text" value={productDescription} onChange={(e)=>setProductDescription(e.target.value)} placeholder="......"/>
        </LabelInputContainer>
        <button
        onClick={handleSubmit}
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          Submit  &rarr;
          <BottomGradient />
        </button>

        <div
          className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        
      </form>
    </div>
  </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
