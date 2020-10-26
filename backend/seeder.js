import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";

import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Clear all DB docs
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Seed all users to DB and get the admin user
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Add admin user as creator of all products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // Seed all products to DB
    await Product.insertMany(sampleProducts);

    // Log the success confirmation message
    console.log("Data imported successfully".green.inverse);
    //
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Clear all DB docs
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    // Log the success confirmation message
    console.log("Data destroyed successfully".red.inverse);
    //
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
