import Product from "../models/product.js";

export const getallProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(400).json({ msg: "There was an error fetching the products" });
  }
};

export const createproduct = async (req, res) => {
  try {
    const { productId, productName, productDescription, productImage } = req.body;
    const newProduct = new Product({ productId, productName, productDescription, productImage });
    await newProduct.save();
    res.status(200).json({ msg: "New product added successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(400).json({ msg: "There was an error creating a new product" });
  }
};

export const deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({ msg: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ msg: "There was an error deleting the product" });
  }
};

export const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({ msg: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ msg: "There was an error updating the product" });
  }
};

export const productId = async(req,res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product){
      return res.status(404).json({msg:"Product not found"})
    }
    res.status(200).json({product});

  } catch (error) {
  console.log("there was a error in fetching the single books",error);
  }
}