import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L9mEFSFJKcXfGZ11D8EriXd8Tm4bBibwL3f99n8GzlKJCsL79vVvnRQYDtjpjhYixiNvn3tANuIBrQnqjHYFCAe00W44kJAAG"
);

export default function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //The User just/was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
};

const PaymentPage = () => {
  return (
    <>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </>
  );
};
