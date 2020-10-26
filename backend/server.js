import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRoutes);

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
