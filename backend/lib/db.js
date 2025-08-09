import mongoose from "mongoose";

const  connectDB = async() =>{
try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database has been connected successfully",connect.connection.host);
} catch (error) {
 console.log("failed to connect to the database",error);
 process.exit(1);   
}
};
export default connectDB;