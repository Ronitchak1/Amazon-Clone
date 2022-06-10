import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/checkout" element={<CheckoutPage/>} /> 
      </Routes>
    </div>
    </Router>
  );
}

const LoginPage = () => {
  return (
    <>
      <Login/>
    </>
  );
}

const HomePage = () => {
  return(
    <>
      <Header/>
      <Home/>
    </>
  );
}

const CheckoutPage = () => {
  return(
    <>
      <Header/>
      <Checkout/>
    </>
  );
}


