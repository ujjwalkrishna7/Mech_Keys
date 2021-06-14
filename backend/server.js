import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import coinbase from "coinbase-commerce-node";
import Order from "./models/orderModel.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
connectDB();

const app = express();

//coinbase
var Client = coinbase.Client;
var Webhook = coinbase.Webhook;
var Charge = coinbase.resources.Charge;
Client.init(process.env.COINBASE_API_KEY);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json()); //body parser

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//Coinbase
app.get("/api/orders/:id/createcharge", async (req, res) => {
  const order = await Order.findById(req.params.id);
  var chargeData = {
    name: "MechKeyz",
    description: "Pay with your prefered crypto",
    local_price: {
      amount: order.totalPrice,
      currency: "USD",
    },
    pricing_type: "fixed_price",
    metadata: {
      orderId: order._id,
    },
  };

  const charge = await Charge.create(chargeData);
  console.log(charge);
  res.send(charge);
});

//Coinbase Webhook
app.post("/api/webhookhandler", async (req, res) => {
  const rawBody = req.rawBody;
  const signature = req.headers["x-cc-webhook-signature"];
  const webhookSecret = process.env.COINBASE_WEBHOOK;

  try {
    const event = Webhook.verifyEventBody(rawBody, signature, webhookSecret);
    const orderId = event.metadata.orderId;
    const order = await Order.findById(orderId);

    if (order) {
      if (event.type === "charge:pending") {
        order.cryptoPayStatus = "pending";
      }

      if (event.type === "charge:confirmed") {
        order.isPaid = true;
        order.cryptoPayStatus = "confirmed";
      }

      if (event.type === "charge:failed") {
        order.cryptoPayStatus = "failed";
      }

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order not Found");
    }

    res.send(`success ${event.id}`);
  } catch (error) {
    res.status(400).send("failure!");
    throw new Error("Failed");
  }
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

//404 Error handling middleware
app.use(notFound);

//Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
