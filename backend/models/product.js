import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productId: {
    type: Number
    
  },
  productName: {
    type: String,
    required: true  // (Optional but recommended)
  },
  productDescription: {
    type: String,
    required: true  }
    ,productImage:{
      type:String,
      required:true
    }
}, {
  timestamps: true
});

const Products = mongoose.model('Products', productSchema);
export default Products;
