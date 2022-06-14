const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("firebase-tools/lib/api");
const stripe = require("stripe")(
  "sk_test_51L9mEFSFJKcXfGZ1uyY9lsjdDI8UnH1TXYOBcEYLF4cG1UEkInlQ4ulOJmzzWUDBS5ZhXsoMkrvRaSu7WjmFtcgR00mEYHV891"
);

//API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/challenge-20c99/us-central1/api
