import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useNavigate } from "react-router-dom";

function Subtotal() {

  const navigate = useNavigate();
  const [state,dispatch] = useStateValue();

  const proceedToCheckout = () => {
      navigate('/payment');
  }

  return (
    <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({state.basket.length} items) : <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type="checkbox"/> This order contains a gift
              </small>
            </>
          )}
          decimalScale = {2}
          value = {getBasketTotal(state.basket)} 
          displayType = {"text"}
          thousandSeparator = {true}
          prefix={"$"}  
        />

        <button onClick={proceedToCheckout}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal