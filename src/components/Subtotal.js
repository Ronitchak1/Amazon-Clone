import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {

  const [state,dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part Of the homework */}
                Subtotal ({state.basket.length} items) : <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type="checkbox"/> This order contains a gift
              </small>
            </>
          )}
          decimalScale = {2}
          value = {getBasketTotal(state.basket)} //Part Of Homework 
          displayType = {"text"}
          thousandSeparator = {true}
          prefix={"$"}  
        />

        <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal