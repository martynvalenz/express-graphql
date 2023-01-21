import mongoose from "mongoose";

export const connect = async() => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoDBGraphql",{
      useNewUrlParser:true,
    });
    console.log("Database is connected 🌈");
  } catch (error) {
    console.log(error);
  }
};
