import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true,unique:true }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);





export default User;   // <-- export default for ES modules
